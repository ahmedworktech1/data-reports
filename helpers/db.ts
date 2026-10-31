import sql from 'mssql';
import 'dotenv/config';

const config: sql.config = {
  server: process.env.DB_SERVER!,
  database: process.env.DB_NAME!,
  user: process.env.DB_USER!,
  password: process.env.DB_PASS!,
  options: { trustServerCertificate: true },
};

// Table names must come from a fixed list in the test, never from external input.
export async function dbSnapshot(tables: string[]) {
  const pool = await sql.connect(config);
  const snap: Record<string, any[]> = {};
  for (const t of tables) {
    const r = await pool.request().query(`SELECT * FROM ${t}`);
    snap[t] = r.recordset;
  }
  await pool.close();
  return snap;
}

export function dbDiff(before: Record<string, any[]>, after: Record<string, any[]>) {
  const out: Record<string, { added: any[]; removed: any[] }> = {};
  for (const t of Object.keys(after)) {
    const b = new Set(before[t].map(r => JSON.stringify(r)));
    const a = new Set(after[t].map(r => JSON.stringify(r)));
    out[t] = {
      added: after[t].filter(r => !b.has(JSON.stringify(r))),
      removed: before[t].filter(r => !a.has(JSON.stringify(r))),
    };
  }
  return out;
}
