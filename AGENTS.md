# AGENTS.md

## Databases (ERP "sandoaa")

Five SQL Server databases on `DESKTOP-7E13GSG`, configured in `appsettings.json`:

| alias | database | module |
|-------|----------|--------|
| `main` | `erpx_sandoaa_br` | ERP core + field metadata |
| `az` | `azx_sandoaa` | المخازن / inventory |
| `gl` | `glx_sandoaa` | المالية / general ledger |
| `py` | `pyx_sandoaa` | شئون العاملين / HR |
| `arch` | `archx_sandoaa` | الأرشيف / archive |

## Before you query the DB

**Do not re-discover schemas from scratch.** Use the cached catalog and the helper:

1. Read `refs/db/index.md` (77 KB) — every table/view, its db, rows and column count. Grep it to find where a table lives.
2. Read `refs/db/queries.md` — module map, verified queries, gotchas.
3. For anything live, use **`scripts/db.mjs`** (read-only):

```bash
node scripts/db.mjs info
node scripts/db.mjs index [--refresh]
node scripts/db.mjs find <text>          # find a table by name
node scripts/db.mjs word "<عربي>"         # find table/field by Arabic meaning
node scripts/db.mjs fields <table>       # Arabic dictionary for a table
node scripts/db.mjs columns <db> <table> # schema + Arabic column names (cached in refs/db/cache/)
node scripts/db.mjs sample <db> <table> [n]
node scripts/db.mjs big <db> [n]
node scripts/db.mjs query <db> "<SELECT ...>"
```

- The tool reads connection info from `appsettings.json`; secrets are never duplicated.
- It is **strictly read-only**: only `SELECT`/`WITH` are allowed; writes are refused.
- **The catalog self-refreshes once a day:** the first `db.mjs` call each day rebuilds `refs/db/index.md` automatically (lazy, no scheduler); every later call that day uses the cache. Force it with `node scripts/db.mjs index --refresh`, disable with `DB_NO_AUTO_INDEX=1`.
- Per-table schema (`refs/db/cache/`) also refreshes once a day on first use.
- A Windows Scheduled Task **`ERP-sandoaa-DB-catalog-refresh`** runs `db.mjs index` at logon (with `StartWhenAvailable`), so the catalog is rebuilt on the first logon after the machine was off. It is a no-op if the catalog was already built that day. Output logs to `logs/db-refresh.log`.

## Telerik reports

See the `telerik-reports` skill for anything under `Reports/` (`.trdx`/`.trdp`).

**Report library index (no LLM, deterministic):** `refs/reports/index.md` summarises all
`.trdx` reports; `index.json` is the machine-readable form; `catalog-01..09.md` list every
unique report with its folder, DB, tables, CTEs, parameters and subreports. Regenerate after
adding/editing reports:

```bash
node scripts/reports-catalog.mjs          # rebuild refs/reports/index.md + index.json + catalog-*.md
node scripts/reports-catalog.mjs --check  # print the numbers only, write nothing
```

- SQL comes from the `SelectCommand` attribute of `<SqlDataSource>`; the DB is inferred from
  the `ConnectionString` alias prefix (`azx`/`glx`/`archx`/`pyx`/`erax`).
- Reports are deduplicated by md5; identical copies are listed as `duplicateCopies`.
- `CTE` names (`WITH x AS (...)`) are recorded but never counted as tables.
- The same records are seeded into the knowledge graph, so `graphify query` can answer
  "which reports read table X?" without opening any `.trdx`.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:
- When graphify-out/graph.json exists, run `graphify query "<question>"` before your first grep, search or source-file read for a codebase question, and put this rule in every subagent prompt that explores code. Read raw files only for lines the graph or an earlier read already located. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
- A committed graphify-out/graph.json is rewritten whole on every build, so a large diff to it in a pull request is expected. Do not flag it as churn or suggest skipping the graph rebuild or its hooks.
