import fs from 'node:fs';
import path from 'node:path';
import sql from 'mssql';

const ROOT = 'C:/inetpub/AGP.Arch.erpx.Web.Home.server';
function stripJsonc(text){let out='',inStr=false,inLine=false,inBlock=false;for(let i=0;i<text.length;i++){const c=text[i],n=text[i+1];if(inLine){if(c==='\n'){inLine=false;out+=c;}continue;}if(inBlock){if(c==='*'&&n==='/'){inBlock=false;i++;}continue;}if(inStr){out+=c;if(c==='\\'){out+=text[++i]??'';continue;}if(c==='"')inStr=false;continue;}if(c==='"'){inStr=true;out+=c;continue;}if(c==='/'&&n==='/'){inLine=true;i++;continue;}if(c==='/'&&n==='*'){inBlock=true;i++;continue;}out+=c;}return out.replace(/,(\s*[}\]])/g,'$1');}
const cfg = JSON.parse(stripJsonc(fs.readFileSync(path.join(ROOT,'appsettings.json'),'utf8').replace(/^\uFEFF/,'')));
const conns = cfg.ConnectionStrings;
function parse(cs){const p={};for(const seg of cs.split(';')){const i=seg.indexOf('=');if(i<0)continue;p[seg.slice(0,i).trim().toLowerCase()]=seg.slice(i+1).trim();}return {server:p['server']||p['data source'],database:p['database']||p['initial catalog'],user:p['user id']||p['uid'],password:p['password']||p['pwd'],options:{encrypt:false,trustServerCertificate:true,enableArithAbort:true},connectionTimeout:20000,requestTimeout:120000};}
const targets = [
  ['main', conns.MainDbConnection],
  ['az', conns.AzDbConnection],
  ['gl', conns.GlDbConnection],
  ['py', conns.PyDbConnection],
  ['arch', conns.ArchDbConnection],
];
const needles = process.argv.slice(2);
if (!needles.length) needles.push('GLLCMF');

for (const [alias, cs] of targets) {
  const pool = new sql.ConnectionPool(parse(cs));
  try { await pool.connect(); } catch (e) { console.log(alias, 'connect fail', e.message); continue; }
  console.log('#####', alias, pool.config.database);
  const cols = (await pool.request().query(`
    SELECT s.name sch, o.name tbl, c.name col, ty.name typ
    FROM sys.columns c JOIN sys.objects o ON o.object_id=c.object_id JOIN sys.schemas s ON s.schema_id=o.schema_id
    JOIN sys.types ty ON ty.user_type_id=c.user_type_id
    WHERE o.type='U' AND ty.name IN ('nvarchar','varchar','ntext','text','xml')
  `)).recordset;
  for (const c of cols) {
    for (const needle of needles) {
      const q = `SELECT TOP 1 LEFT(CAST([${c.col}] AS nvarchar(max)),200) AS s FROM [${c.sch}].[${c.tbl}] WHERE [${c.col}] LIKE @n`;
      try {
        const r = await pool.request().input('n', sql.NVarChar, '%'+needle+'%').query(q);
        if (r.recordset.length) {
          console.log(`  HIT ${c.sch}.${c.tbl}.${c.col} (~${needle})`);
          console.log('      ', r.recordset[0].s.replace(/\s+/g,' ').slice(0,180));
        }
      } catch {}
    }
  }
  await pool.close();
}
console.log('done');
