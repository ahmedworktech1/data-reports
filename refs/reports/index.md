# مكتبة تقارير Telerik — فهرس

فهرس آلي لكل تقرير `.trdx` في `Reports/`. مش بديل عن قراءة التقرير: ده سجل للاسم والقاعدة والجداول والبارامترات.

## الأرقام

| البند | العدد |
|---|---|
| ملفات `.trdx` | 3225 |
| اتقرأ بنجاح | 3225 |
| **تقارير فريدة (بعد دمج الـmd5)** | **1684** |
| نسخ مكررة متطابقة | 1541 |
| فيها SQL | 1263 |
| بتقرا جداول | 1259 |
| فيها بارامترات | 987 |
| فيها تقارير فرعية | 196 |
| مبنية على WebService | 407 |
| من غير قاعدة معروفة | 581 |
| جداول مختلفة | 132 |

## التوزيع

| المجلد | تقارير |
|---|---|
| `Reports/` | 865 |
| `Reports/Temp/` | 672 |
| `Reports/Gl/` | 83 |
| `Reports/Arch/` | 36 |
| `Reports/Az/` | 22 |
| `Reports/Py/` | 6 |

| القاعدة | تقارير |
|---|---|
| المخازن AZ (`az`) | 736 |
| المالية GL (`gl`) | 290 |
| الأرشيف ARCH (`arch`) | 100 |
| البرنامج الرئيسي (`main`) | 1 |

## أهم الجداول (أكتر الجداول اللي التقارير بتقراها)

- `AZTRH` — 730 تقرير
- `AZTRTY` — 387 تقرير
- `AZTRD` — 380 تقرير
- `AZITMS` — 341 تقرير
- `AZLISTS` — 329 تقرير
- `PYEMPMF_H` — 268 تقرير
- `APPCODES` — 214 تقرير
- `GLJRNLD` — 206 تقرير
- `AZACCMF` — 170 تقرير
- `AZPKGDEF` — 158 تقرير
- `GLSSUMS` — 154 تقرير
- `GLMF` — 145 تقرير
- `AZTRH_OFFRS_TYPES` — 105 تقرير
- `GLBDG` — 85 تقرير
- `BENEFICIARIE` — 79 تقرير

## تحذيرات

- **407 تقرير** بياخد بياناته من WebService مش من SQL، فمفيش جداول مسجلة ليه.
- **581 تقرير** الـ`ConnectionString` بتاعه مش من أسماء القواعد المعروفة (أسماء اتصال قديمة/مخصصة).
- **4 ملف** امتداده `.trdx` لكنه مش XML تقرير Telerik (زي Zip معروض/ملف فاضي) — بيتسجل بالاسم بس من غير جداول:
  - `Reports/بيانات العملاء.trdx` — ZIP archive, not XML (packaged .trdx)
  - `Reports/تقرير بيانات السيارات.trdx` — ZIP archive, not XML (packaged .trdx)
  - `Reports/تقرير بيانات السياره - تقرير كامل.trdx` — ZIP archive, not XML (packaged .trdx)
  - `Reports/Temp/Eligibility_Cases_Report__0005_639263669510334229.trdx` — empty file
- النسخ المتطابقة بتتسجل كـcopies في `index.json`؛ أي تعديل على تقرير بيفصل النسخة عنه.

## التجديد

```bash
node scripts/reports-catalog.mjs          # يعيد بناء index.md + index.json + catalog-*.md
node scripts/reports-catalog.mjs --check   # أرقام بس، من غير كتابة
```

الملفات: `catalog-01.md`، `catalog-02.md`، `catalog-03.md`، `catalog-04.md`، `catalog-05.md`، `catalog-06.md`، `catalog-07.md`، `catalog-08.md`، `catalog-09.md`
