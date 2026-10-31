# كتالوج التقارير — جزء 01 من 09

سجل آلي (مش مستخرج بالـLLM) لكل تقرير Telerik: الاسم، القاعدة، الجداول اللي بيقراها، البارامترات، والتقارير الفرعية.
المصدر: `<SqlDataSource SelectCommand=...>` و`<UriReportSource Uri=...>` جوه ملفات `.trdx`.
لتجديد الملف ده: `node scripts/reports-catalog.mjs`

| # | التقرير (stem) | مسار | القاعدة | جداول | CTE | بارامترات | تقارير فرعية | نسخ مكررة |
|---|---|---|---|---|---|---|---|---|
| 1 | 100 79 SAIL - SOE -Annex grand | `Reports/` | gl | GLCST, GLJRNLD, GLJRNLH, GLLCMF, GLMF | — | FromDate, ToDate | — | 2 |
| 2 | 101 - APPLICATION SUMMARY SHEET | `Reports/` | — | GLCST, GLJRNLD, GLLCMF, GLMF, GLSUMS | — | FromDate, ToDate | — | 2 |
| 3 | 101-APP SUMMARY SHEET ASSP | `Reports/` | — | GLCST, GLJRNLD, GLLCMF, GLMF, GLSUMS | — | FromDate, ToDate | — | 5 |
| 4 | 102 SAIL - SOE -Annex grand | `Reports/` | gl | GLCST, GLJRNLD, GLJRNLH, GLLCMF, GLMF | — | FromDate, ToDate | — | 2 |
| 5 | 104  SAIL - SOE -Annex grand SMALL | `Reports/` | — | GLCST, GLJRNLD, GLLCMF, GLMF | — | FromDate, ToDate | — | 2 |
| 6 | 104_A LOAN | `Reports/` | — | GLJRNLD, GLMF | — | FromDate, ToDate | — | 2 |
| 7 | 104-A ASSP | `Reports/` | — | GLJRNLD, GLMF | — | FromDate, ToDate | — | 5 |
| 8 | 104-A GEF | `Reports/` | — | GLJRNLD, GLMF | — | FromDate, ToDate | — | 5 |
| 9 | 104.all_cost_tasweek_edary | `Reports/` | gl | GLJRNLD | — | ChkGRP, ComId, CompanyAddress, CompanyName, FromDate, FromTrNo, JrnCd, JrnCds … | — | 2 |
| 10 | 105.cost_entagy | `Reports/` | gl | GLJRNLD | — | ChkGRP, ComId, CompanyAddress, CompanyName, FromDate, FromTrNo, JrnCd, JrnCds … | — | 2 |
| 11 | 106.cost_tasweeky | `Reports/` | gl | GLJRNLD | — | ChkGRP, ComId, CompanyAddress, CompanyName, FromDate, FromTrNo, JrnCd, JrnCds … | — | 2 |
| 12 | 106Annex loan small | `Reports/` | — | GLCST, GLJRNLD, GLJRNLH, GLLCMF, GLMF | — | FromDate, ToDate | — | 2 |
| 13 | 107.cost_edary | `Reports/` | gl | GLJRNLD | — | ChkGRP, ComId, CompanyAddress, CompanyName, FromDate, FromTrNo, JrnCd, JrnCds … | — | 2 |
| 14 | 109 FORM 102A -16000 eur | `Reports/` | — | GLCST, GLJRNLD, GLJRNLH, GLLCMF, GLMF | — | FromDate, ToDate | — | 2 |
| 15 | 110 FORM 102A- small 160000 eur | `Reports/` | — | GLCST, GLJRNLD, GLJRNLH, GLLCMF, GLMF | — | FromDate, ToDate | — | 2 |
| 16 | 118 FORM 101 -  SUMMARY SHEET grant | `Reports/` | gl | GLCST, GLJRNLD, GLLCMF, GLMF, GLSSUMS, GLSUMS | — | FromDate, ToDate | — | 2 |
| 17 | 118 FORM 101 - APPLICATION SUMMARY SHEET | `Reports/` | — | GLCST, GLJRNLD, GLLCMF, GLMF, GLSUMS | — | FromDate, ToDate | — | 2 |
| 18 | 136 sum_sheet by expen categ grant | `Reports/` | gl | GLJRNLD, GLMF | — | FromDate, ToDate | — | 2 |
| 19 | 214_kashf_7esab_bel3oma | `Reports/` | az | ACCSTAT_W | — | TEntr, fEntr | — | 1 |
| 20 | 216_Arsedet_3omla2_belmandob | `Reports/` | az | ACCSTAT_W, AZACCMF, AZREPS, AZTRD, AZTRH, AZTRTY | — | — | — | 1 |
| 21 | 224_AS3AR_MOSHTRYAT_MN_SANF | `Reports/` | az | AZACCMF, AZITMS, AZLOCS, AZTRD, AZTRTY | — | — | — | 1 |
| 22 | 99 98 104-A GRAND | `Reports/` | gl | GLJRNLD, GLMF | — | FromDate, ToDate | — | 2 |
| 23 | بيانات العملاء | `Reports/` | — | — | — | — | — | — |
| 24 | تقرير بيانات السيارات | `Reports/` | — | — | — | — | — | — |
| 25 | تقرير بيانات السياره - تقرير كامل | `Reports/` | — | — | — | — | — | — |
| 26 | acc | `Reports/` | gl | GLMF | — | Url, filter, login | — | 2 |
| 27 | accnotin | `Reports/` | — | GLJRNLD, GLMF | — | Url, filter, login | — | 2 |
| 28 | ActionTypes | `Reports/` | arch | BENEFICIARIE, OPERATIONS_TYPES | COMBINEDDATA | AccidentNos, ActionTyps, BeneficiarieId, BtwnDate, Centers, Ctgs, DecisionCds, Details … | — | 1 |
| 29 | ActionTypesDetails | `Reports/` | — | — | — | ActionTyp, BeneficiarieId, CellNo, Logo, Org, ReportTitle, Url, login | — | — |
| 30 | Agreements | `Reports/` | — | AGREEMENTS | — | — | — | — |
| 31 | alert_report_absents | `Reports/` | — | PLTR_TYPES, PYCOMP, PYEMPMFH, PYINOUT_S | — | — | — | — |
| 32 | ALL | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 33 | all_cost_tasweek_edary | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 34 | all_cost_tasweek_edary_agoor | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 35 | all_edary_agoor | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 36 | all_edary_masrofat | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 37 | all_entagy_agoor | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 38 | all_entagy_masrofat | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 3 |
| 39 | all_entagy_tasweeky_edary_masrofat | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 40 | all_tasweeky_agoor | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 41 | AllAna9Columns | `Reports/` | — | COLS, RPTCOLS | — | ColumnsNames | — | 2 |
| 42 | AllAnalysis10Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 43 | AllAnalysis11Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 44 | AllAnalysis12Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 45 | AllAnalysis13Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 46 | AllAnalysis14Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 47 | AllAnalysis15Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 48 | AllAnalysis16Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 49 | AllAnalysis17Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 50 | AllAnalysis18Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 51 | AllAnalysis19Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 52 | AllAnalysis1Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 53 | AllAnalysis20Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 54 | AllAnalysis21Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 55 | AllAnalysis22Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 56 | AllAnalysis23Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 57 | AllAnalysis24Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 58 | AllAnalysis2Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 59 | AllAnalysis3Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 60 | AllAnalysis4Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 61 | AllAnalysis5Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 62 | AllAnalysis6Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 63 | AllAnalysis7Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 64 | AllAnalysis8Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 65 | AllAnalysis9Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 66 | AllAnalysis9Coulmns_Report | `Reports/` | — | GLJRNLD, GLMF, GLTRSTBL | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ToDate | — | 2 |
| 67 | AllAnalysisColumns | `Reports/` | gl | GLJRNLD, GLMF, GLTRSTBL | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ToDate | — | 2 |
| 68 | AllAnalysisCoulumns | `Reports/` | gl | GLJRNLD, GLMF, GLTRSTBL | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ToDate | — | 1 |
| 69 | AllAnalysisDbCrColumns | `Reports/` | gl | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ToDate | — | 2 |
| 70 | AllAnalysisDynamicBIgColumns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 1 |
| 71 | AllAnalysisDynamicColumns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 72 | AmrEsnad | `Reports/` | — | CONTRACTS_H, SERVICPROVIDERS | — | — | — | — |
| 73 | analysis_depreciation | `Reports/` | gl | FADPRC_Q | — | DefaultReportTitle | — | 2 |
| 74 | analysis_depreciation_m | `Reports/` | gl | FADPRC_Q | — | DefaultReportTitle | — | 2 |
| 75 | AqrentHReport | `Reports/` | — | — | — | Amt, Category, ContractState, ElectricEncluded, FromBldCd, FromDate, FromEndDate, FromFolder … | — | — |
| 76 | AqRfVoucherReport1_Ar | `Reports/` | — | — | — | Collect, CompanyAddress, CompanyName, ReportTitle, Trno, Url, Valid, legal … | — | — |
| 77 | assits_Intangible | `Reports/` | gl | FADPRC, FAMF | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 78 | assits_Intangible_sum | `Reports/` | gl | FADPRC, FAJRNL, FAMF | — | DefaultReportTitle | — | 2 |
| 79 | banysuef | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 80 | BarCode | `Reports/` | — | — | — | BarCodeType, CompanyAddress, CompanyName, EndDt, Fdt, FlocCd, GPk, InternalReportTemplates … | — | 1 |
| 81 | BeneficiarieDisability | `Reports/` | arch | BENEFICIARIE | — | AccidentNos, ActionTyps, BeneficiarieId, BtwnDate, Centers, Ctgs, DecisionCds, Details … | — | 1 |
| 82 | BeneficiarieDisability - Copy | `Reports/` | arch | BENEFICIARIE | — | AccidentNos, ActionTyps, BeneficiarieId, BtwnDate, Centers, Ctgs, DecisionCds, Details … | — | — |
| 83 | BeneficiarieDisabilityDetails | `Reports/` | — | — | — | BeneficiarieId, CellNo, Disability, Logo, Org, ReportTitle, Url, login | — | — |
| 84 | BeneficiarieDistrbutionbyAge | `Reports/` | arch | BENEFICIARIE, MARTYRSBENEFICIARIE | BENEFICIARIESCOUNTS, BENEFICIARYCOUNTS, COMBINEDDATA | AccidentNos, ActionTyps, BeneficiarieId, BtwnDate, Centers, Ctgs, DecisionCds, Details … | — | 1 |
| 85 | BeneficiarieDistrbutionbyAgeDetails | `Reports/` | arch | — | — | Age, BeneficiarieId, CellNo, Gov, Logo, Org, ReportTitle, Url … | — | — |
| 86 | BeneficiarieGovernment | `Reports/` | arch | BENEFICIARIE, BRCA_APPCODES_VIEW, MARTYRSBENEFICIARIE | BENEFICIARIESCOUNTS, BENEFICIARYCOUNTS, COMBINEDDATA | AccidentNos, ActionTyps, BeneficiarieId, BtwnDate, Centers, Ctgs, DecisionCds, Details … | — | 1 |
| 87 | BeneficiarieGovernment - Copy | `Reports/` | arch | BENEFICIARIE | — | AccidentNos, ActionTyps, BeneficiarieId, BtwnDate, Centers, Ctgs, DecisionCds, Details … | — | — |
| 88 | BeneficiarieGovernmentDetails | `Reports/` | arch | — | — | BeneficiarieId, CellNo, Gov, Logo, Org, ReportTitle, Url, login | — | — |
| 89 | BeneficiarieMosabDetails | `Reports/` | — | — | — | AccidentNumber, ActionTyp, Age, BeneficiarieId, CellNo, Decision, Disability, Gov … | — | 1 |
| 90 | BeneficiarieMostafidDetails | `Reports/` | — | — | — | AccidentNumber, ActionTyp, Age, BeneficiarieId, CellNo, Decision, Disability, Gov … | — | 1 |
| 91 | BeneficiarieshahidDetails | `Reports/` | — | — | — | AccidentNumber, ActionTyp, BeneficiarieId, CellNo, Decision, Disability, Gov, Logo … | — | 1 |
| 92 | BeneficiarieTotalMosabMostafidDetails | `Reports/` | — | — | — | AccidentNumber, ActionTyp, BeneficiarieId, CellNo, Decision, Disability, Gov, Logo … | — | — |
| 93 | BeneficirieDecisions | `Reports/` | arch | BENEFICIARIE, BENEFICIARIE_DECISION, DECISION | COMBINEDDATA | AccidentNos, ActionTyps, BeneficiarieId, BtwnDate, Centers, Ctgs, DecisionCds, Details … | — | 1 |
| 94 | BeneficirieRelegions | `Reports/` | arch | BENEFICIARIE, BRCA_APPCODES_VIEW, MARTYRSBENEFICIARIE | BENEFICIARIESCOUNTS, BENEFICIARYCOUNTS, COMBINEDDATA | AccidentNos, ActionTyps, BeneficiarieId, BtwnDate, Centers, Ctgs, DecisionCds, Details … | — | 1 |
| 95 | BldmfReport | `Reports/` | — | — | — | AreaCd, BldCat, BldCd, BldCds, BldState, Country, FromBldCd, FromOwner … | — | — |
| 96 | BnkEqltyDetailsReport_Ar | `Reports/` | — | — | — | AccNmAr, AccNo, BbalCr, BbalDb, CRTOT2, CompanyAddress, CompanyName, Crbal2 … | — | 2 |
| 97 | BnkEqltyReport_Ar | `Reports/` | — | — | — | AccNmAr, AccNo, CompanyAddress, CompanyName, FromDate, Logo, Sno, ToDate … | — | — |
| 98 | bonds1 | `Reports/` | gl | BONDS_H, GLMF | — | filter_TO_TR_DT, filter_TR_DT | — | 2 |
| 99 | bonds2 | `Reports/` | gl | BONDS_H, GLMF | — | filter_TO_TR_DT, filter_TR_DT | — | 2 |
| 100 | Budget_all | `Reports/` | gl | APPCODES, GLBDG, GLJRNLD, GLMF | COMBINEDREPORT, EXPENSEDETAILS, REPORTPERIOD, REVENUEDETAILS | FromAnnualPrd, FromDate, FromPrd, Logo, PeriodFrom, PeriodTo, ToAnnualPrd, ToDate … | — | — |
| 101 | Budget_all_Details | `Reports/` | gl | APPCODES, FINANCIAL_LINQ, GLBDG, GLJRNLD, GLMF | COMBINEDREPORT, EXPENSEDETAILS, EXPENSELINKS, EXPENSELINKTOTALS, REPORTPERIOD, REVENUEDETAILS ... | FromAnnualPrd, FromDate, FromPrd, Logo, PeriodFrom, PeriodTo, ToAnnualPrd, ToDate … | — | — |
| 102 | Budget_attachments | `Reports/` | gl | FADPRC_Q, GLCST | — | DefaultReportTitle | — | 2 |
| 103 | Budget_attachments_D | `Reports/` | gl | FADPRC_Q, GLCST | — | DefaultReportTitle | — | 2 |
| 104 | Budget_attachments_D_m | `Reports/` | gl | FADPRC, GLCST | — | DefaultReportTitle | — | 2 |
| 105 | Budget_attachments_m | `Reports/` | gl | FADPRC, GLCST | — | DefaultReportTitle | — | 2 |
| 106 | Budget_Revenu | `Reports/` | gl | APPCODES, GLBDG, GLMF | COMBINEDREPORT, EXPENSEDETAILS, REPORTPERIOD, REVENUEDETAILS | FromAnnualPrd, FromDate, FromPrd, Logo, PeriodFrom, PeriodTo, ToAnnualPrd, ToDate … | — | — |
| 107 | Budget_Revenu_Eradat | `Reports/` | gl | APPCODES, GLBDG, GLMF | COMBINEDREPORT, EXPENSEDETAILS, REPORTPERIOD, REVENUEDETAILS | FromAnnualPrd, FromDate, FromPrd, Logo, PeriodFrom, PeriodTo, ToAnnualPrd, ToDate … | — | — |
| 108 | Budget_Revenu_Masrofat | `Reports/` | gl | APPCODES, GLBDG, GLMF | COMBINEDREPORT, EXPENSEDETAILS, REPORTPERIOD, REVENUEDETAILS | FromAnnualPrd, FromDate, FromPrd, Logo, PeriodFrom, PeriodTo, ToAnnualPrd, ToDate … | — | — |
| 109 | cars | `Reports/` | gl | GLJRNLD, GLLOC, GLSCST | — | ChkGRP, ComId, CompanyAddress, CompanyName, FromDate, FromTrNo, JrnCd, JrnCds … | — | 1 |
| 110 | cars_new | `Reports/` | gl | GLJRNLD, GLLOC, GLSCST | AGGREGATEDDATA | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 111 | cars_tafseely | `Reports/` | gl | GLCST, GLJRNLD, GLLISTS, GLLOC, GLMF, GLSCST, GLTRSTBL | EXPENSES | ChkGRP, ComId, CompanyAddress, CompanyName, FromTrNo, JrnCd, JrnCds, Logo … | — | 1 |
| 112 | CaseReport | `Reports/` | arch | APPCODES, CASES, CASESD, COURTS | — | — | — | 1 |
| 113 | cases_details_rpt | `Reports/` | — | CASES, COURTS | — | CaseType, IsClosed, url | — | — |
| 114 | cases_NUMBERStrdx | `Reports/` | — | CASES | — | CaseType, IsClosed, url | cases_details_rpt | — |
| 115 | cases_rpt | `Reports/` | — | CASES | — | CaseType, IsClosed, url | cases_details_rpt | — |
| 116 | change_OE | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 117 | codes_Ar | `Reports/` | — | — | — | login | — | 2 |
| 118 | Collections report | `Reports/` | — | AQCOLLECT_D, AQCOLLECT_H, AQLIST60, BLDMF, EARN_RECORDS, TENANTMF, UNTMF | — | — | — | — |
| 119 | CollectRents | `Reports/` | — | — | — | AccNo, BldCd, Bnk, CheckNo, DepstNo, DptNo, DueDt, Nots … | — | — |
| 120 | CollectRents  - زبن العربيد | `Reports/` | — | — | — | AccNo, BldCd, Bnk, CheckNo, DepstNo, DptNo, DueDt, Nots … | — | — |
| 121 | CollectRents - العربيد | `Reports/` | — | — | — | AccNo, BldCd, Bnk, CheckNo, DepstNo, DptNo, DueDt, Nots … | — | — |
| 122 | CollectRentsCollect | `Reports/` | — | — | — | AccNo, BldCd, Bnk, CheckNo, DepstNo, DptNo, DueDt, Nots … | — | — |
| 123 | CollectReport | `Reports/` | — | — | — | Amt, Category, CollectState, ContractState, ElectricEncluded, FromBldCd, FromDate, FromEndDate … | — | — |
| 124 | CollectReport_Details | `Reports/` | — | APPCODES, AQCOLLECT_D, AQCOLLECT_H, AQRENT_D, AQRENT_H, BLDMF, EARN_RECORDS, OWNERFOLDER, TENANTMF, UNTMF | — | FromEndDt, FromStrtDt, ToEndDt, ToStrtDt | — | — |
| 125 | CollectReport_Dis | `Reports/` | — | AQRENT_H, BLDMF, EARN_RECORDS, OWNERFOLDER, TENANTMF | — | — | — | — |
| 126 | CommitteeCash_report | `Reports/` | gl | COMMITTEE_CASH_DETAILS, COMMITTEE_CASH_INVENTORY, PYEMPLOYEES | MEMBER_CTE | — | — | 2 |
| 127 | company_cost_tasweek_edary | `Reports/` | gl | CST_VAR, GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 128 | compare_motawaset_taklefa_sa3r_elbay3 | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 129 | ComplaintStatusreport | `Reports/` | arch | COMPLAINTS | — | — | — | 1 |
| 130 | Consultant_report | `Reports/` | gl | FADPRC_Q | — | DefaultReportTitle | — | 2 |
| 131 | Consultant_report_m | `Reports/` | gl | FADPRC | — | DefaultReportTitle | — | 2 |
| 132 | ContractPro | `Reports/` | — | CONTRACTS_H | — | TrNo, Url, login | — | — |
| 133 | ContractProAssignmentOrder | `Reports/` | — | CONTRACTS_H | — | TrNo, Url, login | — | — |
| 134 | contracts | `Reports/` | — | CONTRACTS | — | — | — | — |
| 135 | Contracts report ali | `Reports/` | gl | AQCOLLECT_D, AQCOLLECT_H, AQLISTS, AQRENT_H, BLDMF, OWNERFOLDER, TENANTMF | — | — | — | — |
| 136 | Contracts report-39 | `Reports/` | — | APPCODES, AQLISTS, AQRENT_D, AQRENT_H, BLDMF, TENANTMF, UNTMF | — | — | — | — |
| 137 | Contracts_Agreements | `Reports/` | — | AGREEMENTS | — | — | — | — |
| 138 | Contracts_with_Agreements | `Reports/` | — | CONTRACTSAGREEMENTS | — | — | — | — |
| 139 | cost_edary | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 140 | cost_entagy | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 141 | cost_rev_moysat_asyot_n | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 142 | cost_rev_moysat_asyot_s | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 143 | cost_tasweeky | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 144 | CreateOrder | `Reports/` | — | — | — | Login, ReportTitle, TrNoFromCollectH, TrNosFromCollectH, Url | — | — |
| 145 | CreateOrderContractPro | `Reports/` | — | — | — | Login, ReportTitle, TrNoFromCollectH, TrNosFromCollectH, Url | — | — |
| 146 | cst_cd_is_null | `Reports/` | gl | GLJRNLD, GLMF, GLTRSTBL | — | ChkGRP, ComId, CompanyAddress, CompanyName, FromDate, FromTrNo, JrnCd, JrnCds … | — | 2 |
| 147 | depreciation_TOt | `Reports/` | gl | FADPRC_Q, GLCST | — | DefaultReportTitle | — | 2 |
| 148 | depreciation_TOt_m | `Reports/` | gl | FADPRC, GLCST | — | DefaultReportTitle | — | 2 |
| 149 | DX | `Reports/` | — | HTEMP | — | — | — | — |
| 150 | Edara_ELfatawa | `Reports/` | — | FATWAS | — | — | — | — |
| 151 | Edara_Elmrahel_rpt_cases | `Reports/` | — | CASES | — | — | — | — |
| 152 | Edara_ELQadaya_rpt | `Reports/` | — | CASES | C | — | — | — |
| 153 | Edara_Elshakawa | `Reports/` | — | INVESTIGATIONS | — | — | — | — |
| 154 | Edara_Tahqeqat_7sb_Eltsaroof | `Reports/` | — | INVESTIGATIONS | — | — | — | — |
| 155 | ElC_buying_Selling_Lost_ALL | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 156 | ElC_buying_Selling_Lost_banysuef | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 157 | ElC_buying_Selling_Lost_fyoum | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 158 | ElC_buying_Selling_Lost_north_asyout | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 159 | ElC_buying_Selling_Lost_north_mnia | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 160 | ElC_buying_Selling_Lost_south_asyout | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 161 | ElC_buying_Selling_Lost_south_mnia | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 162 | ElC_buying_Selling_Lost_wadyelgeded | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 163 | Emp | `Reports/` | — | APPCODES, PYCOMP, PYEMPMFH, PYLISTS | — | — | — | 1 |
| 164 | Empty units data report-45 | `Reports/` | — | AQLISTS, BLDMF, TENANTMF, UNTMF | — | — | — | — |
| 165 | energy_kws | `Reports/` | — | GLJRNLD_A | CURRENTPERIOD, PREVIOUSPERIOD | filter_TO_TR_DT, filter_TR_DT | — | 1 |
| 166 | equal_current_account | `Reports/` | gl | GLJRNLD, GLLOC, GLTRSTBL | — | Url, filter, login | — | 2 |
| 167 | FA_CD_WithOut_CST_CD | `Reports/` | gl | FADPRC_Q, FAMF | — | DefaultReportTitle | — | 2 |
| 168 | FA_CD_WithOut_CST_CD_m | `Reports/` | gl | FADPRC, FAMF | — | DefaultReportTitle | — | 2 |
| 169 | FA_CD_WithOut_SCST_CD | `Reports/` | gl | FADPRC, FAMF | — | DefaultReportTitle | — | 1 |
| 170 | FA_PROJECTS_DETAILS_QTY_ACT_APROV | `Reports/` | gl | APPCODES, FA_PROJECTSCODING, FA_PROJECTS_DETAILS | — | DefaultReportTitle | — | 2 |
| 171 | FaAnalysis_Ar | `Reports/` | — | — | — | C11, C12, C21, C22, C31, C32, C41, C42 … | — | 2 |
| 172 | FaAnalysis10Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 173 | FaAnalysis11Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 174 | FaAnalysis12Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 175 | FaAnalysis13Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 176 | FaAnalysis14Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 177 | FaAnalysis15Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 178 | FaAnalysis16Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 179 | FaAnalysis17Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 180 | FaAnalysis18Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 181 | FaAnalysis19Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 182 | FaAnalysis1Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 183 | FaAnalysis20Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 184 | FaAnalysis21Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 185 | FaAnalysis22Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 186 | FaAnalysis23Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 187 | FaAnalysis24Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 188 | FaAnalysis2Columns | `Reports/` | — | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
