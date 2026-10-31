#!/usr/bin/env node
/* Read-only query runner for azx_sandoaa_ahmed (not in appsettings — same server, same creds). */
import sql from 'mssql';

const conn = {
  server: 'DESKTOP-7E13GSG',
  database: 'azx_sandoaa_ahmed',
  user: 'admin',
  password: 'hgslduhgfwdv',
  options: { trustServerCertificate: true, encrypt: false },
  requestTimeout: 60000,
};

const q = process.argv[2];
if (!q) { console.error('usage: node ahmed_db.mjs "<SELECT ...>"'); process.exit(1); }
if (!/^\s*(select|with)\b/i.test(q)) { console.error('read-only: SELECT/WITH only'); process.exit(1); }

const pool = await new sql.ConnectionPool(conn).connect();
try {
  const r = await pool.request().query(q);
  if (!r.recordset.length) { console.log('(no rows)'); }
  else {
    const cols = Object.keys(r.recordset[0]);
    const w = cols.map(c => String(c).slice(0, 18).padEnd(18));
    console.log(w.join(' | '));
    console.log('-'.repeat(Math.min(200, w.join(' | ').length)));
    for (const row of r.recordset.slice(0, 40)) {
      console.log(cols.map(c => String(row[c] ?? '').slice(0, 18).padEnd(18)).join(' | '));
    }
    if (r.recordset.length > 40) console.log(`... ${r.recordset.length} rows total`);
  }
} finally { await pool.close(); }
