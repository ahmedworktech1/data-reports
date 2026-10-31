# Telerik Reporting في مشروع ERP (sandoaa)

> ملف معرفة دائم — يحوي نتائج تحليل REA (Static managed analysis) لكل أجزاء Telerik في
> `C:\inetpub\AGP.Arch.erpx.Web.Home.server`. أي سؤال لاحق عن «شكل» تقرير أو «إزاي يشتغل»
> يُجاب من هنا + مهارة `telerik-reports` + حزمة الأدلة عند الحاجة.
>
> آخر تحديث: 2026-10-20

---

## 0. الخلاصة السريعة

- **المنتج:** Telerik Reporting (Progress) — الإصدار **17.1.23.718**، موقّع بـ public key token
  `a9d7983dfcc261be` (كل الملفات السبعة نفس الإصدار والتوقيع).
- **عدد المكتبات:** 7 ملفات `.dll` (محرك + مصادر بيانات + تصدير + خدمات + مصمم).
- **المضيف:** ASP.NET Core 8.0 على IIS (InProcess)، المشروع `erpx.Web.Home`.
- **وحدة التقارير في الـ ERP:** `brca.Web.dll` — الكنتورلرز في `brca.Web.Areas.br.Controllers`.
- **تعريفات التقارير:** 898 ملف في `Reports/` (مهارة `telerik-reports` هي المرجع العملي لها).

---

## 1. مكتبات Telerik (المخزون الكامل)

| # | الملف | Assembly | Version | TargetFramework | TypeDef | MethodDef | AssemblyRef | الحجم |
|---|-------|----------|---------|-----------------|--------|-----------|-------------|-------|
| 1 | `Telerik.Reporting.dll` | Telerik.Reporting | 17.1.23.718 | .NET Standard 2.0 | 5454 | 35334 | 20 | 7,147,520 |
| 2 | `Telerik.WebReportDesigner.Services.dll` | Telerik.WebReportDesigner.Services | 17.1.23.718 | .NETCoreApp 7.0 | 291 | 1296 | 31 | 2,651,648 |
| 3 | `Telerik.Reporting.OpenXmlRendering.2.7.2.dll` | Telerik.Reporting.OpenXmlRendering.2.7.2 | 17.1.23.718 | .NET Standard 2.0 | 216 | 1464 | 4 | 243,712 |
| 4 | `Telerik.Reporting.Data.Schema.dll` | Telerik.Reporting.Data.Schema | 0.0.0.0 | .NET Standard 2.0 | 131 | 795 | 4 | 166,400 |
| 5 | `Telerik.Reporting.JsonSerialization.dll` | Telerik.Reporting.JsonSerialization | 17.1.23.718 | .NET Standard 2.0 | 54 | 340 | 4 | 78,848 |
| 6 | `Telerik.Reporting.Services.AspNetCore.dll` | Telerik.Reporting.Services.AspNetCore | 17.1.23.718 | .NETCoreApp 6.0 | 23 | 149 | 20 | 62,976 |
| 7 | `Telerik.Reporting.WebServiceDataSource.dll` | Telerik.Reporting.WebServiceDataSource | 17.1.23.718 | .NET Standard 2.0 | 23 | 107 | 3 | 57,344 |

**SHA-256 لكل ملف:**

| الملف | SHA-256 |
|-------|---------|
| Telerik.Reporting.dll | `09f840e01cf6c68a00746af8262c9dbc735998ac9117b3c9e0e4787b2d269c9c` |
| Telerik.WebReportDesigner.Services.dll | `4ad56bea214649d3464df2ea04f3afc5b7625e8dcf5a6e350ffdf26687427816` |
| Telerik.Reporting.OpenXmlRendering.2.7.2.dll | `d08f59b79e50c3b0a3f82b87128097ec784082b20664ac5a7138232f3fcc2650` |
| Telerik.Reporting.Data.Schema.dll | `96802d7cb80d1ff7f724cf8aba537f2ad81d48101ea3d92f93491822bab4e7a8` |
| Telerik.Reporting.JsonSerialization.dll | `efd5d15f97e2c2254f8dd4ee026505a0340bec8ad1208b3f0e98b684a2efa6cf` |
| Telerik.Reporting.Services.AspNetCore.dll | `87be2de3154d7cea22985b09580dd4a0d8fd66b8a65be2cb15235d375485f2a9` |
| Telerik.Reporting.WebServiceDataSource.dll | `73b94a974e61b3601bca1174b9a3322673794cebf923ec4f340e1ac1091a6b09` |

> ملاحظة: `Telerik.Reporting.Data.Schema` إصداره الداخلي `0.0.0.0` (غير مرقّم) لكنه موقّع بنفس مفتاح
> Telerik — سلوك طبيعي لمكتبة مخطط البيانات.

**MVIDs (هوية البناء):**

| الملف | MVID |
|-------|------|
| Telerik.Reporting.dll | `7d7c72dd-a8f6-4242-8624-7ad7a0434cad` |
| Telerik.WebReportDesigner.Services.dll | `46ba0c3a-afca-404a-a466-5aeace723a8a` |
| Telerik.Reporting.OpenXmlRendering.2.7.2.dll | `b4a9a4ba-12fb-4682-bbfa-5b331afbdd29` |
| Telerik.Reporting.Data.Schema.dll | `136fa880-4271-4f92-86c2-01ed37d09584` |
| Telerik.Reporting.JsonSerialization.dll | `eb6cf1a9-bf0a-4b75-88de-66497c5fa320` |
| Telerik.Reporting.Services.AspNetCore.dll | `87add2ab-2143-43bf-bed8-08ee0da98b22` |
| Telerik.Reporting.WebServiceDataSource.dll | `1643dac8-8910-4bc6-a784-804f7b4f44fa` |

---

## 2. التكامل مع الـ ERP (إزاي البرنامج بيقرا التقارير)

### 2.1 المكتبة المسؤولة
`brca.Web.dll` (assembly `brca.Web` v1.0.0.0، .NET 8.0، MVID `37caa79a-6005-4420-a11b-ca93bcca0e93`,
SHA-256 `c603827d50c39839b13104ea51a2dfcdafc2c550a7741e56bd59f3ec49b34d13`)
تمر على Telerik عبر 3 مراجع (AssemblyRef):
- `Telerik.Reporting` 17.1.23.718
- `Telerik.WebReportDesigner.Services` 17.1.23.718
- `Telerik.Reporting.Services.AspNetCore` 17.1.23.718

### 2.2 الكنتورلرز (منطقة `br`)
كلهم في `brca.Web.Areas.br.Controllers` (تم التأكيد عبر REA — 5 أنواع مطابقة):

| الكنتورلر | أهم الميثودز | الوظيفة |
|----------|--------------|---------|
| `ReportsController` | `.ctor`, `CreateInstance(string, ...)` | إنشاء/تمرير نسخة تقرير |
| `ReportDesignerController` | `.ctor` | استضافة مصمم التقارير |
| `CustomReportsController` | `Index`, `CustomReportFilter`, `CustomReportsController_OnBeforeGetSqlReport`, `treelistReportsFolders_Read`, `FolderReportsGrid_Read`, `ReviewReport` | شاشة التقارير المخصصة + الفلتر |
| `ReportRoleController` | `Index(string)`, `Grid_Read`, `CreateEdit` (GET/POST), `Grid_Update`, `Grid_Delete`, `AddReportModel` | صلاحيات التقارير (جدول `brca.ReportRoles`) |
| `ReportAuditController` | `Index`, `GetReportAudit`, `GetDataReportAudit`, `CreateReportAudit` | سجل المراجعة |

- الميثودز `Grid_*` / `*_Read` على `CustomReportsController` و `ReportRoleController`
  تتبع نمط Telerik UI (DataSourceRequest) — قراءة/تحديث/حذف جريد.
- `AnyReportController` و `ReportsControllerBase` / `ReportDesignerControllerBase` ظهرت كأسماء
  generic (`AnyReportController\`1`) — لم تُطابَق كأسماء مباشرة في REA.

### 2.3 دورة قراءة التقرير (موثقة من المشروع)
1. **القائمة:** `wwwroot/AppData/erpx.menu.json` — عنصر «صلاحيات التقارير» يفتح
   `br/ReportRole/Index?module=py`.
2. **الصلاحية:** جدول `brca.ReportRoles` `(id, module, permissiongroups)`.
3. **العارض:** شاشة `CustomReports/Index` تحمل `telerikReportViewer` وتكلم `serviceUrl=.../api/reports/`.
4. **الملف:** يُحمّل `.trdx/.trdp` من `Reports/`، ونسخة تشغيل في `Reports/Temp/` بأسماء
   `...__0005_63926*.trdx`.
5. **الداتا:** `SqlDataSource` يحل `ConnectionString` من إعدادات البرنامج،
   `WebServiceDataSource` ينادي API عبر `ServiceUrl`، و`ObjectDataSource` يحتاج `brca.Core`
   (مسجّل في `appsettings.json` تحت `telerikReporting.assemblyReferences`).
6. **إعدادات البرنامج:** `Culture=ar-EG` وصيغة التاريخ `yyyy/MM/dd` — بينما التقارير `dd/MM/yyyy`.

### 2.4 إعدادات ذات صلة
- `appsettings.json` → `telerikReporting.assemblyReferences` = `brca.Core` (v1.0.0.0).
- `WebReportDesignerSettings.json` موجود لكنه **فارغ (0 بايت)**.
- `web.config` يشغّل `erpx.Web.Home.dll` على IIS InProcess بـ `ASPNETCORE_ENVIRONMENT=Production`.

---

## 3. محرك Telerik — إزاي يشتغل (سطح API الأساسي)

تم فحص `Telerik.Reporting.dll` (5454 نوع). الأنواع الأساسية المطابقة:

### 3.1 `Telerik.Reporting.Report`
النوع المركزي. أهم العضوات:
- **مصادر الداتا:** `DataSource` (object) get/set/reset، `DataSources`، `Filters`، `Sortings`،
  `Sorting`، `Groups`، حدث `NeedDataSource` (+`RaiseNeedDataSource`/`OnNeedDataSource`)، `Error`.
- **الباراميترات:** `ReportParameters` get/reset (+`IReportDocument.get_ReportParameters`).
- **التخطيط/التصميم:** `Width`، `UnitOfMeasure`، `Culture`، `PageSettings`، `PageNumberingStyle`،
  `SkipBlankPages`، `DocumentName`، `StyleSheet`/`ExternalStyles`/`ExternalStyleSheets`،
  `StyleRules`/`ExternalStyleRules`، `RuntimeSettings`، `ReportEngineSettings`.
- **المصادر:** `IReportDocument.get_Reports`، `IReportDocument.get_ReportSources`،
  تحويل ضمني `Report → ReportSource` (`op_Implicit`).
- **دورة الحياة:** `BeginInit`/`EndInit`، `RefreshStyleSheets`، `OnResize`، `ResetPropertyValues`،
  `CanParent`، `SetParentStyleRules`، `Accept(visitor)`.

### 3.2 أنواع المصادر الثلاثة (كيف تُحمَّل التقارير)
| النوع | الخاصية الأساسية | الاستخدام |
|-------|------------------|-----------|
| `Telerik.Reporting.UriReportSource` | `Uri` (string) | تحميل من مسار/عنوان ملف `.trdx/.trdp` |
| `Telerik.Reporting.TypeReportSource` | `TypeName` (string) | تحميل من نوع .NET مُعرّف في assembly |
| `Telerik.Reporting.InstanceReportSource` | `ReportDocument` (Report) | تمرير كائن تقرير جاهز |

كل منهم فيه `.ctor()` + `.ctor(copy)` + `Equals` + `GetHashCode` + `ToString` + `Clone() → ReportSource`.

### 3.3 مصادر البيانات المدعومة (داخل التعريفات)
- `SqlDataSource` (الاتصال بـ SQL Server عبر اسم ConnectionString).
- `WebServiceDataSource` (استدعاء API عبر `ServiceUrl`).
- `ObjectDataSource` (نوع من `brca.Core`).
- مكتبة `Telerik.Reporting.Data.Schema.dll` تدير مخطط البيانات لهذه المصادر.

### 3.4 التصدير/الرندرنج
- `Telerik.Reporting.OpenXmlRendering.2.7.2.dll` — تصدير **DOCX / XLSX / PPTX** (OpenXML).
- `Telerik.Reporting.JsonSerialization.dll` — تسلسل/فك تسلسل تعريفات التقارير JSON (نسخة المصمم).
- `Telerik.Reporting.Services.AspNetCore.dll` — استضافة خدمة التقارير داخل ASP.NET Core
  (الـ `ReportsController` الخاص بـ Telerik + الـ HTML5 Viewer).
- الصيغ المعروفة للرندرنج في Telerik Reporting: PDF, DOCX, XLSX, PPTX, HTML, CSV, RTF (قد تحتاج تأكيداً).

---

## 4. مصمم التقارير (Web Report Designer)

- المكتبة: `Telerik.WebReportDesigner.Services.dll` (.NETCoreApp 7.0).
- الفضاءات المكتشفة: `Controllers`, `Models`, `Storages`, `Validation`, `Wrappers`,
  واجهة `ISharedDataSourceStorage` (فيها `GetModelAsync`, `SaveAsync`, `RenameAsync`).
- الواجهة نفسها تُقدَّم عبر مكتبة `Telerik.Reporting.Services.AspNetCore` + ملف الإعداد
  `WebReportDesignerSettings.json` (فارغ حالياً).
- الـ ERP يستضيف المصمم عبر `ReportDesignerController` في `brca.Web`.

---

## 5. تعريفات التقارير (إحصاء REA + مهارة telerik-reports)

من `python scripts/telerik_fix.py audit "Reports"` (العمل من مجلد المهارة):

```
files=898  textboxes=39836
namespaces:
  2023/1.0 : 294
  2021/1.0 : 555
  2019/2.0 : 48
  2019/1.0 : 1
datasources: Sql=676, WS=329
CDate=511  IIf-safe=33  bad-date-fmt=1367  split-date=1645
top-formats: (none)=29033, {0:N2}=3148, {0:N0}=1578, {0:##.000;(##.000);}=1406,
             {0:d}=1295, {0:N3}=720, {0:0.000}=618, {0:#.}=482, {0}=364,
             {0:dd/MM/yyyy}=201
broken-xml: 0
misnamed-trdx-actually-zip (3):
  (3 ملفات .trdx لكنها ZIP — أسماؤها العربية لم تُقرأ من وحدة التحكم)
```

**ملاحظات:**
- 898 ملف (منهم `.bak` وملفات مساعدة) — المهارة تذكر 876 `.trdx` + 20 `.trdp`.
- **1367** مربع فورمات تاريخ خاطئ (`{0:d}` وغيرها) — أكثر مشكلة انتشاراً.
- **1645** مربع تاريخ مجزأ (يوم/شهر/سنة منفصلة).
- **3** ملفات مسماة `.trdx` لكنها ZIP (حزم `.trdp`).

---

## 6. كيف تعيد التحليل لاحقاً (REA)

الهدف: `C:\inetpub\AGP.Arch.erpx.Web.Home.server`.

- كل الأدلة محفوظة في جلسة REA (shared MCP). للاسترجاع:
  - `rea_get_evidence_bundle` بـ `detail: summary` ثم فلترة بـ `target_sha256` أو `operation`.
  - أو صدّر حزمة كاملة: `rea_export_evidence_bundle` (path=refs/telerik/evidence-bundle.json).
    الحزمة كبيرة (~74MB) لذلك لم تُترك في مجلد النشر؛ تُصدَّر عند الحاجة فقط.
- إعادة فحص مكتبة:
  `rea_inspect_managed_artifact` (path, detail: summary) ثم `inspect_analysis_view` (kind managed,
  collection references/resources/attributes/methods).
- إعادة فحص أعضاء نوع: `rea_inspect_managed_members` (path, type_names:[...], detail: summary)
  ثم `inspect_analysis_view` (kind managed-members, collection types/fields/methods/user_strings).
- إغلاق الجلسة: `rea_close_binary`.

### معرّفات الأدلة (evidence IDs) لهذا التحليل
| العنصر | Evidence ID |
|--------|-------------|
| Telerik.Reporting.dll | `ev_a334ae69c1e2fb04c1d93dbc2c15d8f83e9beac93f8019a5731f51f52aacc212` |
| Telerik.Reporting members (Report/Sources) | `ev_59ddc4dcde2f790b185a21f5d00949fa1d76e7caddfad6ef4d93bfe4aed877f1` |
| Telerik.WebReportDesigner.Services.dll | `ev_1a2277dd455490ccbbcc9f298daa7f007c3be2e9a4b79403666e92de69cac314` |
| Telerik.Reporting.Services.AspNetCore.dll | `ev_693394ee779b82590027667c7d2806ef50bc149c79477be1a07fe329303fa17d` |
| Telerik.Reporting.WebServiceDataSource.dll | `ev_312dceb935e95fc6ae4640933178952562b56e194b384075c26fd7e1f4fe6b9b` |
| Telerik.Reporting.Data.Schema.dll | `ev_60346da7d7a8f3486ccd6e87d3840feea7a84d159e3fae8a87bad8f250330c11` |
| Telerik.Reporting.JsonSerialization.dll | `ev_4ed15fbdcb136a69e04dbb0ed63ca3a0123d2f606be6eb913843b8bccc881` |
| Telerik.Reporting.OpenXmlRendering.2.7.2.dll | `ev_7e15ad39626a0c334ceda677153dcb2ec4df91d9e3389c197b38256df01baf03` |
| brca.Web.dll | `ev_9e0d6e7960f559feb8ca6c613938945b178681d21cd2ca3cb609a3b9ff83d1b0` |
| brca.Web controllers (members) | `ev_8be725ac4c21f08c62c1a78ff47f71fc054f7f6a87a6d6f30c61207169aa6cbd` |
| brca.Core.dll | `ev_d1c3ed71d808a4b840041313e55ada56ed75b60a749fbb919b304ad4253952f9` |
| brca.Infrastructure.dll | `ev_08118538b041d272400876525e9c3497979c631c2711300114bb68d074d4e28f` |
| archx.Web.dll | `ev_9b1821e4bb0392862a16055748dd2d8dd05f68abb96e84813b2bea4101b79a62` |

---

## 7. قيود مهمة (لا تبالغ في الاستنتاج)
- التحليل **ساكن فقط**: لم يُحمَّل أي assembly، لم يُفك C#، لم يُنفَّذ أي كود.
- أسماء الأنواع/التوكنات **محلية للبناء** (مرتبطة بـ SHA-256 و MVID).
- في صفحات الميثودز، توقيعات الأنواع غير البدائية تظهر كتوكنات غير محلولة (`class:NNNN`).
- لا يُثبت التحليل الساكن أي سلوك تشغيلي؛ أي ادعاء عن «شغال/ضارب» يحتاج دليلاً تشغيلياً.
- الاعتماد العملي على التقارير نفسه يكون عبر مهارة `telerik-reports`
  (`python scripts/telerik_fix.py find|info|validate|list|audit|flexible-dates`).

---

## 8. مراجع ذات صلة
- مهارة `telerik-reports` — `C:\Users\HPZBOOK\.config\opencode\skills\telerik-reports\`
  - `scripts/telerik_fix.py` (السكريبت)، `references/program-errors.md` (دورة القراءة + 12 خطأ)،
    `references/trdx-reference.md`، `references/errors.md`، `references/expressions.md`،
    `memory/report-usage.txt` (شاشات التقارير المحفوظة).
- `appsettings.json` → قسم `telerikReporting`.
- `web.config` → استضافة IIS.
- `WebReportDesignerSettings.json` (فارغ).
