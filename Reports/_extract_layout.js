const fs = require("fs");
const path = require("path");

function decode(s) {
  return s
    .replace(/&#xA;/g, "\n")
    .replace(/&#x9;/g, "\t")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"');
}

function extract(file) {
  const xml = fs.readFileSync(path.join(__dirname, file), "utf8");
  const items = [];
  const re =
    /<(TextBox|Table|HtmlTextBox|Panel|SubReport|PictureBox|CheckBox|Shape|List)\b([^>]*)>/g;
  let m;
  while ((m = re.exec(xml))) {
    const tag = m[1];
    const attrs = m[2];
    const name = (attrs.match(/\bName="([^"]+)"/) || [])[1];
    const value = (attrs.match(/\bValue="([^"]*)"/) || [])[1];
    const vis = (attrs.match(/\bVisible="([^"]*)"/) || [])[1];
    const left = (attrs.match(/\bLeft="([^"]*)"/) || [])[1];
    const top = (attrs.match(/\bTop="([^"]*)"/) || [])[1];
    const width = (attrs.match(/\bWidth="([^"]*)"/) || [])[1];
    const height = (attrs.match(/\bHeight="([^"]*)"/) || [])[1];
    items.push({
      tag,
      name,
      value: value ? decode(value).slice(0, 180) : "",
      vis: vis ? decode(vis) : "",
      left,
      top,
      width,
      height,
    });
  }

  const conds = [...xml.matchAll(/ConditionalFormatting[\s\S]{0,400}/g)].slice(0, 8);
  const bindings = [...xml.matchAll(/Bindings[\s\S]{0,300}/g)].slice(0, 8);
  const groups = [...xml.matchAll(/<Group Name="([^"]+)"/g)].map((x) => x[1]);
  const groupingExprs = [...xml.matchAll(/<Grouping>\s*<Expression>([^<]+)<\/Expression>/g)].map(
    (x) => decode(x[1])
  );
  const tableCols = [...xml.matchAll(/<TableColumn Width="([^"]+)"/g)].map((x) => x[1]);
  const reportParams = [...xml.matchAll(/<ReportParameter Name="([^"]+)"/g)].map((x) => x[1]);

  fs.writeFileSync(
    path.join(__dirname, "_extract_" + file + ".layout.json"),
    JSON.stringify(
      {
        file,
        bytes: xml.length,
        groups,
        groupingExprs,
        tableCols,
        reportParams,
        items,
        conds: conds.map((x) => decode(x[0].slice(0, 250))),
        bindings: bindings.map((x) => decode(x[0].slice(0, 250))),
      },
      null,
      2
    )
  );
}

extract("purchase_natiga_3mal_bat_fany.trdx");
extract("purchase_natiga_3mal_bat_fany_all_2.trdx");
console.log("layout done");
