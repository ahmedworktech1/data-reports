# كتالوج التقارير — جزء 02 من 09

سجل آلي (مش مستخرج بالـLLM) لكل تقرير Telerik: الاسم، القاعدة، الجداول اللي بيقراها، البارامترات، والتقارير الفرعية.
المصدر: `<SqlDataSource SelectCommand=...>` و`<UriReportSource Uri=...>` جوه ملفات `.trdx`.
لتجديد الملف ده: `node scripts/reports-catalog.mjs`

| # | التقرير (stem) | مسار | القاعدة | جداول | CTE | بارامترات | تقارير فرعية | نسخ مكررة |
|---|---|---|---|---|---|---|---|---|
| 189 | FaAnalysis3Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 190 | FaAnalysis4Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 191 | FaAnalysis5Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 192 | FaAnalysis6Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 193 | FaAnalysis7Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 194 | FaAnalysis8Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 195 | FaAnalysis9Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 196 | FaAnalysisDynamicColumns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 197 | Factory | `Reports/` | — | APPCODES, AQRENT_H, TENANTMF, UNTMF | — | TrNo, Url, login | — | — |
| 198 | FADPRC_QTAWZE_3 | `Reports/` | gl | FADPRC_Q, FAMF, GLCST | — | CompanyAddress, CompanyName, ReportTitle, ShowTotal, logo | — | 2 |
| 199 | FADPRC_QTAWZE_3_Tot | `Reports/` | gl | FADPRC_Q, FAMF, GLCST | — | CompanyAddress, CompanyName, ReportTitle, logo | — | 2 |
| 200 | FAJRNL_Report_Tot | `Reports/` | gl | FAJRNL | — | ChkFaCd1, ChkFaCd2, ChkFaCd3, ChkFaCd4, ChkMcstCd, ChkOCst, ChkcstCd, ColGrop … | — | 2 |
| 201 | FajrnlReport_Ar | `Reports/` | — | — | — | Chk1, Chk2, Doctot, FromDate, FromDocNo, FromFaCd, FromGlsct, Glsct … | — | 2 |
| 202 | FajrnlReport1_Ar | `Reports/` | — | — | — | Chk1, Chk2, CompanyAddress, CompanyName, Doctot, FromDate, FromDocNo, FromFaCd … | — | — |
| 203 | FamfReport1_Ar | `Reports/` | — | — | — | Account, Accounts, ComId, FromAccount, FromDate, FromFaCd, FromGlsct, ReportFamfModel … | — | 2 |
| 204 | FamfReport2_Ar | `Reports/` | — | — | — | Account, Accounts, ComId, FromAccount, FromDate, FromFaCd, FromGlsct, ReportFamfModel … | — | 2 |
| 205 | FamfReport3_Ar | `Reports/` | — | — | — | Account, Accounts, ComId, FromAccount, FromDate, FromFaCd, FromGlsct, ReportFamfModel … | — | 2 |
| 206 | FatwaReport | `Reports/` | arch | FATWAS | — | — | — | 1 |
| 207 | FORM 100 - assp | `Reports/` | — | GLCST, GLJRNLD, GLLCMF, GLMF, GLSUMS | — | FromDate, ToDate | — | 4 |
| 208 | FORM 102A GEF | `Reports/` | — | GLCST, GLJRNLD, GLJRNLH, GLLCMF, GLMF | — | FromDate, ToDate | — | 4 |
| 209 | fyoum | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 210 | GateWayBulkInternalReport | `Reports/` | — | — | — | Bild, BildState, BildType, Bld, BldCd, Collect, ContractNo, ContractState … | — | — |
| 211 | GateWayInternalReport | `Reports/` | — | — | — | Bild, BildState, BildType, Bld, BldCd, Collect, ContractState, CreateStat … | — | — |
| 212 | GateWayReport | `Reports/` | — | — | — | Bild, BildState, BildType, Bld, BldCd, Collect, ContractState, CreateStat … | — | — |
| 213 | GEF 101-APP SUMMARY SHEET | `Reports/` | — | GLCST, GLJRNLD, GLLCMF, GLMF, GLSUMS | — | FromDate, ToDate | — | 3 |
| 214 | Gehat_visits | `Reports/` | — | ORGANIZATION, VISITS | — | From, FromStrtDt, To | — | 1 |
| 215 | GetWayReceiptVoucherMaintenance | `Reports/` | — | — | — | Bild, BildState, BildType, Bld, BldCd, Collect, ContractState, CreateStat … | — | — |
| 216 | GlaccsReport_Details | `Reports/` | — | GLCST, GLJRNLD, GLJRNLH, GLMF, GLSCST, GLSSUMS, GLSUMS, GLTRSTBL | — | DefaultComId | — | — |
| 217 | GlaccsReport_Details_TR | `Reports/` | — | GLCST, GLCURRAT, GLJRNLD, GLMF, GLSCST, GLSSUMS, GLSUMS, GLTRSTBL, TRH | — | DefaultComId | — | — |
| 218 | GlaccsReport_total | `Reports/` | — | GLCST, GLJRNLD, GLJRNLH, GLLOC, GLMF, GLSCST, GLSSUMS, GLSUMS, GLTRSTBL | — | DefaultComId | — | — |
| 219 | GlaccstatnReport_currency_Ar | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | — |
| 220 | GlaccstatnReport1_Ar | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | — |
| 221 | GlaccstatnReport1_En | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 2 |
| 222 | GlaccstatnReport10_Ar | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | — |
| 223 | GlaccstatnReport11_Ar | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | — |
| 224 | GlaccstatnReport12_Ar | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | — |
| 225 | GlaccstatnReport15_Ar | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | — |
| 226 | GlaccstatnReport15_Ar_Details | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | — |
| 227 | GlaccstatnReport1Hst_Ar | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 2 |
| 228 | GlaccstatnReport2_Ar | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | — |
| 229 | GlaccstatnReport2_En | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 2 |
| 230 | GlaccstatnReport2Hst_Ar | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 2 |
| 231 | GlaccstatnReport3_Ar | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | — |
| 232 | GlaccstatnReport3_En | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 2 |
| 233 | GlaccstatnReport3Hst_Ar | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 2 |
| 234 | GlaccstatnReport4_Ar | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | — |
| 235 | GlaccstatnReport4_En | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 2 |
| 236 | GlaccstatnReport4Hst_Ar | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 2 |
| 237 | GlaccstatnReport5_Ar | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | — |
| 238 | GlaccstatnReport5_En | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 2 |
| 239 | GlaccstatnReport5Hst_Ar | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 2 |
| 240 | GlaccstatnReport6_Ar | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | — |
| 241 | GlaccstatnReport7_Ar | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | — |
| 242 | GlaccstatnReport8_Ar | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | — |
| 243 | GlaccstatnReport9_Ar | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | — |
| 244 | GlaccstatnReportTrDt | `Reports/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | — |
| 245 | GlCashAnalysis_Ar | `Reports/` | — | — | — | AddBeginBalance, CashAndJrnl, ComId, CompanyAddress, CompanyName, FromAccNo, FromCstCd, FromDate … | — | 2 |
| 246 | GlCashAnalysis_En | `Reports/` | — | — | — | AddBeginBalance, CashAndJrnl, ComId, CompanyAddress, CompanyName, FromAccNo, FromCstCd, FromDate … | — | 2 |
| 247 | GLCSH_TR_H | `Reports/` | gl | BANK, GLCSH_TR_H | — | — | — | — |
| 248 | GlCshTr_Ar | `Reports/` | — | GLCSHMF, GLCSH_TR_H | — | CompanyAddress, CompanyName, Logo, trNo, trTy | — | 2 |
| 249 | GlCshTr_Ar11 | `Reports/` | gl | GLCSHMF, GLCSH_TR_H, GLCST, GLMF, GLSCST, GLSSUMS, GLSUMS | — | CompanyAddress, CompanyName, Logo, trNo, trTy | — | 1 |
| 250 | GlCshTr_ArPay1 | `Reports/` | gl | GLCSHMF, GLCSH_TR, GLCSH_TR_H, GLCST, GLMF, GLSSUMS, GLSUMS | — | CompanyAddress, CompanyName, Logo, trNo, trTy | — | — |
| 251 | GlCshTr_Arpay2 | `Reports/` | gl | GLCSHMF, GLCSH_TR, GLCSH_TR_H, GLCST, GLMF, GLSSUMS, GLSUMS | — | CompanyAddress, CompanyName, Logo, trNo, trTy | — | 2 |
| 252 | GlCshTr2_Ar | `Reports/` | — | — | — | CompanyAddress, CompanyName, Logo, Url, login, trNo, trTy | — | — |
| 253 | GlCshTr3_Ar | `Reports/` | — | GLCSH_TR_H | — | CompanyAddress, CompanyName, Logo, trNo, trTy | — | 2 |
| 254 | GlCshTrPrinted_Ar | `Reports/` | — | — | — | CompanyAddress, CompanyName, Logo, Url, login, trNo, trTy | — | 2 |
| 255 | GLMF_Ar | `Reports/` | — | — | — | Url, filter, login | — | 2 |
| 256 | Gltrial0_Ar | `Reports/` | — | — | — | BalanceType, ChkNoZero, ComId, CompanyAddress, CompanyName, CstGrp, CurCd, DefaultComId … | — | — |
| 257 | Gltrial1_Ar | `Reports/` | — | — | — | BalanceType, ChkNoZero, CompanyAddress, CompanyName, CstGrp, CurCd, ExcludeInactiveAccounts, ExcludeLockLines … | — | — |
| 258 | Gltrial1_En | `Reports/` | — | — | — | BalanceType, ChkNoZero, CompanyAddress, CompanyName, CstGrp, CurCd, ExcludeInactiveAccounts, ExcludeLockLines … | — | — |
| 259 | Gltrial2_Ar | `Reports/` | — | — | — | BalanceType, ChkNoZero, CompanyAddress, CompanyName, CstGrp, CurCd, ExcludeInactiveAccounts, ExcludeLockLines … | — | — |
| 260 | Gltrial2_En | `Reports/` | — | — | — | BalanceType, ChkNoZero, CompanyAddress, CompanyName, CstGrp, CurCd, ExcludeInactiveAccounts, ExcludeLockLines … | — | — |
| 261 | Gltrial3_Ar | `Reports/` | — | — | — | BalanceType, ChkNoZero, CompanyAddress, CompanyName, CstGrp, CurCd, ExcludeInactiveAccounts, ExcludeLockLines … | — | — |
| 262 | Gltrial4_Ar | `Reports/` | — | — | — | BalanceType, ChkNoZero, ComId, CompanyAddress, CompanyName, CstGrp, CurCd, ExcludeInactiveAccounts … | — | — |
| 263 | Gltrial5_Ar | `Reports/` | — | — | — | BalanceType, ChkNoZero, ComId, CompanyAddress, CompanyName, CstGrp, CurCd, ExcludeInactiveAccounts … | — | — |
| 264 | Gltrial6_Ar | `Reports/` | — | — | — | BalanceType, ChkNoZero, ComId, CompanyAddress, CompanyName, CstGrp, CurCd, ExcludeInactiveAccounts … | — | — |
| 265 | GuidanceStudyDetails | `Reports/` | gl | VFINANCIALDECISIONEXPORT | — | FileType, GuidanceJrnCd, GuidanceTrNo, JrnCd, TrNo, Trsrc | — | 2 |
| 266 | Hospital | `Reports/` | — | APPCODES, AQRENT_H, TENANTMF, UNTMF | — | TrNo, Url, login | — | — |
| 267 | industrial_tax | `Reports/` | gl | GLJRNLD, GLSUMS, GLTRSTBL | — | Url, filter, login | — | 2 |
| 268 | Injured_Details | `Reports/` | arch | BENEFICIARIE, BENEFICIARIE_ACCIDENT, BENEFICIARIE_DECISION, ORGANIZATION | — | Disability, OrgNoParam, StudyNoParam, Type | — | 3 |
| 269 | Insurance report | `Reports/` | — | AQRENT_H, BLDMF, REP_AQCOLLECT_H, TENANTMF, UNTMF | — | — | — | — |
| 270 | investigation_according_to_action | `Reports/` | — | ADMINISTRATIVEPENALTIES, INVESTIGATIONS | — | — | — | — |
| 271 | investigations_Tazloom | `Reports/` | — | ADMINISTRATIVEPENALTIES | — | — | — | — |
| 272 | kashfHesabAshry1 | `Reports/` | gl | APPCODES, GLJRNLD, GLLOC, GLMF, GLSCST, GLSSUMS | TRANSACTIONS | — | — | 2 |
| 273 | khazna_2sal_2stlam_n2dya_solfa_sha5sya | `Reports/` | gl | GLCSH_TR, GLCSH_TR_H, PYEMPLOYEES | — | — | — | — |
| 274 | khazna_esal_sarf | `Reports/` | gl | APPCODES, BANK, BRCAUSERS, GLCSH_TR_H, PYEMPMFH | — | — | — | — |
| 275 | khazna_esal_twred | `Reports/` | gl | BRCAUSERS, GLCSH_TR_H | — | — | — | — |
| 276 | khazna_estlam_naadya_shekat | `Reports/` | gl | APPCODES, BRCAUSERS, GLCSH_TR_H, GLLISTS, PYEMPMFH | — | — | — | — |
| 277 | khazna_eysal_estalm_n2dya_ta2meen_ebtda2y_neha2y | `Reports/` | gl | APPCODES, BRCAUSERS, GLCSH_TR_H, GLSSUMS, PYEMPMFH | — | — | — | — |
| 278 | khazna_eysal_estlam_n2dya_korast_Shrot_t2meen | `Reports/` | gl | APPCODES, BRCAUSERS, GLCSH_TR_H, GLSSUMS, PYEMPMFH | — | — | — | — |
| 279 | khazna_eysal_estlam_naadya | `Reports/` | gl | BRCAUSERS, GLCSH_TR_H, GLLISTS, PYEMPMFH | — | — | — | — |
| 280 | khazna_ezn_twred_naadya | `Reports/` | gl | APPCODES, BRCAUSERS, GLCSH_TR_H, PYEMPMFH | — | — | — | — |
| 281 | khazna_gard | `Reports/` | gl | APPCODES, COMMITTEE_CASH_DETAILS, COMMITTEE_CASH_INVENTORY, PYEMPLOYEES | BALANCE_CTE, DETAILS_CTE, MEMBERS_PIVOT, MEMBER_CTE | PageCount, PageNumber | — | — |
| 282 | khazna_kaf4_7rka_5azna | `Reports/` | gl | GLCSH_TR_H | CASHIN, CASHOUT, MONTHLYNET, RUNNINGBALANCE, TOTALS | FromDate, ToDate | — | — |
| 283 | khazna_ReportCshState_Ar | `Reports/` | — | — | — | COM_ID, CST_CD, CompanyAddress, CompanyName, CshCd, CshTy, CurCd, DSsumCd … | — | — |
| 284 | khazna_ReportGlUnBalCsh_Ar | `Reports/` | — | — | — | AccNo, ComId, CompanyAddress, CompanyName, CshCd, CshTy, CstCd, CstCds … | — | — |
| 285 | khazna_tashkel_gard | `Reports/` | gl | APPCODES, COMMITTEE_CASH_INVENTORY, PYEMPLOYEES | MEMBER_CTE | — | — | — |
| 286 | khaznaaa_kaf4_7rka_5azna | `Reports/` | gl | GLCSH_TR_H | CASHIN, CASHOUT, MAINDATA, MONTHLYNET, MONTHLYTOTALS, PREVIOUSBALANCE ... | FromDate, ToDate | — | — |
| 287 | khaznaaa_kaf4_7rka_5azna_fatra | `Reports/` | gl | GLCSH_TR_H | CASHIN, CASHOUT, MAINDATA, MONTHLYNET, MONTHLYTOTALS, PREVIOUSBALANCE ... | FromDate, ToDate | — | — |
| 288 | Lands | `Reports/` | — | APPCODES, AQRENT_H, TENANTMF, UNTMF | — | TrNo, Url, login | — | — |
| 289 | LeaseContractAlhafez | `Reports/` | — | — | — | Logo, Trno, Url, login | — | — |
| 290 | LeaseContractAlhafez_NEW | `Reports/` | — | AQLISTS, AQRENT_H, AQ_VACATE, BLDMF, TENANTMF | — | Logo, Url, login | — | — |
| 291 | LeaseContractPersonal | `Reports/` | — | — | — | Logo, Trno, Url, login | — | — |
| 292 | local_foreign_currency | `Reports/` | — | GLJRNLD, GLJRNLH, GLMF | — | FromDate, ToDate | — | 1 |
| 293 | mahmoud | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 294 | Maintenance_contracts | `Reports/` | — | APPCODES, AQRENT_H, CONTRACTS_H, SERVICPROVIDERS | — | — | — | — |
| 295 | Maly_takaleef_diff_analysis_lines | `Reports/` | gl | GLJRNLD | — | ChkGRP, ComId, CompanyAddress, CompanyName, FromTrNo, JrnCd, JrnCds, Logo … | — | 2 |
| 296 | MaritalStatus | `Reports/` | arch | BENEFICIARIE, BRCA_APPCODES_VIEW | COMBINEDDATA | AccidentNos, ActionTyps, BeneficiarieId, BtwnDate, Centers, Ctgs, DecisionCds, Details … | — | 1 |
| 297 | maritalStatusDetails | `Reports/` | — | — | — | BeneficiarieId, CellNo, Logo, Org, ReportTitle, Url, login, seq | — | 1 |
| 298 | MartyrBenfDetails | `Reports/` | — | — | — | BeneficiarieId, CellNo, Logo, Org, ReportTitle, Url, login, seq | — | 1 |
| 299 | Martyrs_Beneficiaries_Details_Ser | `Reports/` | arch | APPCODES, BENEFICIARIE, BENEFICIARIE_ACCIDENT, BENEFICIARIE_DECISION, MARTYRSBENEFICIARIE, ORGANIZATION | CTE_BENEFICIARIESBASE, CTE_BENEFICIARIESCOUNT, CTE_BENEFICIARIESWITHROWNUM, CTE_MARTYRS, CTE_MARTYRSWITHBENEFICIARYSTART | OrgNoParam, StudyNoParam, Type | — | 2 |
| 300 | Martyrs_Details | `Reports/` | arch | BENEFICIARIE, BENEFICIARIE_ACCIDENT, BENEFICIARIE_DECISION, MARTYRSBENEFICIARIE, ORGANIZATION | DISTINCTMARTYRS | OrgNoParam, StudyNoParam, Type | — | 3 |
| 301 | Martyrs_Family_Details | `Reports/` | arch | APPCODES, BENEFICIARIE, BENEFICIARIE_ACCIDENT, BENEFICIARIE_DECISION, MARTYRSBENEFICIARIE, MARTYRSBENEFICIARIE_D, ORGANIZATION | CTE_BENEFICIARIESBASE, CTE_BENEFICIARIESCOUNT, CTE_BENEFICIARIESWITHROWNUM, CTE_MARTYRS, CTE_MARTYRSWITHBENEFICIARYSTART | OrgNoParam, StudyNoParam, Type | — | 2 |
| 302 | Martyrs_Family_Details_Types | `Reports/` | arch | APPCODES, BENEFICIARIE, BENEFICIARIE_ACCIDENT, BENEFICIARIE_DECISION, MARTYRSBENEFICIARIE, MARTYRSBENEFICIARIE_D, ORGANIZATION | CTE_BENEFICIARIESBASE, CTE_BENEFICIARIESCOUNT, CTE_BENEFICIARIESWITHROWNUM, CTE_MARTYRS, CTE_MARTYRSWITHBENEFICIARYSTART | OrgNoParam, StudyNoParam, Type | — | 2 |
| 303 | Martyrs_Multi_Beneficiaries_Details_Ser | `Reports/` | arch | APPCODES, BENEFICIARIE, BENEFICIARIE_ACCIDENT, BENEFICIARIE_DECISION, MARTYRSBENEFICIARIE, MARTYRSBENEFICIARIE_D, ORGANIZATION | CTE_BENEFICIARIESBASE, CTE_BENEFICIARIESCOUNT, CTE_BENEFICIARIESWITHROWNUM, CTE_MARTYRS, CTE_MARTYRSWITHBENEFICIARYSTART | OrgNoParam, StudyNoParam, Type | — | 2 |
| 304 | MartyrsBenf | `Reports/` | arch | BENEFICIARIE, MARTYRSBENEFICIARIE | — | AccidentNos, ActionTyps, BeneficiarieId, BtwnDate, Centers, Ctgs, DecisionCds, Details … | — | 1 |
| 305 | MONSAREF_REVENU_ADDDA_TOT_kta3at | `Reports/` | gl | GLCST, GLJRNLD | CTE | ChkGRP, ComId, CompanyAddress, CompanyName, FromTrNo, JrnCd, JrnCds, Logo … | — | 1 |
| 306 | MONSAREF_REVENU_ADDDA_TOT_kta3at_Modmag | `Reports/` | gl | GLCST, GLJRNLD | CTE | ChkGRP, ComId, CompanyAddress, CompanyName, FromTrNo, JrnCd, JrnCds, Logo … | — | 1 |
| 307 | MONSAREF_REVENU_ADDDA_TOT_TAFSEELY | `Reports/` | gl | GLCST, GLJRNLD | CTE | ChkGRP, ComId, CompanyAddress, CompanyName, FromTrNo, JrnCd, JrnCds, Logo … | — | 1 |
| 308 | MONSAREF_REVENU_ADDDAT_TOT_TAFSEELY_modmag | `Reports/` | gl | GLCST, GLJRNLD | CTE | ChkGRP, ComId, CompanyAddress, CompanyName, FromTrNo, JrnCd, JrnCds, Logo … | — | 1 |
| 309 | morakabat_fanya_mokayasat_tawsyslat | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 310 | morakabat_toagryah_omala_moba3a_tayar | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 311 | MORDEN_AGRA2AT | `Reports/` | az | AZACCMF, AZTRH | — | Vst_No | — | — |
| 312 | north_asyout | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 313 | north_mnia | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 314 | not_Attached | `Reports/` | gl | ATTACHMENTS, GLJRNLH, GLTRSTBL | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 315 | NumericalStatisticsAccidentsRegions | `Reports/` | arch | BENEFICIARIE, BENEFICIARIE_ACCIDENT | COMBINEDDATA | AccidentNos, ActionTyps, BeneficiarieId, BtwnDate, Centers, Ctgs, DecisionCds, Details … | — | 1 |
| 316 | open_current_account | `Reports/` | gl | GLJRNLD, GLLOC, GLTRSTBL, ZGLUSRS | — | Url, filter, login | — | — |
| 317 | OperationInstanceHdirTestModel | `Reports/` | — | HTEMP, PYCOMP, PYEMPMFH, PYLISTS | — | DefaultReportTitle | — | 2 |
| 318 | OperationInstanceHdirTestModell | `Reports/` | — | HTEMP, PYCOMP, PYEMPMFH, PYLISTS | — | — | DX | 1 |
| 319 | OprtionModelReview | `Reports/` | — | — | — | ChkRptCond, CompanyAddress, CompanyName, Logo, ModelReviewNo, ReportTitle, Url, login | — | 2 |
| 320 | OprtionNosReport_A | `Reports/` | — | — | — | ChkRptCond, CompanyAddress, CompanyName, Logo, OperationNo, ReportTitle, Url, login | — | 2 |
| 321 | OprtionNosReport_B | `Reports/` | gl | EXPENSE_FORMS, GLMF | — | ChkRptCond, CompanyAddress, CompanyName, Logo, OperationNo, ReportTitle, Url, login | OptionNosReportCreditt, OptionNosReportDebit | 2 |
| 322 | OprtionNosReport_B2 | `Reports/` | gl | EXPENSE_FORMS, GLMF | — | CompanyAddress, CompanyName, Logo, OperationNo, ReportTitle, Url, login | OptionNosReportCreditt, OptionNosReportDebit | 2 |
| 323 | OprtionNosReport_BSql | `Reports/` | gl | EXPENSE_FORMS, GLMF | CREDITROWS, DEBITROWS | — | — | 2 |
| 324 | OprtionNosReport_C | `Reports/` | — | — | — | ChkRptCond, CompanyAddress, CompanyName, Logo, OperationNo, ReportTitle, Url, login | — | — |
| 325 | OprtionNosReport_C2 | `Reports/` | — | — | — | ChkRptCond, CompanyAddress, CompanyName, Logo, OperationNo, ReportTitle, Url, login | — | — |
| 326 | OptionNosReportCreditt | `Reports/` | — | — | — | OperationNo, PageMode, Url, login | — | 2 |
| 327 | OptionNosReportDebit | `Reports/` | — | — | — | OperationNo, PageMode, Url, login | — | 2 |
| 328 | OwnerReport | `Reports/` | — | — | — | FromBldCd, FromOwner, Login, Nationality, Owner, Owners, ReportTitle, ToBldCd … | — | — |
| 329 | Pilot_Study | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Details, Pilot_Study_Details | 1 |
| 330 | Pilot_Study_Beneficiaries_Injured | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS_EXTRAS, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Beneficiaries_Details_Ser, Martyrs_Family_Details, Martyrs_Family_Details_Types, Martyrs_Multi_Beneficiaries_Details_Ser | 2 |
| 331 | Pilot_Study_Beneficiaries_Injured_Cost | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS, GUIDANCE_STUDY_FINANC_PROPSLS, GUIDANCE_STUDY_SERVICECOSTINGTMP, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | SCT_CTE, SCT_FLAGGED | StudyNoParam | Injured_Details, Martyrs_Beneficiaries_Details_Ser, Martyrs_Family_Details, Martyrs_Family_Details_Types, Martyrs_Multi_Beneficiaries_Details_Ser | 2 |
| 332 | Pilot_Study_Beneficiaries_Injured_Ser | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Beneficiaries_Details_Ser, Martyrs_Family_Details, Martyrs_Family_Details_Types, Martyrs_Multi_Beneficiaries_Details_Ser | 2 |
| 333 | Pilot_Study_Beneficiaries_Injured_Ser_Cost | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS, GUIDANCE_STUDY_FINANC_PROPSLS, GUIDANCE_STUDY_SERVICECOSTINGTMP, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | SCT_CTE, SCT_FLAGGED | StudyNoParam | Injured_Details, Martyrs_Beneficiaries_Details_Ser, Martyrs_Family_Details, Martyrs_Family_Details_Types, Martyrs_Multi_Beneficiaries_Details_Ser | 2 |
| 334 | Pilot_Study_Beneficiaries_Injured_Totals | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS_EXTRAS, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Beneficiaries_Details_Ser, Martyrs_Family_Details, Martyrs_Family_Details_Types, Martyrs_Multi_Beneficiaries_Details_Ser | 2 |
| 335 | Pilot_Study_Beneficiaries_Injured_Totals_Cost | `Reports/` | arch | GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS, GUIDANCE_STUDY_FINANC_PROPSLS, GUIDANCE_STUDY_SERVICECOSTINGTMP, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | SCT_CTE, SCT_FLAGGED | StudyNoParam | Injured_Details, Martyrs_Beneficiaries_Details_Ser, Martyrs_Family_Details, Martyrs_Family_Details_Types, Martyrs_Multi_Beneficiaries_Details_Ser | 2 |
| 336 | Pilot_Study_Beneficiaries_Injured_Totals_Ser | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Beneficiaries_Details_Ser, Martyrs_Family_Details, Martyrs_Family_Details_Types, Martyrs_Multi_Beneficiaries_Details_Ser | 2 |
| 337 | Pilot_Study_Beneficiaries_Injured_Totals_Ser_Cost | `Reports/` | arch | GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS, GUIDANCE_STUDY_FINANC_PROPSLS, GUIDANCE_STUDY_SERVICECOSTINGTMP, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | SCT_CTE, SCT_FLAGGED | StudyNoParam | Injured_Details, Martyrs_Beneficiaries_Details_Ser, Martyrs_Family_Details, Martyrs_Family_Details_Types, Martyrs_Multi_Beneficiaries_Details_Ser | 2 |
| 338 | Pilot_Study_Beneficiaries_Only_Totals | `Reports/` | arch | GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS_EXTRAS, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Martyrs_Beneficiaries_Details_Ser, Martyrs_Family_Details, Martyrs_Family_Details_Types, Martyrs_Multi_Beneficiaries_Details_Ser | 2 |
| 339 | Pilot_Study_Beneficiaries_Only_Totals_Cost | `Reports/` | arch | GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS, GUIDANCE_STUDY_FINANC_PROPSLS, GUIDANCE_STUDY_SERVICECOSTINGTMP, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | SCT_CTE, SCT_FLAGGED | StudyNoParam | Martyrs_Beneficiaries_Details_Ser, Martyrs_Family_Details, Martyrs_Family_Details_Types, Martyrs_Multi_Beneficiaries_Details_Ser | 2 |
| 340 | Pilot_Study_Beneficiaries_Only_Totals_Ser | `Reports/` | arch | GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Martyrs_Beneficiaries_Details_Ser, Martyrs_Family_Details, Martyrs_Family_Details_Types, Martyrs_Multi_Beneficiaries_Details_Ser | 2 |
| 341 | Pilot_Study_Beneficiaries_Only_Totals_Ser_Cost | `Reports/` | arch | GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS, GUIDANCE_STUDY_FINANC_PROPSLS, GUIDANCE_STUDY_SERVICECOSTINGTMP, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | SCT_CTE, SCT_FLAGGED | StudyNoParam | Martyrs_Beneficiaries_Details_Ser, Martyrs_Family_Details, Martyrs_Family_Details_Types, Martyrs_Multi_Beneficiaries_Details_Ser | 2 |
| 342 | Pilot_Study_Details | `Reports/` | arch | APPCODES, BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | — | OrgNoParam, StudyNoParam | Injured_Details, Martyrs_Details | 1 |
| 343 | Pilot_Study_Injured_Martyrs | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS_EXTRAS, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Details | 2 |
| 344 | Pilot_Study_Injured_Martyrs_Cost | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS, GUIDANCE_STUDY_FINANC_PROPSLS, GUIDANCE_STUDY_SERVICECOSTINGTMP, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Details | 2 |
| 345 | Pilot_Study_Injured_Martyrs_Ser | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Details | 2 |
| 346 | Pilot_Study_Injured_Martyrs_Ser_Cost | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS, GUIDANCE_STUDY_FINANC_PROPSLS, GUIDANCE_STUDY_SERVICECOSTINGTMP, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Details | 2 |
| 347 | Pilot_Study_Injured_Martyrs_Totals | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Details | 2 |
| 348 | Pilot_Study_Injured_Martyrs_Totals_Cost | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_FINANC_PROPSLS, GUIDANCE_STUDY_SERVICECOSTINGTMP, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Details | 2 |
| 349 | Pilot_Study_Injured_Martyrs_Totals_Ser | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Details | 2 |
| 350 | Pilot_Study_Injured_Martyrs_Totals_Ser_Cost | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_FINANC_PROPSLS, GUIDANCE_STUDY_SERVICECOSTINGTMP, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Details | 2 |
| 351 | Pilot_Study_Injured_Only | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS_EXTRAS, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details | 2 |
| 352 | Pilot_Study_Injured_Only_Cost | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS, GUIDANCE_STUDY_FINANC_PROPSLS, GUIDANCE_STUDY_SERVICECOSTINGTMP, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details | 2 |
| 353 | Pilot_Study_Injured_Only_Ser | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details | 2 |
| 354 | Pilot_Study_Injured_Only_Ser_Cost | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS, GUIDANCE_STUDY_FINANC_PROPSLS, GUIDANCE_STUDY_SERVICECOSTINGTMP, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details | 2 |
| 355 | Pilot_Study_Injured_Only_Totals | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details | 2 |
| 356 | Pilot_Study_Injured_Only_Totals_Cost | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_FINANC_PROPSLS, GUIDANCE_STUDY_SERVICECOSTINGTMP, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details | 2 |
| 357 | Pilot_Study_Injured_Only_Totals_Ser | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details | 2 |
| 358 | Pilot_Study_Injured_Only_Totals_Ser_Cost | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_FINANC_PROPSLS, GUIDANCE_STUDY_SERVICECOSTINGTMP, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details | 2 |
| 359 | Pilot_Study_Martyrs_Only_Totals | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Martyrs_Details | 2 |
| 360 | Pilot_Study_Martyrs_Only_Totals_2_Cost | `Reports/` | arch | GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS_EXTRAS, GUIDANCE_STUDY_FINANC_PROPSLS, GUIDANCE_STUDY_SERVICECOSTINGTMP, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | DATACTE, SCT_CTE, SCT_FLAGGED | StudyNoParam | Injured_Details, Martyrs_Beneficiaries_Details_Ser, Martyrs_Details, Martyrs_Family_Details, Martyrs_Family_Details_Types, Martyrs_Multi_Beneficiaries_Details_Ser | 2 |
| 361 | Pilot_Study_Martyrs_Only_Totals_Cost | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS_EXTRAS, GUIDANCE_STUDY_FINANC_PROPSLS, GUIDANCE_STUDY_SERVICECOSTINGTMP, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | DATACTE, SCT_CTE, SCT_FLAGGED | StudyNoParam | Injured_Details, Martyrs_Beneficiaries_Details_Ser, Martyrs_Details, Martyrs_Family_Details, Martyrs_Family_Details_Types, Martyrs_Multi_Beneficiaries_Details_Ser | 2 |
| 362 | Pilot_Study_Martyrs_Only_Totals_Ser | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Martyrs_Details | 2 |
| 363 | Pilot_Study_Martyrs_Only_Totals_Ser_Cost | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_FINANC_PROPSLS, GUIDANCE_STUDY_SERVICECOSTINGTMP, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Martyrs_Details | 2 |
| 364 | Pilot_Study_One_Time | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Details | 2 |
| 365 | Pilot_Study_One_Time_Cost | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_FINANC_PROPSLS, GUIDANCE_STUDY_SERVICECOSTINGTMP, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Details | 2 |
| 366 | Pilot_Study_One_Time_Totals | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Details | 2 |
| 367 | Pilot_Study_One_Time_Totals_Cost | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_FINANC_PROPSLS, GUIDANCE_STUDY_SERVICECOSTINGTMP, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Details | 2 |
| 368 | Pilot_Study_Revision_Totals | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Beneficiaries_Details_Ser, Martyrs_Details, Martyrs_Family_Details, Martyrs_Multi_Beneficiaries_Details_Ser | 2 |
| 369 | Pilot_Study_Revision_Totals_old | `Reports/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS_EXTRAS, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Beneficiaries_Details_Ser, Martyrs_Details, Martyrs_Family_Details, Martyrs_Multi_Beneficiaries_Details_Ser | 2 |
| 370 | PlanReport_FA | `Reports/` | gl | APPCODES, FA_PROJECTS_DETAILS, GLPKGDEF | — | DefaultReportTitle | — | 2 |
| 371 | PrcLstHOptHLst | `Reports/` | — | — | — | AccGrp, CompanyAddress, CompanyName, FromItm, InternalReportTemplates, ItmStr, Logo, Price1 … | — | 1 |
| 372 | PrcLstHpricsRB | `Reports/` | — | — | — | AccGrp, CompanyAddress, CompanyName, FromItm, ItmStr, Logo, Price1, Price2 … | — | 1 |
| 373 | Print_Receipt_Discount_new | `Reports/` | — | AQCOLLECT_H, AQRENT_H, BLDMF, TENANTMF | — | TrNo | — | — |
| 374 | purcahse_test | `Reports/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, NUMBERED | — | — | — |
| 375 | purcahse_test_fat7mazryf | `Reports/` | az | APPCODES, AZTRH | — | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | — | — |
| 376 | purchase_2amr_tashkeeeel_lagnt_shera2_mn_sook_m7ly | `Reports/` | az | APPCODES, AZITMS, AZLISTS, AZTRD, AZTRH, PYEMPMF_H | ALLMEMBERS, ITEMS, LOANINFO, NUMBERED | — | — | — |
