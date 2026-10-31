#!/usr/bin/env node
/*
 * scripts/db.mjs — Unified, READ-ONLY helper to explore the ERP "sandoaa" databases.
 *
 * Why this exists: so the agent (and humans) stop re-discovering schemas and
 * re-experimenting on the same tables every session. It gives you:
 *   - a cached, grep-able catalog  -> refs/db/index.md  (+ .json)
 *   - lazy per-table schema cache  -> refs/db/cache/
 *   - live read-only queries       -> query / sample / big
 *
 * Connection info is read from appsettings.json (same file the app uses),
 * so no secret is duplicated. Every command is strictly read-only.
 *
 * Run `node scripts/db.mjs help` for usage.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sql from 'mssql';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const REFS = path.join(ROOT, 'refs', 'db');
const CACHE = path.join(REFS, 'cache');
const INDEX_MD = path.join(REFS, 'index.md');
const INDEX_JSON = path.join(REFS, 'index.json');

/* ------------------------------------------------------------------ *
 * Module map: short alias -> connection-string key(s) in appsettings  *
 * ------------------------------------------------------------------ */
const MODULES = [
  { alias: 'main', keys: ['MainDbConnection'], label: 'البرنامج الرئيسي / ERP' },
  { alias: 'az',   keys: ['AzDbConnection'],   label: 'المخازن / AZ' },
  { alias: 'gl',   keys: ['GlDbConnection', 'GlHstDbConnection'], label: 'المالية / GL' },
  { alias: 'py',   keys: ['PyDbConnection'],   label: 'شئون العاملين / PY' },
  { alias: 'arch', keys: ['ArchDbConnection'], label: 'الأرشيف / ARCH' },
];

/* ------------------------------------------------------------------ *
 * Config loading (appsettings.json is JSONC: comments + trailing commas)
 * ------------------------------------------------------------------ */
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

function loadConfigFile(file) {
  if (!fs.existsSync(file)) return null;
  try {
    return JSON.parse(stripJsonc(fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, '')));
  } catch (e) {
    throw new Error(`Cannot parse config "${file}": ${e.message}`);
  }
}

function resolveConfigPath(flags) {
  const explicit = flags.config || process.env.DB_CONFIG;
  if (explicit) return path.isAbsolute(explicit) ? explicit : path.join(ROOT, explicit);
  return path.join(ROOT, 'appsettings.json');
}

/* ------------------------------------------------------------------ *
 * Connection-string parsing -> node-mssql config
 * ------------------------------------------------------------------ */
function parseConnStr(cs) {
  const parts = {};
  for (const seg of String(cs).split(';')) {
    const i = seg.indexOf('=');
    if (i < 0) continue;
    parts[seg.slice(0, i).trim().toLowerCase()] = seg.slice(i + 1).trim();
  }
  const server = parts['server'] || parts['data source'] || parts['addr'];
  const database = parts['database'] || parts['initial catalog'];
  const user = parts['user id'] || parts['uid'] || parts['user'];
  const password = parts['password'] || parts['pwd'];
  const integrated = /^(true|sspi|yes)$/i.test(parts['integrated security'] || parts['trusted_connection'] || '');
  const cfg = {
    server,
    database,
    options: { encrypt: false, trustServerCertificate: true, enableArithAbort: true },
    pool: { max: 4, min: 0, idleTimeoutMillis: 30000 },
    connectionTimeout: 20000,
    requestTimeout: 60000,
  };
  if (integrated) cfg.options.trustedConnection = true;
  else { cfg.user = user; cfg.password = password; }
  return cfg;
}

function buildModules(flags) {
  const cfgPath = resolveConfigPath(flags);
  const cfg = loadConfigFile(cfgPath);
  const conns = (cfg && cfg.ConnectionStrings) || {};
  const mods = [];
  for (const m of MODULES) {
    let cs = null, key = null;
    if (process.env['DB_' + m.alias.toUpperCase()]) {
      cs = process.env['DB_' + m.alias.toUpperCase()]; key = 'env:' + m.alias.toUpperCase();
    } else {
      for (const k of m.keys) if (conns[k]) { cs = conns[k]; key = k; break; }
    }
    if (!cs) continue;
    const pc = parseConnStr(cs);
    // global server/user/pass override (handy for pointing at another host)
    if (process.env.DB_SERVER) pc.server = process.env.DB_SERVER;
    if (process.env.DB_USER && !pc.options.trustedConnection) pc.user = process.env.DB_USER;
    if (process.env.DB_PASS && !pc.options.trustedConnection) pc.password = process.env.DB_PASS;
    mods.push({ ...m, db: pc.database, connKey: key, cfg: pc });
  }
  if (!mods.length) {
    throw new Error(`No connections found in ${path.relative(ROOT, cfgPath)} (looked for ${MODULES.map(m => m.keys[0]).join(', ')})`);
  }
  return { mods, cfgPath };
}

function resolveModule(mods, token) {
  const t = String(token || '').toLowerCase();
  return mods.find(m => m.alias === t)
      || mods.find(m => m.db && m.db.toLowerCase() === t)
      || mods.find(m => m.db && m.db.toLowerCase().startsWith(t));
}

/* ------------------------------------------------------------------ *
 * Read-only guard (defence in depth)
 * ------------------------------------------------------------------ */
function stripSqlNoise(text) {
  return text
    .replace(/\/\*[\s\S]*?\*\//g, ' ')      // block comments
    .replace(/--[^\n\r]*/g, ' ')            // line comments
    .replace(/'(?:[^']|'')*'/g, "''")       // string literals
    .replace(/"(?:[^"]|"")*"/g, '""')       // quoted identifiers
    .replace(/\[[^\]]*\]/g, '[]');          // bracketed identifiers
}

function assertReadOnly(queryText) {
  const clean = stripSqlNoise(queryText).trim().replace(/;+\s*$/, '').trim();
  if (!clean) throw new Error('Empty query.');
  const first = clean.split(/\s+/)[0].toUpperCase();
  if (!['SELECT', 'WITH'].includes(first)) {
    throw new Error(`Refused: read-only helper only allows SELECT / WITH (got "${first}").`);
  }
  const banned = /\b(INSERT|UPDATE|DELETE|DROP|ALTER|TRUNCATE|MERGE|CREATE|EXEC|EXECUTE|GRANT|REVOKE|DENY|BACKUP|RESTORE|DBCC|INTO|OUTFILE|OPENROWSET|OPENQUERY|BULK|WAITFOR|SHUTDOWN)\b/i;
  const m = clean.match(banned);
  if (m) throw new Error(`Refused: query contains write/unsafe keyword "${m[1].toUpperCase()}".`);
  if (/;[\s\S]*\S/.test(clean)) throw new Error('Refused: only a single statement is allowed.');
  return queryText;
}

/* ------------------------------------------------------------------ *
 * DB access
 * ------------------------------------------------------------------ */
async function withPool(mod, fn) {
  const pool = new sql.ConnectionPool(mod.cfg);
  await pool.connect();
  try { return await fn(pool); }
  finally { await pool.close().catch(() => {}); }
}

async function runQuery(mod, text) {
  return withPool(mod, async (pool) => {
    const res = await pool.request().query(text);
    const sets = (res.recordsets || []).filter(Boolean);
    const rows = sets.length ? sets[sets.length - 1] : (res.recordset || []);
    return { rows: rows || [], columns: res.recordset && res.recordset.columns ? Object.keys(res.recordset.columns) : (rows[0] ? Object.keys(rows[0]) : []) };
  });
}

/* ------------------------------------------------------------------ *
 * Output helpers
 * ------------------------------------------------------------------ */
const cap = (s, n) => { s = s == null ? '' : String(s); return s.length > n ? s.slice(0, n - 1) + '…' : s; };
const cell = (v) => (v === null ? 'NULL' : v instanceof Date ? v.toISOString().slice(0, 10) : Buffer.isBuffer(v) ? `<${v.length}b>` : v);

function renderTable(rows, cols) {
  if (!rows || !rows.length) return '(no rows)';
  const headers = cols && cols.length ? cols : Object.keys(rows[0]);
  const body = rows.map(r => headers.map(h => cap(cell(r[h]), 42)));
  const widths = headers.map((h, i) => Math.min(42, Math.max(String(h).length, ...body.map(b => String(b[i]).length))));
  const line = (a) => a.map((c, i) => String(c).padEnd(widths[i])).join(' | ');
  const sep = widths.map(w => '-'.repeat(w)).join('-+-');
  const out = [line(headers.map(h => cap(h, 42))), sep, ...body.map(line)];
  if (rows.length > 300) out.push(`… (${rows.length} rows total)`);
  return out.join('\n');
}

function printRows(rows, cols, json) {
  if (json) { console.log(JSON.stringify(rows, (k, v) => (Buffer.isBuffer(v) ? `<${v.length}b>` : v), 2)); return; }
  console.log(renderTable(rows, cols));
}

/* ------------------------------------------------------------------ *
 * Commands
 * ------------------------------------------------------------------ */
async function cmdInfo(mods, cfgPath) {
  console.log(`config : ${path.relative(ROOT, cfgPath)}`);
  console.log(`modules: ${mods.length}\n`);
  for (const m of mods) {
    process.stdout.write(`${m.alias.padEnd(5)} ${String(m.db).padEnd(20)} ${m.label.padEnd(22)} `);
    try {
      const { rows } = await runQuery(m, 'SELECT DB_NAME() AS db, @@VERSION AS v');
      const ver = String(rows[0].v).split('\n')[0];
      console.log(`OK  (${ver.slice(0, 60)})`);
    } catch (e) {
      console.log(`FAIL (${e.message})`);
    }
  }
}

async function buildIndex(mods) {
  const out = { generatedAt: new Date().toISOString(), modules: {} };
  for (const m of mods) {
    const q = `
      SELECT s.name AS sch, o.name AS tbl, o.type AS kind,
             (SELECT COUNT(*) FROM sys.columns c WHERE c.object_id = o.object_id) AS cols,
             ISNULL((SELECT SUM(p.rows) FROM sys.partitions p WHERE p.object_id = o.object_id AND p.index_id IN (0,1)), 0) AS rows
      FROM sys.objects o
      JOIN sys.schemas s ON s.schema_id = o.schema_id
      WHERE o.type IN ('U','V') AND o.is_ms_shipped = 0
      ORDER BY o.name`;
    const { rows } = await runQuery(m, q);
    out.modules[m.alias] = {
      alias: m.alias, db: m.db, label: m.label,
      tables: rows.map(r => ({ schema: r.sch, name: r.tbl, kind: r.kind === 'V' ? 'view' : 'table', cols: r.cols, rows: Number(r.rows) })),
    };
  }
  fs.mkdirSync(REFS, { recursive: true });
  fs.writeFileSync(INDEX_JSON, JSON.stringify(out, null, 1));

  const md = [];
  md.push('# ERP sandoaa databases — table catalog');
  md.push('');
  md.push(`Generated: ${out.generatedAt}  •  Run \`node scripts/db.mjs index --refresh\` to rebuild.`);
  md.push('Format: `schema.name` — rows — cols — kind. Search this file (grep "name") to find where a table lives.');
  md.push('');
  for (const m of mods) {
    const mod = out.modules[m.alias];
    const totalRows = mod.tables.reduce((a, t) => a + t.rows, 0);
    md.push(`## ${m.alias} — ${m.db} — ${m.label}`);
    md.push(`_${mod.tables.filter(t => t.kind === 'table').length} tables, ${mod.tables.filter(t => t.kind === 'view').length} views, ~${totalRows.toLocaleString('en-US')} rows_`);
    md.push('');
    for (const t of mod.tables) {
      md.push(`- \`${t.schema}.${t.name}\` — ${t.rows.toLocaleString('en-US')} rows — ${t.cols} cols — ${t.kind}`);
    }
    md.push('');
  }
  fs.writeFileSync(INDEX_MD, md.join('\n'));
  const stat = fs.statSync(INDEX_MD);
  console.log(`Wrote ${path.relative(ROOT, INDEX_MD)} (${(stat.size / 1024).toFixed(0)} KB) and index.json`);
  for (const m of mods) console.log(`  ${m.alias.padEnd(5)} ${out.modules[m.alias].tables.length} objects`);
  return out;
}

function loadIndex() {
  if (!fs.existsSync(INDEX_JSON)) return null;
  return JSON.parse(fs.readFileSync(INDEX_JSON, 'utf8'));
}

const localDay = (d = new Date()) => {
  const x = new Date(d);
  return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(x.getDate()).padStart(2, '0')}`;
};

/*
 * Lazy once-a-day refresh: if the catalog was not built today, rebuild it now,
 * then every later call the same day is served from cache. No scheduler needed.
 * Disable with DB_NO_AUTO_INDEX=1.
 */
async function autoIndex(mods) {
  if (process.env.DB_NO_AUTO_INDEX === '1') return loadIndex();
  const idx = loadIndex();
  if (idx && idx.generatedAt && localDay(idx.generatedAt) === localDay()) return idx;
  console.log(`[auto] refreshing DB catalog for ${localDay()} (last: ${idx ? localDay(idx.generatedAt) : 'never'})...`);
  try { return await buildIndex(mods); }
  catch (e) { console.log(`[auto] refresh failed: ${e.message}. Using the existing catalog.`); return idx; }
}

function cmdFind(index, text) {
  const needle = String(text || '').toLowerCase();
  if (!needle) throw new Error('Usage: find <text>');
  const hits = [];
  for (const m of Object.values(index.modules)) {
    for (const t of m.tables) {
      const full = `${t.schema}.${t.name}`;
      if (full.toLowerCase().includes(needle)) hits.push({ db: m.db, alias: m.alias, table: full, rows: t.rows, cols: t.cols, kind: t.kind });
    }
  }
  hits.sort((a, b) => b.rows - a.rows);
  if (process.argv.includes('--json')) { console.log(JSON.stringify(hits, null, 2)); return; }
  if (!hits.length) { console.log(`No table/view matches "${text}".`); return; }
  console.log(`alias | table | rows | cols | kind`);
  for (const h of hits) console.log(`${h.alias.padEnd(5)} | ${h.table.padEnd(40)} | ${String(h.rows).padStart(10)} | ${String(h.cols).padStart(4)} | ${h.kind}`);
  console.log(`\n${hits.length} match(es).`);
}

function cachePaths(mod, table) {
  const safe = `${mod.alias}.${String(table).replace(/[^A-Za-z0-9_]/g, '_')}`;
  return { md: path.join(CACHE, safe + '.md'), json: path.join(CACHE, safe + '.json') };
}

/* Best-effort Arabic dictionary lookup from main DB metadata (Brca.SystemTableField). */
async function lookupArabic(mods, tableName) {
  const main = resolveModule(mods, 'main');
  if (!main) return new Map();
  try {
    const rows = await withPool(main, async (pool) => {
      const r = await pool.request().input('n', sql.NVarChar, tableName)
        .query('SELECT FieldName, DescriptionArabic FROM Brca.SystemTableField WHERE TableName = @n');
      return r.recordset;
    });
    const m = new Map();
    for (const r of rows) if (r.DescriptionArabic) m.set(String(r.FieldName).toLowerCase(), r.DescriptionArabic);
    return m;
  } catch { return new Map(); }
}

async function cmdColumns(mods, mod, table, refresh, jsonOut) {
  fs.mkdirSync(CACHE, { recursive: true });
  const cp = cachePaths(mod, table);
  if (!refresh && fs.existsSync(cp.md) && localDay(fs.statSync(cp.md).mtime) === localDay()) {
    if (jsonOut && fs.existsSync(cp.json)) { console.log(fs.readFileSync(cp.json, 'utf8')); return; }
    console.log(`(cached today: ${path.relative(ROOT, cp.md)} — use --refresh to re-read)`);
    console.log(fs.readFileSync(cp.md, 'utf8'));
    return;
  }
  const [sch, name] = String(table).includes('.') ? String(table).split('.') : ['dbo', String(table)];
  const q = `
    SELECT c.column_id AS ord, c.name AS col, ty.name AS type,
      c.max_length AS len, c.is_nullable AS nullable,
      c.is_identity AS ident,
      CASE WHEN pk.column_id IS NOT NULL THEN 1 ELSE 0 END AS pk
    FROM sys.columns c
    JOIN sys.types ty ON ty.user_type_id = c.user_type_id
    LEFT JOIN (
      SELECT ic.object_id, ic.column_id
      FROM sys.index_columns ic
      JOIN sys.indexes i ON i.object_id = ic.object_id AND i.index_id = ic.index_id
      WHERE i.is_primary_key = 1
    ) pk ON pk.object_id = c.object_id AND pk.column_id = c.column_id
    WHERE c.object_id = OBJECT_ID(QUOTENAME(@s) + '.' + QUOTENAME(@n))
    ORDER BY c.column_id`;
  const raw = await withPool(mod, async (pool) => {
    const r = await pool.request().input('s', sql.NVarChar, sch).input('n', sql.NVarChar, name).query(q);
    return r.recordset;
  });
  if (!raw.length) throw new Error(`Table ${sch}.${name} not found in ${mod.db}.`);
  const ar = await lookupArabic(mods, name);
  const rows = raw.map(r => ({ ord: r.ord, col: r.col, type: r.type, len: r.len, nullable: r.nullable, ident: r.ident, pk: r.pk, ar: ar.get(String(r.col).toLowerCase()) || '' }));
  const md = [`# ${mod.db}.${sch}.${name}`, '', renderTable(rows), ''].join('\n');
  fs.writeFileSync(cp.md, md);
  fs.writeFileSync(cp.json, JSON.stringify(rows, null, 2));
  if (jsonOut) { console.log(JSON.stringify(rows, null, 2)); return; }
  const arabicCount = rows.filter(r => r.ar).length;
  console.log(`(${mod.db} — ${rows.length} columns, ${arabicCount} with Arabic name — cached to ${path.relative(ROOT, cp.md)})`);
  console.log(renderTable(rows));
}

async function cmdFields(mods, table) {
  const main = resolveModule(mods, 'main');
  if (!main) throw new Error('Arabic metadata lives in the "main" module.');
  const { rows } = await withPool(main, async (pool) => {
    const r = await pool.request().input('n', sql.NVarChar, table)
      .query('SELECT FieldName AS field, DataType AS type, DescriptionArabic AS ar, DescriptionEnglish AS en FROM Brca.SystemTableField WHERE TableName = @n ORDER BY FieldName');
    return { rows: r.recordset };
  });
  if (!rows.length) { console.log(`No metadata for table "${table}". Try: node scripts/db.mjs word <arabic>`); return; }
  console.log(`-- Arabic field dictionary for "${table}" (${rows.length} fields)`);
  console.log(renderTable(rows));
}

async function cmdWord(mods, text) {
  const main = resolveModule(mods, 'main');
  if (!main) throw new Error('Arabic metadata lives in the "main" module.');
  const like = `%${text}%`;
  const q = `
    SELECT 'table' AS kind, TableName AS tbl, '' AS field, DescriptionArabic AS ar FROM Brca.SystemTable WHERE DescriptionArabic LIKE @w
    UNION ALL
    SELECT 'field' AS kind, TableName AS tbl, FieldName AS field, DescriptionArabic AS ar FROM Brca.SystemTableField WHERE DescriptionArabic LIKE @w`;
  const { rows } = await withPool(main, async (pool) => {
    const r = await pool.request().input('w', sql.NVarChar, like).query(q);
    return { rows: r.recordset };
  });
  if (!rows.length) { console.log(`No table/field described with "${text}".`); return; }
  console.log(`-- ${rows.length} match(es) for Arabic "${text}"`);
  console.log(renderTable(rows));
}

async function cmdSample(mod, table, n, jsonOut) {
  const [sch, name] = String(table).includes('.') ? String(table).split('.') : ['dbo', String(table)];
  const top = Math.max(1, Math.min(500, parseInt(n, 10) || 5));
  const q = `SELECT TOP ${top} * FROM ${baseQuote(sch)}.${baseQuote(name)}`;
  const { rows, columns } = await runQuery(mod, q);
  console.log(`-- ${mod.db}.${sch}.${name} (top ${top})`);
  printRows(rows, columns, jsonOut);
}

async function cmdBig(mod, n) {
  const top = Math.max(1, Math.min(100, parseInt(n, 10) || 20));
  const q = `
    SELECT TOP ${top} s.name + '.' + o.name AS tbl,
      SUM(p.rows) AS rows
    FROM sys.objects o
    JOIN sys.schemas s ON s.schema_id = o.schema_id
    JOIN sys.partitions p ON p.object_id = o.object_id AND p.index_id IN (0,1)
    WHERE o.type = 'U'
    GROUP BY s.name, o.name
    ORDER BY SUM(p.rows) DESC`;
  const { rows } = await runQuery(mod, q);
  console.log(`-- biggest tables in ${mod.db}`);
  console.log(renderTable(rows));
}

async function cmdQuery(mod, text, jsonOut) {
  assertReadOnly(text);
  const { rows, columns } = await runQuery(mod, text);
  console.log(`-- ${mod.db} (${rows.length} row(s))`);
  printRows(rows, columns, jsonOut);
}

/* Verified, ready-to-run cross-module summaries. */
async function cmdRecipes(mods) {
  console.log('### module-totals — عدد الكائنات والصفوف لكل قاعدة');
  const totals = [];
  for (const m of mods) {
    const { rows } = await runQuery(m, `SELECT SUM(CASE WHEN o.type='U' THEN 1 ELSE 0 END) AS [tables], SUM(CASE WHEN o.type='V' THEN 1 ELSE 0 END) AS [views], ISNULL(SUM(p.rows),0) AS [rows] FROM sys.objects o LEFT JOIN sys.partitions p ON p.object_id=o.object_id AND p.index_id IN (0,1) WHERE o.type IN ('U','V') AND o.is_ms_shipped=0`);
    totals.push({ module: m.alias, db: m.db, tables: rows[0].tables, views: rows[0].views, rows: rows[0].rows });
  }
  console.log(renderTable(totals));

  console.log('\n### top-tables — أكبر 10 جداول في كل قاعدة');
  const q = `SELECT TOP 10 s.name + '.' + o.name AS tbl, SUM(p.rows) AS rows FROM sys.objects o JOIN sys.schemas s ON s.schema_id=o.schema_id JOIN sys.partitions p ON p.object_id=o.object_id AND p.index_id IN (0,1) WHERE o.type='U' GROUP BY s.name,o.name ORDER BY SUM(p.rows) DESC`;
  for (const m of mods) {
    const { rows } = await runQuery(m, q);
    console.log(`\n-- ${m.db}`);
    console.log(renderTable(rows));
  }
  console.log('\nSee refs/db/queries.md for the query library and how to add recipes.');
}

/* ------------------------------------------------------------------ *
 * CLI
 * ------------------------------------------------------------------ */
const HELP = `scripts/db.mjs — read-only explorer for the ERP sandoaa databases

USAGE
  node scripts/db.mjs info
  node scripts/db.mjs index [--refresh]
  node scripts/db.mjs find <text> [--json]        # find a table by NAME
  node scripts/db.mjs word "<عربي>"                # find table/field by ARABIC meaning
  node scripts/db.mjs fields <table>              # Arabic dictionary for a table
  node scripts/db.mjs columns <db> <table> [--refresh] [--json]   # schema + Arabic names
  node scripts/db.mjs sample  <db> <table> [n] [--json]
  node scripts/db.mjs big     <db> [n]
  node scripts/db.mjs query   <db> "<SELECT ...>" [--json]
  node scripts/db.mjs recipes

  <db> = main | az | gl | py | arch   (or a full database name)
  Global flags: --config <file>  (default appsettings.json)

AUTO-REFRESH
  The catalog self-updates lazily: the first command you run each day rebuilds
  it; every later call that day is served from cache. No scheduler required.
  Disable with  DB_NO_AUTO_INDEX=1   Force now with  node scripts/db.mjs index --refresh

EXAMPLES
  node scripts/db.mjs find gljrnl
  node scripts/db.mjs word "الصندوق"
  node scripts/db.mjs columns gl GLJRNLH
  node scripts/db.mjs query gl "SELECT TOP 5 * FROM Cash_Flow"
  node scripts/db.mjs big az 15

Everything is read-only: non-SELECT statements are refused.`;

function parseFlags(argv) {
  const flags = {}; const pos = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--json') flags.json = true;
    else if (a === '--refresh') flags.refresh = true;
    else if (a === '--config') flags.config = argv[++i];
    else pos.push(a);
  }
  return { flags, pos };
}

const quoteIdent = (s) => '[' + String(s).replace(/]/g, ']]') + ']';
const baseQuote = quoteIdent;

async function main() {
  const { flags, pos } = parseFlags(process.argv.slice(2));
  const cmd = (pos.shift() || 'help').toLowerCase();
  if (cmd === 'help' || cmd === '--help' || cmd === '-h') { console.log(HELP); return; }

  const { mods, cfgPath } = buildModules(flags);

  if (cmd === 'index') {
    if (flags.refresh) return buildIndex(mods);
    const idx = await autoIndex(mods);
    console.log(idx
      ? `Catalog ready — generated ${idx.generatedAt} (today). Later calls today are instant. Use --refresh to force.`
      : 'No catalog available.');
    return;
  }
  if (cmd !== 'help') await autoIndex(mods);

  switch (cmd) {
    case 'info':
      return cmdInfo(mods, cfgPath);
    case 'find': {
      const index = loadIndex() || await buildIndex(mods);
      return cmdFind(index, pos.join(' '));
    }
    case 'columns': {
      if (pos.length < 2) throw new Error('Usage: columns <db> <table>');
      const mod = need(mods, pos[0]);
      return cmdColumns(mods, mod, pos[1], flags.refresh, flags.json);
    }
    case 'fields': {
      if (pos.length < 1) throw new Error('Usage: fields <table>');
      return cmdFields(mods, pos[0]);
    }
    case 'word':
    case 'ar': {
      if (pos.length < 1) throw new Error('Usage: word "<عربي>"');
      return cmdWord(mods, pos.join(' '));
    }
    case 'sample': {
      if (pos.length < 2) throw new Error('Usage: sample <db> <table> [n]');
      const mod = need(mods, pos[0]);
      return cmdSample(mod, pos[1], pos[2], flags.json);
    }
    case 'big': {
      const mod = need(mods, pos[0]);
      return cmdBig(mod, pos[1]);
    }
    case 'query': {
      if (pos.length < 2) throw new Error('Usage: query <db> "<SELECT ...>"');
      const mod = need(mods, pos[0]);
      return cmdQuery(mod, pos.slice(1).join(' '), flags.json);
    }
    case 'recipes':
    case 'sandoaa':
      return cmdRecipes(mods, flags.json);
    default:
      console.log(HELP);
      throw new Error(`Unknown command "${cmd}"`);
  }
}

function need(mods, token) {
  const m = resolveModule(mods, token);
  if (!m) throw new Error(`Unknown db "${token}". Known: ${mods.map(x => x.alias).join(', ')}`);
  return m;
}

main().catch((e) => { console.error(`ERROR: ${e.message}`); process.exit(1); });
