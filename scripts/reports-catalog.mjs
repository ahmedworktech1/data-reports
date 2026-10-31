#!/usr/bin/env node
/**
 * تقرير: فهرس مكتبة تقارير Telerik (.trdx)
 *
 * بيقرأ كل ملفات Reports/ **.trdx ويطلع:
 *   refs/reports/index.md        ملخص المكتبة (أعداد، وحدات، أهم الجداول، تحذيرات)
 *   refs/reports/index.json      نفس البيانات بشكل منظم (يستهلكه graphify)
 *   refs/reports/catalog-NN.md   سجل كل تقرير: الجداول، البارامترات، التقارير الفرعية
 *
 * الاستخدام:
 *   node scripts/reports-catalog.mjs            # يبني من Reports/
 *   node scripts/reports-catalog.mjs --dir X    # مجلد تاني
 *   node scripts/reports-catalog.mjs --check    # لا يكتب حاجة، بيطبع الأرقام بس
 *
 * ملاحظات:
 * - بيستخرج SQL من الخاصية SelectCommand بتاعة <SqlDataSource> (مش عنصر CommandText).
 * - ConnectionString في الملفات دي اسم اتصال (azxsandoaa/glxsandoaa/archxsandoaa...) مش سلسلة كاملة،
 *   فبنستنتج الوحدة من البادئة.
 * - الدمج بالـmd5: النسخ المتطابقة بتتحسب مرة واحدة وبتتسجل كـduplicates.
 * - ملحوظة: التقارير المبنية على WebService مالهاش SQL — بتتسجل بجداول فاضية وwsParams.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const argv = process.argv.slice(2);
const argDir = argv.indexOf('--dir');
const REPORTS = path.resolve(argDir >= 0 ? argv[argDir + 1] : path.join(ROOT, 'Reports'));
const OUT_DIR = path.join(ROOT, 'refs', 'reports');
const CHECK_ONLY = argv.includes('--check');
const SHARDS = 9;

const MODULE_BY_PREFIX = [
  ['azx', 'az'],
  ['glx', 'gl'],
  ['archx', 'arch'],
  ['pyx', 'py'],
  ['eraz', 'main'],
  ['erpx', 'main'],
];
const MODULE_LABEL = {
  az: 'المخازن AZ',
  gl: 'المالية GL',
  arch: 'الأرشيف ARCH',
  main: 'البرنامج الرئيسي',
  py: 'العاملين PY',
};
// أسماء مش جداول: CTE-ات (NUMBERED/RANKED/ALLMEMBERS)، بادئات schema، ودوال table-valued.
const NOISE = new Set([
  'DBO', 'FOR', 'NUMBERED', 'RANKED', 'ALLMEMBERS',
  'STRING_SPLIT', 'OPENJSON', 'OPENROWSET', 'OPENQUERY', 'FREETEXTTABLE', 'CONTAINSTABLE',
  'X', 'Y', 'A', 'B', 'T1', 'T2', 'T3',
]);

const decode = (s = '') =>
  s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&');

const dbOf = (alias) => {
  const a = String(alias || '').trim().toLowerCase();
  for (const [prefix, module] of MODULE_BY_PREFIX) if (a.startsWith(prefix)) return module;
  return null;
};

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.isFile() && entry.name.toLowerCase().endsWith('.trdx')) out.push(full);
  }
  return out;
}

function attr(tagText, name) {
  const m = tagText.match(new RegExp(`\\b${name}="([^"]*)"`));
  return m ? decode(m[1]) : null;
}

function parseReport(file) {
  const buf = fs.readFileSync(file);
  const md5 = crypto.createHash('md5').update(buf).digest('hex');
  const text = buf.toString('utf8');
  const rel = path.relative(ROOT, file).split(path.sep).join('/');
  const stem = path.basename(file, path.extname(file));

  const reportTag = (text.match(/<Report\b[^>]*>/) || [''])[0];
  const rootName = attr(reportTag, 'Name') || '';

  const tables = new Set();
  const ctes = new Set();
  const params = new Set();
  const subreports = new Set();
  const modules = new Set();
  let sqlChars = 0;
  let wsParams = 0;

  // ملفات مش XML: بعض المعروض في التقارير اتصدّر كـzip بنفس الامتداد، وفيه ملف فاضي.
  // بنسجّلها في formatIssues بدل ما نتجاهلها بصمت.
  let formatIssue = null;
  if (buf.length < 16) formatIssue = 'empty file';
  else if (buf[0] === 0x50 && buf[1] === 0x4b) formatIssue = 'ZIP archive, not XML (packaged .trdx)';
  else if (!/<Report\b/.test(text)) formatIssue = 'no <Report> element (not a Telerik XML report)';

  for (const m of text.matchAll(/<SqlDataSource\b[^>]*>/g)) {
    const cmd = attr(m[0], 'SelectCommand') || attr(m[0], 'CommandText') || '';
    const conn = attr(m[0], 'ConnectionString') || attr(m[0], 'ConnectionStringName') || '';
    if (conn) {
      const mod = dbOf(conn);
      if (mod) modules.add(mod);
    }
    if (!cmd) continue;
    sqlChars += cmd.length;
    // نصوص حرفية وتعليقات ممكن تحتوي على كلمة from (مثال: 'FROM SQL' AS ACC_NO)، فبنشيلها
    // قبل استخراج أسماء الجداول. CTE-ات (`WITH x AS (...)`) كذلك بتظهر في FROM وبتشبه الجداول.
    const cleanSql = cmd
      .replace(/'(?:[^']|'')*'/g, "''")
      .replace(/--[^\n]*/g, " ")
      .replace(/\/\*[\s\S]*?\*\//g, " ");
    const ctes_inner = new Set();
    // الـCTE ممكن ييجي بعد `WITH` أو بعد فاصلة في قائمة CTE-ات متعددة.
    // ملاحظة: `\b,` كانت غلط — الفاصلة بعد `)` مالها word-boundary، فكانت الـCTE-ات
    // التانية في القائمة بتتسرب كأنها جداول. الشكل الصح: `\bwith\b` أو `,`.
    for (const c of cleanSql.matchAll(/(?:\bwith\b|,)\s*(\w+)\s+as\s*\(/gi)) {
      ctes_inner.add(c[1].toUpperCase());
      ctes.add(c[1].toUpperCase());
    }
    for (const t of cleanSql.matchAll(/\b(?:from|join)\s+(\[?[A-Za-z_][\w$#]*\]?(?:\s*\.{1,2}\s*\[?[A-Za-z_][\w$#]*\]?)*)/gi)) {
      const parts = t[1]
        .replace(/\[|\]/g, '')
        .split('.')
        .map((x) => x.trim())
        .filter(Boolean);
      const base = (parts[parts.length - 1] || '').toUpperCase();
      if (base.startsWith('#') || base.startsWith('@') || NOISE.has(base) || ctes_inner.has(base) || base.length < 2) continue;
      tables.add(base);
    }
  }
  for (const m of text.matchAll(/<ReportParameter\b[^>]*>/g)) {
    const n = attr(m[0], 'Name');
    if (n) params.add(n);
  }
  for (const m of text.matchAll(/<WebServiceParameter\b[^>]*>/g)) wsParams++;
  for (const m of text.matchAll(/<UriReportSource\b[^>]*>/g)) {
    const uri = attr(m[0], 'Uri') || '';
    if (uri && uri.length < 200 && !uri.startsWith('=')) {
      subreports.add(path.basename(uri, path.extname(uri)));
    }
  }

  return {
    file: rel,
    stem,
    reportName: rootName && rootName !== 'Report' ? rootName : stem,
    folder: path.posix.dirname(rel),
    modules: [...modules].sort(),
    tables: [...tables].sort(),
    ctes: [...ctes].sort(),
    params: [...params].sort(),
    subreports: [...subreports].sort(),
    sqlChars,
    wsParams,
    md5,
    size: buf.length,
    formatIssue,
  };
}

const slug = (s) => (String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '') || 'x');

function main() {
  const files = walk(REPORTS).sort();
  const records = [];
  const errors = [];
  for (const f of files) {
    try {
      records.push(parseReport(f));
    } catch (e) {
      errors.push({ file: path.relative(ROOT, f).split(path.sep).join('/'), error: `${e.name}: ${e.message}` });
    }
  }

  // dedupe by md5, keep the copy outside Temp/ with the shortest path
  const byMd5 = new Map();
  for (const r of records) {
    const list = byMd5.get(r.md5) || [];
    list.push(r);
    byMd5.set(r.md5, list);
  }
  const unique = [];
  for (const list of byMd5.values()) {
    list.sort(
      (a, b) => (a.file.startsWith('Reports/Temp/') ? 1 : 0) - (b.file.startsWith('Reports/Temp/') ? 1 : 0) || a.file.length - b.file.length || a.file.localeCompare(b.file),
    );
    const canon = list[0];
    canon.duplicateCopies = list.slice(1).map((r) => r.file);
    unique.push(canon);
  }
  unique.sort((a, b) => a.folder.localeCompare(b.folder) || a.stem.toLowerCase().localeCompare(b.stem.toLowerCase()));

  const counter = (arr) => {
    const m = new Map();
    for (const k of arr) m.set(k, (m.get(k) || 0) + 1);
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  };

  const stats = {
    scannedAt: new Date().toISOString().slice(0, 10),
    reportsDir: path.relative(ROOT, REPORTS).split(path.sep).join('/'),
    files: files.length,
    parsed: records.length,
    parseErrors: errors,
    uniqueReports: unique.length,
    duplicateFilesCollapsed: files.length - unique.length,
    withSql: unique.filter((r) => r.sqlChars > 0).length,
    withTables: unique.filter((r) => r.tables.length).length,
    withParams: unique.filter((r) => r.params.length).length,
    withSubreports: unique.filter((r) => r.subreports.length).length,
    withWebService: unique.filter((r) => r.wsParams > 0).length,
    withCtes: unique.filter((r) => r.ctes.length > 0).length,
    distinctCtes: new Set(unique.flatMap((r) => r.ctes)).size,
    withoutModule: unique.filter((r) => !r.modules.length).length,
    formatIssues: unique
      .filter((r) => r.formatIssue)
      .map((r) => ({ file: r.file, issue: r.formatIssue })),
    distinctTables: new Set(unique.flatMap((r) => r.tables)).size,
    folders: counter(unique.map((r) => r.folder)),
    modules: counter(unique.flatMap((r) => r.modules)),
    topTables: counter(unique.flatMap((r) => r.tables)).slice(0, 15),
  };

  console.log(`scanned ${stats.files} .trdx -> ${stats.parsed} parsed, ${stats.uniqueReports} unique (${stats.duplicateFilesCollapsed} duplicate copies collapsed)`);
  if (stats.parseErrors.length) console.log(`parse errors: ${stats.parseErrors.length}`);
  if (stats.formatIssues.length) console.log(`format issues: ${stats.formatIssues.length} file(s) not Telerik XML`);
  if (CHECK_ONLY) return;

  fs.mkdirSync(OUT_DIR, { recursive: true });

  // shards
  const per = Math.ceil(unique.length / SHARDS);
  const shards = [];
  for (let s = 0; s < SHARDS; s++) {
    const part = unique.slice(s * per, (s + 1) * per);
    if (!part.length) continue;
    const name = `catalog-${String(s + 1).padStart(2, '0')}.md`;
    // كل تقرير بيتسجل باسم الـshard اللي فيه، عشان أي أداة تانية (graphify) تربط العقدة بالملف الصح
    for (const r of part) r.shard = `refs/reports/${name}`;
    const lines = [
      `# كتالوج التقارير — جزء ${String(s + 1).padStart(2, '0')} من ${String(SHARDS).padStart(2, '0')}`,
      '',
      'سجل آلي (مش مستخرج بالـLLM) لكل تقرير Telerik: الاسم، القاعدة، الجداول اللي بيقراها، البارامترات، والتقارير الفرعية.',
      'المصدر: `<SqlDataSource SelectCommand=...>` و`<UriReportSource Uri=...>` جوه ملفات `.trdx`.',
      'لتجديد الملف ده: `node scripts/reports-catalog.mjs`',
      '',
      '| # | التقرير (stem) | مسار | القاعدة | جداول | CTE | بارامترات | تقارير فرعية | نسخ مكررة |',
      '|---|---|---|---|---|---|---|---|---|',
    ];
    part.forEach((r, i) => {
      const tables = r.tables.slice(0, 12).join(', ') + (r.tables.length > 12 ? ' …' : '');
      const cteCell = r.ctes.slice(0, 6).join(', ') + (r.ctes.length > 6 ? ' ...' : '');
      const params = r.params.slice(0, 8).join(', ') + (r.params.length > 8 ? ' …' : '');
      const subs = r.subreports.slice(0, 6).join(', ');
      lines.push(
        `| ${i + 1 + s * per} | ${r.stem} | \`${r.folder}/\` | ${r.modules.join(', ') || '—'} | ${tables || '—'} | ${cteCell || '—'} | ${params || '—'} | ${subs || '—'} | ${r.duplicateCopies.length || '—'} |`,
      );
    });
    const name2 = `catalog-${String(s + 1).padStart(2, '0')}.md`;
    fs.writeFileSync(path.join(OUT_DIR, name2), lines.join('\n') + '\n', 'utf8');
    shards.push(name2);
  }

  // index.json (single source of truth for the graph step)
  fs.writeFileSync(
    path.join(OUT_DIR, 'index.json'),
    JSON.stringify({ stats, reports: unique }, null, 1),
    'utf8',
  );

  // index.md
  const md = [];
  md.push('# مكتبة تقارير Telerik — فهرس');
  md.push('');
  md.push('فهرس آلي لكل تقرير `.trdx` في `Reports/`. مش بديل عن قراءة التقرير: ده سجل للاسم والقاعدة والجداول والبارامترات.');
  md.push('');
  md.push('## الأرقام');
  md.push('');
  md.push('| البند | العدد |');
  md.push('|---|---|');
  md.push(`| ملفات \`.trdx\` | ${stats.files} |`);
  md.push(`| اتقرأ بنجاح | ${stats.parsed} |`);
  md.push(`| **تقارير فريدة (بعد دمج الـmd5)** | **${stats.uniqueReports}** |`);
  md.push(`| نسخ مكررة متطابقة | ${stats.duplicateFilesCollapsed} |`);
  md.push(`| فيها SQL | ${stats.withSql} |`);
  md.push(`| بتقرا جداول | ${stats.withTables} |`);
  md.push(`| فيها بارامترات | ${stats.withParams} |`);
  md.push(`| فيها تقارير فرعية | ${stats.withSubreports} |`);
  md.push(`| مبنية على WebService | ${stats.withWebService} |`);
  md.push(`| من غير قاعدة معروفة | ${stats.withoutModule} |`);
  md.push(`| جداول مختلفة | ${stats.distinctTables} |`);
  md.push('');
  md.push('## التوزيع');
  md.push('');
  md.push('| المجلد | تقارير |');
  md.push('|---|---|');
  for (const [f, n] of stats.folders) md.push(`| \`${f}/\` | ${n} |`);
  md.push('');
  md.push('| القاعدة | تقارير |');
  md.push('|---|---|');
  for (const [m, n] of stats.modules) md.push(`| ${MODULE_LABEL[m] || m} (\`${m}\`) | ${n} |`);
  md.push('');
  md.push('## أهم الجداول (أكتر الجداول اللي التقارير بتقراها)');
  md.push('');
  for (const [t, n] of stats.topTables) md.push(`- \`${t}\` — ${n} تقرير`);
  md.push('');
  md.push('## تحذيرات');
  md.push('');
  md.push(`- **${stats.withWebService} تقرير** بياخد بياناته من WebService مش من SQL، فمفيش جداول مسجلة ليه.`);
  md.push(`- **${stats.withoutModule} تقرير** الـ\`ConnectionString\` بتاعه مش من أسماء القواعد المعروفة (أسماء اتصال قديمة/مخصصة).`);
  if (stats.formatIssues.length) {
    md.push(`- **${stats.formatIssues.length} ملف** امتداده \`.trdx\` لكنه مش XML تقرير Telerik (زي Zip معروض/ملف فاضي) — بيتسجل بالاسم بس من غير جداول:`);
    for (const e of stats.formatIssues) md.push(`  - \`${e.file}\` — ${e.issue}`);
  }
  if (stats.parseErrors.length) {
    md.push(`- **${stats.parseErrors.length} ملف** اتخطى بسبب خطأ قراءة:`);
    for (const e of stats.parseErrors) md.push(`  - \`${e.file}\` — ${e.error}`);
  }
  md.push(`- النسخ المتطابقة بتتسجل كـcopies في \`index.json\`؛ أي تعديل على تقرير بيفصل النسخة عنه.`);
  md.push('');
  md.push('## التجديد');
  md.push('');
  md.push('```bash');
  md.push('node scripts/reports-catalog.mjs          # يعيد بناء index.md + index.json + catalog-*.md');
  md.push('node scripts/reports-catalog.mjs --check   # أرقام بس، من غير كتابة');
  md.push('```');
  md.push('');
  md.push(`الملفات: ${shards.map((s) => '`' + s + '`').join('، ')}`);
  fs.writeFileSync(path.join(OUT_DIR, 'index.md'), md.join('\n') + '\n', 'utf8');

  console.log(`wrote refs/reports/index.md, index.json, ${shards.length} catalog shards`);
}

main();
