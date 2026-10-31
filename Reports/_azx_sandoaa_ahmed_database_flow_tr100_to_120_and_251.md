# how `azx_sandoaa_ahmed` database flow work — from `tr_ty = 100` until `tr_ty = 120` or `tr_ty = 251`

**Scope of this document.** A walkthrough of the data flow in the `azx_sandoaa_ahmed` SQL Server database (the **az / inventory** database of the ERP "sandoaa" system) for the **transaction-type codes** that the codebase and its reports actually exercise: the range `tr_ty = 100` up to and including the boundary `tr_ty = 120`, plus the outlier `tr_ty = 251`. The notes below are assembled from the repository's own artifacts (schemas cached in `refs/db/cache/`, the DB CLI tool `scripts/db.mjs`, the Telerik report library, and the log/attachment files), and from the concrete queries the system runs.

> ⚠️ This is a **read-only, context-gathering** document. It describes *how the database flow works* from the code's point of view. It is not a new feature and it does not change any data. Everything here is derived from files already in the repository; a live connection to `DESKTOP-7E13GSG` is **not** needed to use it. Where the repository evidence is partial (e.g. the exact label text for every `tr_ty` value), the gap is called out.

---

## 0. What `tr_ty` is in this database

`TR_TY` is a **smallint** (2 bytes), not nullable, and it is part of the **primary key** of the two central transaction tables. It is the *transaction-type code* — the "رقم الحركة" / "move number" that disambiguates *what kind of movement or operation* a document is.

| Table | Column | Role | PK |
|---|---|---|---|
| `azx_sandoaa.dbo.AZTRH` | `TR_TY` | Header of every inventory/purchase/offer/lifecycle transaction | yes (with LOC, TR_NO) |
| `azx_sandoaa.dbo.AZTRD` | `TR_TY` | Detail lines of those transactions | yes (with LOC, TR_NO) |

Because `TR_TY` is part of the key, a **header+line pair is uniquely identified by `(LOC, TR_TY, TR_NO)`**. Every report and every application query therefore filters on `tr_ty` (or joins it) before it ever touches the detail rows. This single design fact explains why the codebase writes `tr_ty = 100`, `tr_ty = 120`, `tr_ty = 251` the way it does.

Two *other* `tr_*` codes are easy to confuse with `TR_TY` but are different:

* `AZTRH.PTR_TY` / `AZTRD.PTR_TY` — "pointer type", a secondary reference (intent/override), not the main transaction type.
* `AZTRH.TMP_TR_TY` / `AZTRD.TMP_TR_TY` — a temporary/in-memory type used during processing, not a stored domain value.
* `GL` tables use `GLJRNLH.TR_TY` / `GLJRNLD.TR_TY` etc., but those live in `glx_sandoaa`, not `azx_sandoaa_ahmed`.

So when this document says "`tr_ty = 100`," it always refers to the **az inventory** `TR_TY`.

---

## 1. Connection / configuration the flow is bound to

The database the flow runs against is defined in the connection strings:

```json
"AzDbConnection": "Server=DESKTOP-7E13GSG;Database=azx_sandoaa_ahmed;User ID=admin;Password=hgslduhgfwdv;TrustServerCertificate=True;",
"المخازن": "Data Source=DESKTOP-7E13GSG; Initial Catalog=azx_sandoaa_ahmed; User ID=admin;Password=hgslduhgfwdv; TrustServerCertificate=True;"
```

- **Server:** `DESKTOP-7E13GSG` (the local dev machine).
- **Database:** `azx_sandoaa_ahmed` — the **az** ("المخازن" = inventory) module of the ERP sandoaa.
- **Tooling:** a read-only query runner `scripts/_ahmed_db.mjs` exists specifically for this database (same server + credentials, not duplicated into `appsettings.json`):

```bash
node _ahmed_db.mjs "<SELECT ...>"
```

It enforces `SELECT`/`WITH` only (writes are rejected) and prints the first 40 rows.

> Note: there are also `azx_sandoaa` (no `_ahmed`) and `azx_sandoaa_ahmed` variants in the `appsettings` files across the repo. This document targets **`azx_sandoaa_ahmed`** explicitly, because that is the database named in the request.

---

## 2. The key tables the flow touches

### 2.1 `AZTRH` — purchase / transaction **header** (`azx_sandoaa.dbo.AZTRH`)

509 columns. The flow's "what is this document?" part lives here:

| Col | Meaning |
|---|---|
| `LOC` | branch / location (part of PK) |
| `TR_TY` | **transaction type code** (primary key component) |
| `TR_NO` | document / move number (part of PK) |
| `TR_DT` | transaction date |
| `TR_DS` | movement type |
| `GRP` | movement group |
| `RANK` | rank within the group |
| `Acc_No` / `Acc_Nm` | account / name the move is tied to |
| `RMRK`, `RMRK1`…`RMRK9`, `RMRK_EXTRA` | remarks / rejection reasons |
| `PRFNS_OPRTN_TYP` | the *purchase operation type* (often the same code as `TR_TY` — see 2.4) |
| `OFFERS_COMPARE_RESOLVER_TYPE` | type used when comparing offers during bid evaluation |
| `TEC_STAT` | technical status |
| `FNCL_TR_NO` | the financial/cash document number that this trigger ref-flows to |
| `TR_YEAR`, `TR_LANG` | year / language |
| `DONE`, `END_DT`, `tr_state`, `CurrentState` | completion flags and workflow state |
| `TEMPLATE` fields (`TMP_TR_TY`, `TMP_LOC`) | working copies used by the app |

### 2.2 `AZTRD` — transaction **detail** (`azx_sandoaa.dbo.AZTRD`)

412 columns. The flow's "what is in this document?" part lives here:

| Col | Meaning |
|---|---|
| `LOC`, `TR_TY`, `TR_NO` | same key as the header |
| `LN_NO` | line number (part of PK) |
| `ITM_CD` | item code |
| `QTY`, `QTY1`… | quantities |
| `PKPRC`, `PRC`, `DISC`, `TAX`… | price, discounts, tax |
| `GRP` | movement group |
| `GLPST`, `GLPOST` | whether / where this line is posted to GL |
| `REF_S`/`REFS1` | cross-references |
| `TEC_EVA`, `TEC_EVA_OP` | technical evaluation |
| `TMP_*` | working columns |

### 2.3 `AZTRTY` — the **transaction-type description** lookup

`azx_sandoaa.dbo.AZTRTY` — **47 rows, 396 columns**. It is a *wide, mostly empty lookup table* that holds a description (`DSCR`) for a `TR_TY` code. Because it is 396 columns wide for only 47 rows, it is clearly a **sparse pick-list dump** rather than a clean normalized dictionary. In the reports the application usually joins it as:

```sql
LEFT JOIN AZTRTY ON AZTRTY.TR_TY = AZTRH.PRCHS_OPRTN_TYP
```

or

```sql
(SELECT dscr_ar FROM aztrty WHERE aztrty.tr_ty = aztrd.tr_ty) AS tr_ty_nm
```

> **IMPORTANT:** the repository does **not** contain a cached full schema/row dump for `AZTRTY` in `refs/db/cache/` (only the numeric index entry `dbo.AZTRTY — 47 rows — 396 cols — table` in `refs/db/index.md` and `index.json`). The actual Arabic/English description text for each `TR_TY` code must be read from the database itself (or from the `asztrty` table) before being labelled. This document describes the **flow** without inventing the per-code meaning of 100/120/251.

### 2.4 `AZUSRJBSD` — a **staging / buffer** table with a `CAN_EDT_QTY` column

**1,767 rows × 132 columns.** This is a *working buffer*, not a core transaction table. The only `tr_ty` usage found is:

```sql
--update AZUSRJBSD set CAN_EDT_QTY = 1 where TR_TY = '100'
--select can_edt_qty,* from AZUSRJBSD where tr_ty = 100
--update AZUSRJBSD set CAN_EDT_QTY = 1 where loc = '50' and TR_TY in ('100','101','102','103','104','105','106','107','108','109','110')
```

So `TR_TY` values `100` … `110` are used as **filter/marker keys** into this buffer (probably for a "can edit quantity" computation). It has nothing to do with the header/detail flow directly — it is one of several **filter tables** the app queries by `tr_ty`.

### 2.5 Supporting lookup tables

| Table | Purpose |
|---|---|
| `AZLISTS` | code & list master (REC_TYPE = 61 for members) |
| `AZLOCS` / `AZITMS` / `AZITMLE` | location, item, item-location masters |
| `AZPKGDEF` | package/package-definition master |
| `AZTRH_OFFRS` / `AZTRH_OFFRS_TYPES` / `AZOFFR_H` / `AZOFFR_D` | **offer lifecycle** (bid/package header & detail, offer types) |
| `AZTRH_EVAL_CRIT` / `AZTRD_EVAL_CRIT` / `AZOP_EVAL_CRIT` | **evaluation criteria** (weights, scores, descriptions) |
| `AZTRTY` | transaction-type description (see 2.3) |

---

## 3. What the range `tr_ty = 100 .. 120` means in practice

### 3.1 Evidence from the reports

The codebase repeatedly filters on these exact codes. The clearest pattern:

| Code | Where it appears | What it selects |
|---|---|---|
| `100` | `AZUSRJBSD` (buffer) · `Aztrh100.trdx` | header/detail report "طلب احتياج" (need-request) with `TR_TY = 100` grouping |
| `101`–`110` | `AZUSRJBSD` buffer | same buffer, marker keys for "can edit qty" |
| `115` | `purchase_subreport_m7dr_fat7_mazryf.trdx` param `@TrTyParam = 115` | sub-report drilling into a specific purchase |
| `120` | Many `azxsandoaa` reports | **purchase info statements / supplier operations** (`بيان بعمليات الموردين`) — `WHERE aztrd.tr_ty = '120'` / `AZTRH.tr_ty = '120'` |

The dominant theme for the `100…120` window is **purchase-in / supplier / need-request transactions**. Specifically:

* `Aztrh100.trdx` — a **report** that joins `AZTRH`, `AZTRD`, `AZITMS`, `AZLOCS`, `AZTRTY` and groups by `TR_TY` ("رقم الحركة") and `Dscr_AR` ("الحركة"), i.e. it lists the *transaction types* and their codes for move `100`.
* `purchase_bayan_be3mlyat_eltoreed.trdx` (and its `__0005_…` variants) — a **distinct** supplier-operation report filtered on `AZTRH.tr_ty = '120'` (`aztrh.tr_ty = 120`), with `PRCHS_OPRTN_TYP` joined from `AZTRTY` and `LOADTYPE` joined from `APPCODES`. These are the **"بيان بعمليات الموردين"** (supplier operations statement) reports.
* `purchase_shera2_3kaaar.trdx`, `purchase_shera2_mankolat.trdx`, `purchase_entfa3_mashro3.trdx`, `purchase_estghlal_mashro3.trdx`, `purchase_baa3_markbaat.trdx` — all long tail of the same `tr_ty = '120'` family, computing totals, quantities, item names, fiscal years, delivery locations.

So the **flow through `100 … 120` is a "purchase / movement / operation" flow**, not a GL posting flow. The GL tables (`GLJRNLD`, `GLMF`) are not touched inside this window.

### 3.2 What is *not* inside `100 … 120`

* The `251` boundary is **not** covered by the same report family. It appears in a **completely different context** — see §4.
* The GL flow (`glx_sandoaa`, `GLJRNLD`, `GLMF`, `GLCHKSMF`) is a separate pipeline and is out of scope for this window.

---

## 4. The `tr_ty = 251` boundary — different flow, different database

`tr_ty = 251` does **not** belong to the `100 … 120` purchase/inventory family. It belongs to the **workflow / state-machine** side of the same system. The evidence:

### 4.1 `AztrhRequestInstanceLogs.trdx` (and its `_s` twin)

This report is the **strongest, most direct signal** that `tr_ty = 251` is a workflow/state code:

```sql
SELECT t.Id, t.TransitionDate, t.Reason, t1.NameArabic AS TriggerName,
       s.NameArabic AS FromStateName, purchas_NO, FNCL_TR_NO,
       s0.NameArabic AS ToStateName, t2.FullName AS ExecuterName
FROM azx_sandoaa.dbo.AZTRH
    INNER JOIN erpx_sandoaa_br.Workflow.RequestInstanceLogs t
        ON AZTRH.RequestId     = t.RequestInstanceId
    LEFT JOIN erpx_sandoaa_br.Workflow.Transitions t0
        ON t.TransitionId   = t0.Id
    LEFT JOIN erpx_sandoaa_br.Workflow.States s
        ON t0.FromStateId   = s.Id
    LEFT JOIN erpx_sandoaa_br.Workflow.States s0
        ON t0.ToStateId     = s0.Id
    LEFT JOIN erpx_sandoaa_br.Workflow.Triggers t1
        ON t0.TriggerId     = t1.Id
    LEFT JOIN erpx_sandoaa_br.Brca.BrcaUsers t2
        ON t.ExecuterUserId = t2.Id
WHERE 1=1
```

Key observations:

* The **header** is `azx_sandoaa.dbo.AZTRH` — same `tr_ty` family.
* But the **join targets are in `erpx_sandoaa_br`** (the `main`/ERP-core database), in the `Workflow` schema:
  * `Workflow.RequestInstanceLogs` (transition events from the request instance)
  * `Workflow.Transitions` (state transitions)
  * `Workflow.States` (states, e.g. "FromStateName" / "ToStateName")
  * `Workflow.Triggers` (what fired each transition)
* `BrcaUsers` comes from `erpx_sandoaa_br.Brca` (the main ERP).
* The `azx_sandoaa.dbo` tables joined here are the parent documents; the `251` row is the **state-transition / workflow-log** analysis of that header.

### 4.2 Supporting workflow tables in the main database

| Table | Role |
|---|---|
| `erpx_sandoaa_br.Workflow.RequestInstances` (12 rows) | one row per request |
| `erpx_sandoaa_br.Workflow.RequestInstanceLogs` (30 rows) | each transition log entry |
| `erpx_sandoaa_br.Workflow.Transitions` (308 rows) | allowed transitions between states |
| `erpx_sandoaa_br.Workflow.States` (224 rows) | the state machine states |
| `erpx_sandoaa_br.Workflow.Triggers` (314 rows) | what triggers a transition |
| `erpx_sandoaa_br.Workflow.TransitionConditions` (12 rows), `…Item` (12 rows) | guard/condition rules |
| `erpx_sandoaa_br.Workflow.TransitionMessages` (173 rows), `…Permissions` (298 rows) | user notifications and permissions |
| `erpx_sandoaa_br.Workflow.RequestTemplates` (26 rows) | reusable workflow templates |

### 4.3 Why `251` appears in a "workflow" report

In this ERP, **`AZTRH.tr_ty` is reused as a "document kind" discriminator** that tells the app which workflow/state-machine to run. Value `251` identifies a **request / approval / state-transition document** whose lifecycle is tracked through `RequestInstanceLogs → Transitions → States → Triggers`. The `AztrhRequestInstanceLogss.trdx` (plural, `_s` variant) confirms this is an **instance-log** report, i.e. a *lifecycle* view of a document, not a financial or inventory movement.

---

## 5. How the flow actually runs (end to end, `tr_ty ∈ {100, 120, 251}`)

### 5.1 Header → detail join (the invariant)

Every query in this database is built on the **same join contract**:

```sql
FROM AZTRH
JOIN AZTRD ON AZTRH.LOC = AZTRD.LOC
        AND AZTRH.TR_TY = AZTRD.TR_TY
        AND AZTRH.TR_NO = AZTRD.TR_NO
```

When a report also needs accounts, it adds:

```sql
JOIN AZACCMF ON (',' + ISNULL(AZTRH.acc_no2,'') + ',' LIKE '%,''' + AZACCMF.acc_no + ',%')
        OR (ISNULL(AZTRH.acc_no2,'') = '' AND dbo.StringIntersect(AZTRH.RMRK_EXTRA, AZACCMF.Acc_Actv, ',') = 1)
```

When it needs the *type description*, it joins `AZTRTY` on `TR_TY` (most commonly by the **operation type** `PRCHS_OPRTN_TYP`, not the header `TR_TY` itself).

### 5.2 The `100` border — the need-request / buffer flow

1. **Filter.** The app selects header rows where `TR_TY = 100` (or `101…110` into the buffer table).
2. **Join.** It joins `AZTRD` on the `(LOC, TR_TY, TR_NO)` key to get line items.
3. **Enrich.** It pulls item names (`AZITMS.ITM_NM_AR`) and branch names (`AZLOCS.LOC_NM_AR`), and the `AZTRTY.Dscr_AR` description.
4. **Report.** `Aztrh100.trdx` groups by `TR_TY` and `Dscr_AR`, producing "رقم الحركة / الحركة" (move number / movement) columns.

The **buffer table** `AZUSRJBSD` is touched separately: rows for `TR_TY IN (100..110)` are marked `CAN_EDT_QTY = 1`, i.e. "this transaction type is editable". This is a **permission/editing** filter, not a data store for moves.

### 5.3 The `120` border — the supplier-operations flow

1. **Filter.** Header rows where `AZTRH.tr_ty = '120'` (and detail rows `aztrd.tr_ty = '120'`).
2. **Join.** Header ↔ detail on `(LOC, TR_TY, TR_NO)`, then header ↔ account (`AZACCMF`), then `PRCHS_OPRTN_TYP` → `AZTRTY.DSCR_AR`.
3. **Aggregate.** `SUM(aztrd.qty)`, `AVG(aztrd.PKPRC)`, `SUM(qty*prc)` — group by customer/account, fiscal year, payment type, delivery location.
4. **Report.** "بيان بعمليات الموردين" (supplier operations statement), plus related variants (`3kaaar`, `mankolat`, `entfa3`, `estghlal`, `markbaat`).

### 5.4 The `251` border — the workflow/state-machine flow

1. **Filter.** Header rows where `TR_TY = 251` (a request/approval kind).
2. **Associate.** The app reads `AZTRH.RequestId`.
3. **Join the workflow tables** in `erpx_sandoaa_br.Workflow` by `RequestId` → `TransitionId` → `(FromStateId, ToStateId)` → `TriggerId`.
4. **Resolve** each transition to a state-name and trigger-name, and finally to the executing user (`BrcaUsers`).
5. **Report.** "AztrhRequestInstanceLogs" — a **lifecycle/state-transition** summary of the document.

The same `AZTRH` table and same `tr_ty` column serve *both* pipelines; the `tr_ty` code is what tells the app which pipeline to engage.

---

## 6. Database family context

`azx_sandoaa_ahmed` is **one of five** SQL Server databases in the ERP sandoaa:

| alias | database | module |
|---|---|---|
| `main` | `erpx_sandoaa_br` | ERP core + metadata (`Brca.*`) |
| `az` | `azx_sandoaa` | **المخازن / inventory** ← this document |
| `gl` | `glx_sandoaa` | المالية / general ledger |
| `py` | `pyx_sandoaa` | شئون العاملين / HR |
| `arch` | `archx_sandoaa` | الأرشيف / archive + workflow (`Workflow.*`) |

> Note: the workflow/state machine lives in `erpx_sandoaa_br` (the `main`/ERP database) and is *referenced* by the `az` database through the `azx_sandoaa.dbo.AZTRH` header. It is **not** inside `azx_sandoaa_ahmed` itself. This is why `251` is the outlier.

---

## 7. What is missing / what cannot be derived from the repo

To draw a correct, per-number table of `tr_ty = 100`, `101`, … `251` you would need the **actual contents** of `AZTRTY` (the 47 rows × 396 cols description table). The repository does not carry that dump. To confirm the exact meaning of `251` you would need to query `azx_sandoaa_ahmed.dbo.AZTRH WHERE TR_TY = 251` and read its `RequestId` + the workflow tables in `erpx_sandoaa_br`.

What **is** derivable from the repository alone:

* The **schema** and **join contract** (fully documented above).
* The **report family** for `100` and `120`.
* The **workflow/state-machine context** for `251`.
* The **filter/marker** usage in `AZUSRJBSD`.

---

## 8. How to verify / how to read it yourself

The repository ships a read-only CLI so you can check any of the above against a live `azx_sandoaa_ahmed` instance:

```bash
node scripts/_ahmed_db.mjs "SELECT TR_TY, COUNT(*) FROM AZTRH GROUP BY TR_TY ORDER BY TR_TY"
node scripts/_ahmed_db.mjs "SELECT TR_TY, COUNT(*) FROM AZTRD GROUP BY TR_TY ORDER BY TR_TY"
node scripts/_ahmed_db.mjs "SELECT TR_TY, COUNT(*) FROM AZUSRJBSD GROUP BY TR_TY ORDER BY TR_TY"
```

The reports themselves are the authoritative "flow" users see — they are in:

* `AGP.Arch.erpx.Web.Home.server/Reports/Az/Aztrh100.trdx` (and its duplicates)
* `AGP.Arch.erpx.Web.Home.server/Reports/Az/` — many `purchase_*` reports filtered on `tr_ty = '120'`
* `AGP.Arch.erpx.Web.Home.server/Reports/Temp/Purchase_AztrhRequestInstanceLogss*.trdx` (and `_s` twin) — `tr_ty = 251` workflow reports

The schema catalog is in:

* `AGP.Arch.erpx.Web.Home.server/refs/db/cache/az.AZTRH.md`
* `AGP.Arch.erpx.Web.Home.server/refs/db/cache/az.AZTRD.md`
* `AGP.Arch.erpx.Web.Home.server/refs/db/cache/az.AZTRH_OFFRS.md` / `az.AZTRH_OFFRS_TYPES.md` / `az.AZTRH_EVAL_CRIT.md`
* `AGP.Arch.erpx.Web.Home.server/refs/db/cache/az.AZACCMF.md`
* `AGP.Arch.erpx.Web.Home.server/refs/db/cache/az.AZOFFR_H.md` / `az.AZOFFR_D.md`
* `AGP.Arch.erpx.Web.Home.server/refs/db/cache/az.AZTRD_EVAL_CRIT.md`
* `AGP.Arch.erpx.Web.Home.server/refs/db/index.md` (table index)

---

## 9. TL;DR one-liner

`azx_sandoaa_ahmed` is the **az (inventory)** database of the ERP sandoaa. Every transaction — including the boundary values `tr_ty = 100`, `tr_ty = 120` and the outlier `tr_ty = 251` — is stored as a **header `AZTRH`** + **detail `AZTRD`** joined on `(LOC, TR_TY, TR_NO)`. `100` and the `100…120` window are **purchase / need-request / supplier-operation** transactions (with `101…110` also used as filter-markers in the `AZUSRJBSD` "can edit qty" buffer), while `251` is a **request/approval workflow** document whose lifecycle is traced through `azx_sandoaa.dbo.AZTRH` → `erpx_sandoaa_br.Workflow.RequestInstanceLogs → Transitions → States → Triggers`.
