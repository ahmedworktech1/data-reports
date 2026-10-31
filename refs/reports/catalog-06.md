# كتالوج التقارير — جزء 06 من 09

سجل آلي (مش مستخرج بالـLLM) لكل تقرير Telerik: الاسم، القاعدة، الجداول اللي بيقراها، البارامترات، والتقارير الفرعية.
المصدر: `<SqlDataSource SelectCommand=...>` و`<UriReportSource Uri=...>` جوه ملفات `.trdx`.
لتجديد الملف ده: `node scripts/reports-catalog.mjs`

| # | التقرير (stem) | مسار | القاعدة | جداول | CTE | بارامترات | تقارير فرعية | نسخ مكررة |
|---|---|---|---|---|---|---|---|---|
| 941 | GlaccstatnReport7_Ar | `Reports/Gl/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 1 |
| 942 | GlaccstatnReport8_Ar | `Reports/Gl/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 1 |
| 943 | GlaccstatnReport9_Ar | `Reports/Gl/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 1 |
| 944 | GlaccstatnReportTrDt | `Reports/Gl/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 1 |
| 945 | GlCshTr_Ar | `Reports/Gl/` | gl | GLCSHMF, GLCSH_TR_H | — | CompanyAddress, CompanyName, Logo, trNo, trTy | — | 1 |
| 946 | GlCshTr_ArPay1 | `Reports/Gl/` | gl | GLCSHMF, GLCSH_TR, GLCSH_TR_H, GLCST, GLMF, GLSSUMS, GLSUMS | — | CompanyAddress, CompanyName, Logo, trNo, trTy | — | 1 |
| 947 | GlCshTr2_Ar | `Reports/Gl/` | — | — | — | CompanyAddress, CompanyName, Logo, Url, login, trNo, trTy | — | 1 |
| 948 | Gltrial0_Ar | `Reports/Gl/` | — | — | — | AccNt, BalanceType, ChkNoZero, ComId, CompanyAddress, CompanyName, CstGrp, CurCd … | — | 1 |
| 949 | Gltrial1_Ar | `Reports/Gl/` | — | — | — | AccNt, BalanceType, ChkNoZero, CompanyAddress, CompanyName, CstGrp, CurCd, ExcludeInactiveAccounts … | — | 1 |
| 950 | Gltrial1_En | `Reports/Gl/` | — | — | — | AccNt, BalanceType, ChkNoZero, CompanyAddress, CompanyName, CstGrp, CurCd, ExcludeInactiveAccounts … | — | 1 |
| 951 | Gltrial2_Ar | `Reports/Gl/` | — | — | — | AccNt, BalanceType, ChkNoZero, CompanyAddress, CompanyName, CstGrp, CurCd, ExcludeInactiveAccounts … | — | 1 |
| 952 | Gltrial2_En | `Reports/Gl/` | — | — | — | AccNt, BalanceType, ChkNoZero, CompanyAddress, CompanyName, CstGrp, CurCd, ExcludeInactiveAccounts … | — | 1 |
| 953 | Gltrial3_Ar | `Reports/Gl/` | — | — | — | AccNt, BalanceType, ChkNoZero, CompanyAddress, CompanyName, CstGrp, CurCd, ExcludeInactiveAccounts … | — | 1 |
| 954 | Gltrial5_Ar | `Reports/Gl/` | — | — | — | AccNt, BalanceType, ChkNoZero, ComId, CompanyAddress, CompanyName, CstGrp, CurCd … | — | 1 |
| 955 | Gltrial6_Ar | `Reports/Gl/` | — | — | — | AccNt, BalanceType, ChkNoZero, ComId, CompanyAddress, CompanyName, CstGrp, CurCd … | — | 1 |
| 956 | khetab_daman | `Reports/Gl/` | gl | APPCODES, GLLCMF | — | ClosDt, FromDate, OpnDt, ReportTitle, ToDate, filter_TO_TR_DT, filter_TR_DT | — | 1 |
| 957 | open_current_account | `Reports/Gl/` | gl | GLJRNLD, GLLOC, GLTRSTBL | — | Url, filter, login | — | 1 |
| 958 | OprtionNosReport_C | `Reports/Gl/` | — | — | — | ChkRptCond, CompanyAddress, CompanyName, Logo, OperationNo, ReportTitle, Url, login | — | 1 |
| 959 | OprtionNosReport_C2 | `Reports/Gl/` | — | — | — | ChkRptCond, CompanyAddress, CompanyName, Logo, OperationNo, ReportTitle, Url, login | — | 1 |
| 960 | ReportCshState_Ar | `Reports/Gl/` | — | — | — | COM_ID, CST_CD, CompanyAddress, CompanyName, CshCd, CshTy, CurCd, DSsumCd … | — | 1 |
| 961 | ReportExpierd_Ar | `Reports/Gl/` | — | — | — | CompanyAddress, CompanyName, CstCd, DMY, DMYs, DeliveryStatus, FClosDt, FVendorNo … | — | 1 |
| 962 | ReportFaRpn_Ar | `Reports/Gl/` | — | — | — | ChkFaCd1, ChkFaCd2, ChkFaCd3, ChkFaCd4, ChkMcstCd, ChkOCst, ChkcstCd, ColGrop … | — | 1 |
| 963 | ReportFaRpnBalanceBeginning_Ar | `Reports/Gl/` | — | — | — | ChkFaCd1, ChkFaCd2, ChkFaCd3, ChkFaCd4, ChkMcstCd, ChkOCst, ChkcstCd, ColGrop … | — | 1 |
| 964 | ReportFaRpnCars_Ar | `Reports/Gl/` | — | — | — | ChkFaCd1, ChkFaCd2, ChkFaCd3, ChkFaCd4, ChkMcstCd, ChkOCst, ChkcstCd, ColGrop … | — | 1 |
| 965 | ReportGlAccTr1_Ar | `Reports/Gl/` | — | — | — | AccNo, AccNos, AccStat, AccountsNames, ComId, CompanyAddress, CompanyName, FromAccNo … | — | 1 |
| 966 | ReportGlBalAcc_Ar | `Reports/Gl/` | — | — | — | CompanyAddress, CompanyName, FromAccount, FromDate, Logo, ParmsFromOtherConds, ReportTitle, ToAccount … | — | 1 |
| 967 | ReportGljrnlSt1_Ar | `Reports/Gl/` | — | — | — | ComId, CompanyAddress, CompanyName, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd … | — | 1 |
| 968 | ReportGljrnlSt2_Ar | `Reports/Gl/` | — | — | — | ComId, CompanyAddress, CompanyName, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd … | — | 1 |
| 969 | ReportGljrnlSt3_Ar | `Reports/Gl/` | — | — | — | ComId, CompanyAddress, CompanyName, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd … | — | 1 |
| 970 | ReportGljrnlSt4_Ar | `Reports/Gl/` | — | — | — | ComId, CompanyAddress, CompanyName, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd … | — | 1 |
| 971 | ReportGljrnlSt5_Ar | `Reports/Gl/` | — | — | — | ComId, CompanyAddress, CompanyName, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd … | — | 1 |
| 972 | ReportGljrnlSt6_Ar | `Reports/Gl/` | — | — | — | ComId, CompanyAddress, CompanyName, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd … | — | 1 |
| 973 | ReportGljrnlSt7_Ar | `Reports/Gl/` | — | — | — | ComId, CompanyAddress, CompanyName, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd … | — | 1 |
| 974 | ReportGljrnlSt8_Ar | `Reports/Gl/` | — | — | — | ComId, CompanyAddress, CompanyName, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd … | — | 1 |
| 975 | ReportGljrnlSt9_Ar | `Reports/Gl/` | — | — | — | ComId, CompanyAddress, CompanyName, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd … | — | 1 |
| 976 | ReportGlmfLst_Ar | `Reports/Gl/` | — | — | — | AccLvl, AccNo, AccNos, AccSt, ChangeFont, ComId, CompanyAddress, CompanyName … | — | 1 |
| 977 | ReportGlUnBalCsh_Ar | `Reports/Gl/` | — | — | — | AccNo, ComId, CompanyAddress, CompanyName, CshCd, CshTy, CstCd, CstCds … | — | 1 |
| 978 | ReportGlunbaljrn | `Reports/Gl/` | — | — | — | ChkGRP, ComId, CompanyAddress, CompanyName, FromDate, FromTrNo, JrnCd, JrnCds … | — | 1 |
| 979 | ReportGlunbaljrnB | `Reports/Gl/` | — | — | — | ChkGRP, ComId, CompanyAddress, CompanyName, FromDate, FromTrNo, JrnCd, JrnCds … | — | 1 |
| 980 | RfFaRpnExtrasOnly_Ar | `Reports/Gl/` | — | — | — | ChkFaCd1, ChkFaCd2, ChkFaCd3, ChkFaCd4, ChkMcstCd, ChkOCst, ChkcstCd, ColGrop … | — | 1 |
| 981 | RfFaRpnQantitiesShort_Ar | `Reports/Gl/` | — | — | — | ChkFaCd1, ChkFaCd2, ChkFaCd3, ChkFaCd4, ChkMcstCd, ChkOCst, ChkcstCd, ColGrop … | — | 1 |
| 982 | Rpt0GljrnlNSummary | `Reports/Gl/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, TrNo, Url, login | — | 1 |
| 983 | Rpt0GljrnlSummary | `Reports/Gl/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, TrNo, Url, login | — | 1 |
| 984 | Rpt1GljrnlDetailed | `Reports/Gl/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, TrNo, Url, login | — | 1 |
| 985 | Rpt1GljrnlNDetailed | `Reports/Gl/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, TrNo, Url, login | — | 1 |
| 986 | Rpt3GljrnlAutomatic | `Reports/Gl/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, TrNo, Url, login | — | 1 |
| 987 | Rpt3GljrnlNAutomatic | `Reports/Gl/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, TrNo, Url, login | — | 1 |
| 988 | Rpt3GljrnlNSpecialModel | `Reports/Gl/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, TrNo, Url, login | — | 1 |
| 989 | Rpt3GljrnlSpecialModel | `Reports/Gl/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, TrNo, Url, login | — | 1 |
| 990 | Rpt4GljrnlCentralRecord | `Reports/Gl/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, TrNo, Url, login | — | 1 |
| 991 | Rpt4GljrnlNCentralRecord | `Reports/Gl/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, TrNo, Url, login | — | 1 |
| 992 | Rpt5GljrnlNPay | `Reports/Gl/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, TrNo, Url, login | — | 1 |
| 993 | Rpt5GljrnlPay | `Reports/Gl/` | — | — | — | CompanyAddress, CompanyName, JrnCd, LnTy, Logo, ReportTitle, Sgrp, TrNo … | — | 1 |
| 994 | Rpt6GljrnlNTotalAccounts | `Reports/Gl/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, TrNo, Url, login | — | 1 |
| 995 | Rpt6GljrnlTotalAccounts | `Reports/Gl/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, TrNo, Url, login | — | 1 |
| 996 | Rpt7GljrnlBilateral | `Reports/Gl/` | — | — | — | CompanyAddress, CompanyName, Hdscr, JrnCd, Logo, TrDt, TrNo, Url … | — | 1 |
| 997 | Rpt7GljrnlNBilateral | `Reports/Gl/` | — | — | — | CompanyAddress, CompanyName, Hdscr, JrnCd, Logo, TrDt, TrNo, Url … | — | 1 |
| 998 | Rpt8GljrnlMoreDetails | `Reports/Gl/` | — | — | — | CompanyAddress, CompanyName, DefaultComId, JrnCd, Logo, TrNo, Url, login | — | 1 |
| 999 | Rpt8GljrnlNMoreDetails | `Reports/Gl/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, TrNo, Url, login | — | 1 |
| 1000 | TrTyAnalysis_Ar | `Reports/Gl/` | — | — | — | AccNt, AddBeginBalance, Appnd_TRDS, CashAndJrnl, ChkNoClos, ChkNoZero, ComId, CompanyAddress … | — | 1 |
| 1001 | TrTyAnalysis_BBAL_Ar | `Reports/Gl/` | — | — | — | AccNt, AddBeginBalance, Appnd_TRDS, CashAndJrnl, ChkNoClos, ChkNoZero, ComId, CompanyAddress … | — | 1 |
| 1002 | TrTyAnalysis_CoulumnCharts_Ar | `Reports/Gl/` | — | — | — | AddBeginBalance, Appnd_TRDS, CashAndJrnl, ChkNoClos, ChkNoZero, ComId, CompanyAddress, CompanyName … | — | 1 |
| 1003 | TrTyAnalysis_CUR_Ar | `Reports/Gl/` | — | — | — | AddBeginBalance, Appnd_TRDS, CashAndJrnl, ChkNoClos, ChkNoZero, ComId, CompanyAddress, CompanyName … | — | 1 |
| 1004 | TrTyAnalysis_LineCharts_Ar | `Reports/Gl/` | — | — | — | AddBeginBalance, Appnd_TRDS, CashAndJrnl, ChkNoClos, ChkNoZero, ComId, CompanyAddress, CompanyName … | — | 1 |
| 1005 | TrTyAnalysis_NoBal_Ar | `Reports/Gl/` | — | — | — | AccNt, AddBeginBalance, Appnd_TRDS, CashAndJrnl, ChkNoClos, ChkNoZero, ComId, CompanyAddress … | — | 1 |
| 1006 | TrTyAnalysis_PieCharts_Ar | `Reports/Gl/` | — | — | — | AddBeginBalance, Appnd_TRDS, CashAndJrnl, ChkNoClos, ChkNoZero, ComId, CompanyAddress, CompanyName … | — | 1 |
| 1007 | DX | `Reports/Py/` | — | — | — | CalcNo, EMP_NO | — | — |
| 1008 | ReportPyInOutAbsence | `Reports/Py/` | — | — | — | AbsenceTr, AdvacSys, AutoAdjust, CompNo, CompanyAddress, CompanyName, Departement, EmpSrch … | — | — |
| 1009 | ReportPyInOutAll | `Reports/Py/` | — | — | — | AbsenceTr, AdvacSys, AutoAdjust, CompNo, CompanyAddress, CompanyName, Departement, EmpSrch … | — | — |
| 1010 | ReportPyInOutAtndAndDprt | `Reports/Py/` | — | — | — | AbsenceTr, AdvacSys, AutoAdjust, CompNo, CompanyAddress, CompanyName, Departement, EmpSrch … | — | — |
| 1011 | ReportPyInOutDelay | `Reports/Py/` | — | — | — | AbsenceTr, AdvacSys, AutoAdjust, CompNo, CompanyAddress, CompanyName, Departement, EmpSrch … | — | — |
| 1012 | ReportPyInOutOver | `Reports/Py/` | — | — | — | AbsenceTr, AdvacSys, AutoAdjust, CompNo, CompanyAddress, CompanyName, Departement, EmpSrch … | — | — |
| 1013 | Eligibility_Cases_Report__0005_639263669510334229 | `Reports/Temp/` | — | — | — | — | — | — |
| 1014 | purchase_3dad_el_moardin_kolhm__0005_639261153206551304 | `Reports/Temp/` | gl | AZTRH, GLCHKSMF, GLCSH_TR_H, GLLCMF, GLSSUMS | AZTRH_DEDUP | — | — | 1 |
| 1015 | purchase_3dad_el_moardin_kolhm__0005_639261157101011760 | `Reports/Temp/` | gl | AZTRH, GLCHKSMF, GLCSH_TR_H, GLLCMF, GLSSUMS | AZTRH_DEDUP | — | — | 3 |
| 1016 | purchase_3dad_el_moardin_kolhm__0005_639261162459136561 | `Reports/Temp/` | gl | AZTRH, GLCHKSMF, GLCSH_TR_H, GLLCMF, GLSSUMS | AZTRH_DEDUP | — | — | — |
| 1017 | purchase_3dad_el_moardin_kolhm__0005_639261163080788659 | `Reports/Temp/` | gl | AZTRH, GLCHKSMF, GLCSH_TR_H, GLLCMF, GLSSUMS | AZTRH_DEDUP | — | — | — |
| 1018 | purchase_3dad_el_moardin_kolhm__0005_639261163487368351 | `Reports/Temp/` | gl | AZTRH, GLCHKSMF, GLCSH_TR_H, GLLCMF, GLSSUMS | AZTRH_DEDUP | — | — | — |
| 1019 | purchase_3dad_el_moardin_kolhm__0005_639261163852346540 | `Reports/Temp/` | gl | AZTRH, GLCHKSMF, GLCSH_TR_H, GLLCMF, GLSSUMS | AZTRH_DEDUP | — | — | 4 |
| 1020 | purchase_3dad_el_moardin_kolhm__0005_639261171095639772 | `Reports/Temp/` | gl | AZTRH, GLCHKSMF, GLCSH_TR_H, GLLCMF, GLSSUMS | AZTRH_DEDUP | — | — | 2 |
| 1021 | purchase_3dad_el_moardin_kolhm__0005_639261177955136887 | `Reports/Temp/` | gl | AZTRH, GLCHKSMF, GLCSH_TR_H, GLLCMF, GLSSUMS | AZTRH_DEDUP | — | — | 1 |
| 1022 | purchase_3dad_el_moardin_kolhm__0005_639261178601662380 | `Reports/Temp/` | gl | AZTRH, GLCHKSMF, GLCSH_TR_H, GLLCMF, GLSSUMS | AZTRH_DEDUP | — | — | 1 |
| 1023 | purchase_3dad_el_moardin_kolhm__0005_639261179321335253 | `Reports/Temp/` | gl | AZTRH, GLCHKSMF, GLCSH_TR_H, GLLCMF, GLSSUMS | AZTRH_DEDUP | — | — | — |
| 1024 | purchase_3dad_el_moardin_kolhm__0005_639261179977176551 | `Reports/Temp/` | gl | AZTRH, GLCHKSMF, GLCSH_TR_H, GLLCMF, GLSSUMS | AZTRH_DEDUP | — | — | — |
| 1025 | purchase_3dad_el_moardin_kolhm__0005_639261186078208749 | `Reports/Temp/` | gl | AZTRH, GLCHKSMF, GLCSH_TR_H, GLLCMF, GLSSUMS | AZTRH_DEDUP | Loc, TrNo, TrTy | — | 1 |
| 1026 | purchase_3dad_el_moardin_kolhm__0005_639261193867370835 | `Reports/Temp/` | gl | AZTRH, GLCHKSMF, GLCSH_TR_H, GLLCMF, GLSSUMS | AZTRH_DEDUP | Loc, TrNo, TrTy | — | 23 |
| 1027 | purchase_aqd_moawla_a3mal__0005_639264729584683380 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | — |
| 1028 | purchase_aqd_moawla_a3mal__0005_639264731433848735 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | — |
| 1029 | purchase_aqd_moawla_a3mal__0005_639264731714564544 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | — |
| 1030 | purchase_aqd_moawla_a3mal__0005_639264732665269796 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | — |
| 1031 | purchase_aqd_moawla_a3mal__0005_639264732940440854 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | — |
| 1032 | purchase_aqd_moawla_a3mal__0005_639264733020329743 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | — |
| 1033 | purchase_aqd_moawla_a3mal__0005_639264733098075241 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | 1 |
| 1034 | purchase_aqd_moawla_a3mal__0005_639264734109724804 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | — |
| 1035 | purchase_aqd_moawla_a3mal__0005_639264734236412712 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | — |
| 1036 | purchase_aqd_moawla_a3mal__0005_639264734696897546 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | 1 |
| 1037 | purchase_aqd_moawla_a3mal__0005_639264734911744884 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | — |
| 1038 | purchase_aqd_moawla_a3mal__0005_639264735055581626 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | — |
| 1039 | purchase_aqd_moawla_a3mal__0005_639264736493604617 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | — |
| 1040 | purchase_aqd_moawla_a3mal__0005_639264737343701804 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | — |
| 1041 | purchase_aqd_moawla_a3mal__0005_639264737859329766 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | 2 |
| 1042 | purchase_aqd_moawla_a3mal__0005_639264738150186106 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | — |
| 1043 | purchase_aqd_moawla_a3mal__0005_639264739451507630 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | — |
| 1044 | purchase_aqd_moawla_a3mal__0005_639264741386132305 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | — |
| 1045 | purchase_aqd_moawla_a3mal__0005_639264741456334424 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | — |
| 1046 | purchase_aqd_moawla_a3mal__0005_639264741516655650 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | — |
| 1047 | purchase_aqd_moawla_a3mal__0005_639264741574271061 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | 1 |
| 1048 | purchase_aqd_moawla_a3mal__0005_639264741613064206 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | — |
| 1049 | purchase_aqd_moawla_a3mal__0005_639264741813947321 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | — |
| 1050 | purchase_aqd_moawla_a3mal__0005_639264742533041190 | `Reports/Temp/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | — |
| 1051 | Purchase_AztrhRequestInstanceLogss__0001_639286283475238487 | `Reports/Temp/` | az | AZTRH, BRCAUSERS, REQUESTINSTANCELOGS, STATES, TRANSITIONS, TRIGGERS | — | — | — | 1 |
| 1052 | Purchase_AztrhRequestInstanceLogss__0002_639257631395384295 | `Reports/Temp/` | az | AZTRH, BRCAUSERS, REQUESTINSTANCELOGS, STATES, TRANSITIONS, TRIGGERS | — | — | — | — |
| 1053 | Purchase_AztrhRequestInstanceLogss__0002_639257655197681010 | `Reports/Temp/` | az | AZTRH, BRCAUSERS, REQUESTINSTANCELOGS, STATES, TRANSITIONS, TRIGGERS | — | — | — | 2 |
| 1054 | Purchase_AztrhRequestInstanceLogss__0002_639257655376826320 | `Reports/Temp/` | az | AZTRH, BRCAUSERS, REQUESTINSTANCELOGS, STATES, TRANSITIONS, TRIGGERS | — | — | — | 1 |
| 1055 | Purchase_AztrhRequestInstanceLogss__0002_639257655808818722 | `Reports/Temp/` | az | AZTRH, BRCAUSERS, REQUESTINSTANCELOGS, STATES, TRANSITIONS, TRIGGERS | — | — | — | — |
| 1056 | Purchase_AztrhRequestInstanceLogss__0002_639257655931872777 | `Reports/Temp/` | az | AZTRH, BRCAUSERS, REQUESTINSTANCELOGS, STATES, TRANSITIONS, TRIGGERS | — | — | — | — |
| 1057 | Purchase_AztrhRequestInstanceLogss__0002_639257656053840711 | `Reports/Temp/` | az | AZTRH, BRCAUSERS, REQUESTINSTANCELOGS, STATES, TRANSITIONS, TRIGGERS | — | — | — | 6 |
| 1058 | Purchase_AztrhRequestInstanceLogss__0002_639257656321931742 | `Reports/Temp/` | az | AZTRH, BRCAUSERS, REQUESTINSTANCELOGS, STATES, TRANSITIONS, TRIGGERS | — | — | — | 1 |
| 1059 | Purchase_AztrhRequestInstanceLogss__0005_639249876949277578 | `Reports/Temp/` | az | AZTRH, BRCAUSERS, REQUESTINSTANCELOGS, STATES, TRANSITIONS, TRIGGERS | — | — | — | — |
| 1060 | Purchase_AztrhRequestInstanceLogss__0005_639256963176541493 | `Reports/Temp/` | az | AZTRH, BRCAUSERS, REQUESTINSTANCELOGS, STATES, TRANSITIONS, TRIGGERS | — | — | — | — |
| 1061 | Purchase_AztrhRequestInstanceLogss__0005_639269027898521396 | `Reports/Temp/` | az | AZTRH, BRCAUSERS, REQUESTINSTANCELOGS, STATES, TRANSITIONS, TRIGGERS | — | — | — | 7 |
| 1062 | Purchase_AztrhRequestInstanceLogss__0005_639273291967217942 | `Reports/Temp/` | az | AZTRH, BRCAUSERS, REQUESTINSTANCELOGS, STATES, TRANSITIONS, TRIGGERS | — | — | — | — |
| 1063 | Purchase_AztrhRequestInstanceLogss__0005_639278184851048180 | `Reports/Temp/` | az | AZTRH, BRCAUSERS, REQUESTINSTANCELOGS, STATES, TRANSITIONS, TRIGGERS | — | — | — | — |
| 1064 | Purchase_AztrhRequestInstanceLogss__0005_639279365628745085 | `Reports/Temp/` | az | AZTRH, BRCAUSERS, REQUESTINSTANCELOGS, STATES, TRANSITIONS, TRIGGERS | — | — | — | 1 |
| 1065 | Purchase_AztrhRequestInstanceLogss__0005_639286997639018203 | `Reports/Temp/` | az | AZTRH, BRCAUSERS, REQUESTINSTANCELOGS, STATES, TRANSITIONS, TRIGGERS | — | — | — | — |
| 1066 | Purchase_AztrhRequestInstanceLogss__0005_639287002039182010 | `Reports/Temp/` | az | AZTRH, BRCAUSERS, REQUESTINSTANCELOGS, STATES, TRANSITIONS, TRIGGERS | — | — | — | — |
| 1067 | Purchase_AztrhRequestInstanceLogss__0008_639255107399613010 | `Reports/Temp/` | az | AZTRH, BRCAUSERS, REQUESTINSTANCELOGS, STATES, TRANSITIONS, TRIGGERS | — | — | — | — |
| 1068 | purchase_baa3_markbaat__0005_639286146099726380 | `Reports/Temp/` | az | APPCODES, AZACCMF, AZITMS, AZPKGDEF, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 1069 | purchase_bayan_b2oamr_eltawreed__0005_639269761423096639 | `Reports/Temp/` | az | AZTRH | — | — | — | — |
| 1070 | purchase_bayan_b2oamr_eltawreed__0005_639286144330675511 | `Reports/Temp/` | az | AZTRH | — | — | — | — |
| 1071 | purchase_bayan_be3mlyat_eltoreed__0005_639269761213896567 | `Reports/Temp/` | az | APPCODES, AZTRH, AZTRTY | — | — | — | — |
| 1072 | purchase_bayan_be3mlyat_eltoreed__0005_639286144140153478 | `Reports/Temp/` | az | APPCODES, AZTRH, AZTRTY | — | — | — | — |
| 1073 | purchase_bayan_beas3aar_elmoaaad_elmorda__0005_639269761519855680 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 1074 | purchase_bayan_beas3aar_elmoaaad_elmorda__0005_639286145892107494 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 1075 | purchase_egra2at_lagnt_elbat_fe_elmon2sa__0005_639272294066382654 | `Reports/Temp/` | az | APPCODES, AZITMS, AZLISTS, AZTRD, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, ITEMS, NUMBERED | FnclTrNo, Loc, TrTy | purchase_subreport_lagnt_elbat_fi_elmon2sah | — |
| 1076 | purchase_egra2at_lagnt_elbat_fe_elmon2sa__0005_639279461170522143 | `Reports/Temp/` | az | APPCODES, AZITMS, AZLISTS, AZTRD, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, ITEMS, NUMBERED | FnclTrNo, Loc, TrTy | purchase_subreport_lagnt_elbat_fi_elmon2sah | — |
| 1077 | purchase_egra2at_lagnt_elbat_fe_elmon2sa__0005_639288910536282502 | `Reports/Temp/` | az | APPCODES, AZITMS, AZLISTS, AZTRD, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, ITEMS, NUMBERED | FnclTrNo, Loc, TrTy | purchase_subreport_lagnt_elbat_fi_elmon2sah | — |
| 1078 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279180982536526 | `Reports/Temp/` | — | — | — | — | — | — |
| 1079 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279184637697572 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1080 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279205030075689 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1081 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279207447886761 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1082 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279226731621750 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | 1 |
| 1083 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279227247399335 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 1084 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279227295280650 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | 1 |
| 1085 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279227410579245 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 1086 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279227486272462 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 1087 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279227641662042 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 1088 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279227720633109 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 1089 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279227986929134 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 1090 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279228094926651 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 1091 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279228287662695 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | 3 |
| 1092 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279228759800830 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | 2 |
| 1093 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279230485006039 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | 2 |
| 1094 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279241725073698 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | 1 |
| 1095 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279242306131607 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | 1 |
| 1096 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279247492137550 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | 2 |
| 1097 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279249480802684 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 1098 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279250100802036 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 1099 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279250385681311 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 1100 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279250556087690 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 1101 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279251592936543 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 1102 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279252001900943 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 1103 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279252366621407 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 1104 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279252601350974 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 1105 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279253134934315 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 1106 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279254078882255 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | 1 |
| 1107 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279254298646253 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | 3 |
| 1108 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279371040867374 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | 2 |
| 1109 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639279388112538518 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 1110 | Purchase_Ekhtar_BL_natiga_El_fania__0005_639287948411701703 | `Reports/Temp/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 1111 | purchase_est3lam_no3_eltakyeem_fel_amalyat__0005_639284552248193182 | `Reports/Temp/` | az | AZTRH, AZTRH_OFFRS_TYPES, AZTRTY, GLSSUMS | — | — | — | — |
| 1112 | purchase_est3lam_no3_eltakyeem_fel_amalyat__0005_639284556047632809 | `Reports/Temp/` | az | AZTRH, AZTRH_OFFRS_TYPES, AZTRTY, GLSSUMS | — | — | — | — |
| 1113 | purchase_est3lam_no3_eltakyeem_fel_amalyat__0005_639284556410867411 | `Reports/Temp/` | az | AZTRH, AZTRH_OFFRS_TYPES, AZTRTY, GLSSUMS | — | — | — | — |
| 1114 | purchase_est3lam_no3_eltakyeem_fel_amalyat__0005_639284556577437163 | `Reports/Temp/` | az | AZTRH, AZTRH_OFFRS_TYPES, AZTRTY, GLSSUMS | — | — | — | — |
| 1115 | purchase_est3lam_no3_eltakyeem_fel_amalyat__0005_639284557263693480 | `Reports/Temp/` | az | AZTRH, AZTRH_OFFRS_TYPES, AZTRTY, GLSSUMS | — | — | — | — |
| 1116 | purchase_est3lam_no3_eltakyeem_fel_amalyat__0005_639284557463504720 | `Reports/Temp/` | az | AZTRH, AZTRH_OFFRS_TYPES, AZTRTY, GLSSUMS | — | — | — | — |
| 1117 | purchase_est3lam_no3_eltakyeem_fel_amalyat__0005_639284558168738509 | `Reports/Temp/` | az | AZTRH, AZTRH_OFFRS_TYPES, AZTRTY, GLSSUMS | — | — | — | 2 |
| 1118 | purchase_est3lam_no3_eltakyeem_fel_amalyat__0005_639284573030201781 | `Reports/Temp/` | az | AZTRH, AZTRH_OFFRS_TYPES, AZTRTY, GLSSUMS | — | — | — | — |
| 1119 | purchase_est3lam_no3_eltakyeem_fel_amalyat__0005_639284573263152402 | `Reports/Temp/` | az | AZTRH, AZTRH_OFFRS_TYPES, AZTRTY, GLSSUMS | — | — | — | — |
| 1120 | purchase_est3lam_no3_eltakyeem_fel_amalyat__0005_639284575370828628 | `Reports/Temp/` | az | AZTRH, AZTRH_OFFRS_TYPES, AZTRTY, GLSSUMS | — | — | — | — |
| 1121 | purchase_est3lam_no3_eltakyeem_fel_amalyat__0005_639284576217968836 | `Reports/Temp/` | az | AZTRH, AZTRH_OFFRS_TYPES, AZTRTY, GLSSUMS | — | — | — | — |
| 1122 | purchase_est3lam_no3_eltakyeem_fel_amalyat__0005_639284579180319229 | `Reports/Temp/` | az | AZTRH, AZTRH_OFFRS_TYPES, AZTRTY, GLSSUMS | — | — | — | 1 |
| 1123 | purchase_est3lam_no3_eltakyeem_fel_amalyat__0005_639284579436078631 | `Reports/Temp/` | az | AZTRH, AZTRH_OFFRS_TYPES, AZTRTY, GLSSUMS | — | — | — | 2 |
| 1124 | purchase_est3lam_no3_eltakyeem_fel_amalyat__0005_639284579943799205 | `Reports/Temp/` | az | AZTRH, AZTRH_OFFRS_TYPES, AZTRTY, GLSSUMS | — | — | — | — |
| 1125 | purchase_est3lam_no3_eltakyeem_fel_amalyat__0005_639284580654425782 | `Reports/Temp/` | az | AZTRH, AZTRH_OFFRS_TYPES, AZTRTY, GLSSUMS | — | — | — | — |
| 1126 | purchase_est3lam_no3_eltakyeem_fel_amalyat__0005_639284580974233308 | `Reports/Temp/` | az | AZTRH, AZTRH_OFFRS_TYPES, AZTRTY, GLSSUMS | — | — | — | — |
| 1127 | purchase_est3lam_no3_eltakyeem_fel_amalyat__0005_639284581093504898 | `Reports/Temp/` | az | AZTRH, AZTRH_OFFRS_TYPES, AZTRTY, GLSSUMS | — | — | — | — |
| 1128 | purchase_est3lam_no3_eltakyeem_fel_amalyat__0005_639284581246546229 | `Reports/Temp/` | az | AZTRH, AZTRH_OFFRS_TYPES, AZTRTY, GLSSUMS | — | — | — | — |
