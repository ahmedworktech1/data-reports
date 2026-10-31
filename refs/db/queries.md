# ERP sandoaa — DB query library & how-to

Tool: `scripts/db.mjs` (read-only). Catalog: `refs/db/index.md`. Schema cache: `refs/db/cache/`.
**Rule: before touching the DB, read `refs/db/index.md` first — it is 77 KB and answers "where is this table" instantly.**

## Module map

| alias | database | module |
|-------|----------|--------|
| `main` | `erpx_sandoaa_br` | البرنامج الرئيسي / ERP + metadata (`Brca.SystemTable*`) |
| `az` | `azx_sandoaa` | المخازن / inventory |
| `gl` | `glx_sandoaa` | المالية / general ledger |
| `py` | `pyx_sandoaa` | شئون العاملين / HR |
| `arch` | `archx_sandoaa` | الأرشيف / archive |

## Everyday commands

```bash
node scripts/db.mjs info                      # which db, is it reachable
node scripts/db.mjs find gljrnl               # find a table by NAME across all dbs
node scripts/db.mjs word "الصندوق"             # find table/field by ARABIC meaning
node scripts/db.mjs fields GLJRNLH            # Arabic dictionary for a table
node scripts/db.mjs columns gl GLJRNLD        # schema + Arabic column names (cached)
node scripts/db.mjs sample  gl Cash_Flow 5    # first rows
node scripts/db.mjs big     az 15             # biggest tables
node scripts/db.mjs query   gl "SELECT ..."   # any SELECT (read-only enforced)
```
Shortcuts: `node scripts/db.mjs <db> <table>` for a module via `main/az/gl/py/arch`.

### Auto-refresh (no scheduler needed)

The catalog is **lazy-daily**: the first `db.mjs` command you run each day rebuilds `refs/db/index.md`
automatically; every later call that day is served from cache. Same for `refs/db/cache/<table>` (per-day).
Force a rebuild now with `node scripts/db.mjs index --refresh`; turn it off with `DB_NO_AUTO_INDEX=1`.

## The Arabic dictionary (the fast way to understand a table)

`Brca.SystemTableField` in `main` holds ~27,500 Arabic descriptions of ERP fields.
`columns`/`fields`/`word` use it automatically. Prefer reading an Arabic field name over guessing a column.

```bash
node scripts/db.mjs word "الرصيد"     node scripts/db.mjs word "التاريخ"
```

## Verified queries (copy/paste)

**GL — journal header + lines** (`GLJRNLH` + `GLJRNLD`, key = `JRN_CD` + `TR_NO`):
```sql
SELECT TOP 50 h.JRN_CD, h.TR_NO, h.TR_DT, h.HDSCR, d.LN_NO, d.ACC_NO, d.DB_VL, d.CR_VL
FROM GLJRNLH h
JOIN GLJRNLD d ON d.JRN_CD = h.JRN_CD AND d.TR_NO = h.TR_NO
WHERE h.PRD = 7 AND YEAR(h.TR_DT) = 2026
ORDER BY h.TR_DT DESC, h.TR_NO, d.LN_NO;
```

**GL — cash flow (verified, 17 cols):**
```sql
SELECT TOP 20 Sno, Ln_Key, Val, Tr_dt, Tr_mnth, Tr_Yr, EnteredBy
FROM Cash_Flow ORDER BY Tr_dt DESC;
```

**Any DB — biggest tables (orientation):**
```sql
SELECT TOP 20 s.name + '.' + o.name AS tbl, SUM(p.rows) AS rows
FROM sys.objects o
JOIN sys.schemas s ON s.schema_id = o.schema_id
JOIN sys.partitions p ON p.object_id = o.object_id AND p.index_id IN (0,1)
WHERE o.type = 'U'
GROUP BY s.name, o.name ORDER BY SUM(p.rows) DESC;
```

## Notes / gotchas

- **Some views are broken.** e.g. `glx_sandoaa.dbo.SYSNDX` (a VIEW) fails with *"binding errors"* — query the base table instead. `columns` still works (reads `sys.columns`), only SELECT against the view fails.
- Detail tables often repeat the header date/period (`GLJRNLD.TR_DT`, `.PRD`) — you can group without joining the header.
- ERP metadata is keyed by **bare** table name (`GLJRNLH`), not `schema.name`.

## Adding a recipe

Add it to `refs/db/queries.md` here, and — if it is broadly useful — to the `RECIPES`/`cmdRecipes` section in `scripts/db.mjs` keyed by module (`main/az/gl/py/arch`).
