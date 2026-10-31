const fs = require("fs");
const path = require("path");

const files = [
  "purchase_natiga_3mal_bat_fany.trdx",
  "purchase_natiga_3mal_bat_fany_all_2.trdx",
  "purchase_natiga_3mal_bat_fany_all_1.trdx",
  "purchase_natiga_3mal_bat_fany_all_3.trdx",
  "purchase_subreport_bat_fany.trdx",
  "purchase_subreport_bat_fany_2.trdx",
];

function decode(s) {
  return s
    .replace(/&#xA;/g, "\n")
    .replace(/&#x9;/g, "\t")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"');
}

for (const f of files) {
  const xml = fs.readFileSync(path.join(__dirname, f), "utf8");
  const m = xml.match(/SelectCommand="([^"]*)"/);
  const out = path.join(__dirname, "_extract_" + f + ".sql.txt");
  if (!m) {
    fs.writeFileSync(out, "NO SQL");
    continue;
  }
  fs.writeFileSync(out, decode(m[1]));
  const params = [...xml.matchAll(/<ReportParameter[^>]*Name="([^"]+)"/g)].map((x) => x[1]);
  const filters = [...xml.matchAll(/FilterExpression="([^"]*)"/g)].map((x) => decode(x[1]));
  const vis = [...xml.matchAll(/Visible="\{([^}]*)\}"/g)].map((x) => x[1]);
  const groups = [...xml.matchAll(/Groupings>[\s\S]*?<Name>([^<]+)<\/Name>/g)].map((x) => x[1]);
  fs.writeFileSync(
    path.join(__dirname, "_extract_" + f + ".meta.txt"),
    JSON.stringify({ params, filters, vis: vis.slice(0, 40), groups, bytes: xml.length }, null, 2)
  );
}
console.log("done");
