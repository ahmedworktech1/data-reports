import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sql from 'mssql';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function stripJsonc(text) {
  let out = '';
  let inStr = false, inLine = false, inBlock = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i], n = text[i + 1];
    if (inLine) { if (c === '\n') { inLine = false; out += c; } continue; }
    if (inBlock) { if (c === '*' && n === '/') { inBlock = false; i++; } continue; }
    if (inStr) {
      out += c;
      if (c === '\\') { out += text[++i] ?? ''; continue; }
      if (c === '"') inStr = false;
      continue;
    }
    if (c === '"') { inStr = true; out += c; continue; }
    if (c === '/' && n === '/') { inLine = true; i++; continue; }
    if (c === '/' && n === '*') { inBlock = true; i++; continue; }
    out += c;
  }
  return out.replace(/,(\s*[}\]])/g, '$1');
}

function parseConnStr(cs) {
  const parts = {};
  for (const seg of String(cs).split(';')) {
    const i = seg.indexOf('=');
    if (i < 0) continue;
    parts[seg.slice(0, i).trim().toLowerCase()] = seg.slice(i + 1).trim();
  }
  const cfg = {
    server: parts['server'] || parts['data source'],
    database: parts['database'] || parts['initial catalog'],
    options: { encrypt: false, trustServerCertificate: true, enableArithAbort: true },
    connectionTimeout: 20000,
    requestTimeout: 120000,
  };
  const integrated = /^(true|sspi|yes)$/i.test(parts['integrated security'] || parts['trusted_connection'] || '');
  if (integrated) cfg.options.trustedConnection = true;
  else { cfg.user = parts['user id'] || parts['uid']; cfg.password = parts['password'] || parts['pwd']; }
  return cfg;
}

const sqlFile = process.argv[2];
const outFile = process.argv[3];
const cfg = JSON.parse(stripJsonc(fs.readFileSync(path.join(ROOT, 'appsettings.json'), 'utf8').replace(/^\uFEFF/, '')));
const conn = parseConnStr(cfg.ConnectionStrings.AzDbConnection);
const text = fs.readFileSync(sqlFile, 'utf8');
const pool = await sql.connect(conn);
const res = await pool.request().query(text);
fs.writeFileSync(outFile, JSON.stringify(res.recordset, (k, v) => (Buffer.isBuffer(v) ? null : v)), 'utf8');
console.log('rows=' + res.recordset.length + ' cols=' + res.recordset.columns.length);
await pool.close();
