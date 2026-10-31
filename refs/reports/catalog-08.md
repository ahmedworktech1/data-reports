# كتالوج التقارير — جزء 08 من 09

سجل آلي (مش مستخرج بالـLLM) لكل تقرير Telerik: الاسم، القاعدة، الجداول اللي بيقراها، البارامترات، والتقارير الفرعية.
المصدر: `<SqlDataSource SelectCommand=...>` و`<UriReportSource Uri=...>` جوه ملفات `.trdx`.
لتجديد الملف ده: `node scripts/reports-catalog.mjs`

| # | التقرير (stem) | مسار | القاعدة | جداول | CTE | بارامترات | تقارير فرعية | نسخ مكررة |
|---|---|---|---|---|---|---|---|---|
| 1317 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639248178285778447 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany | — |
| 1318 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639248182127081352 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany | 5 |
| 1319 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639248184585276796 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany | — |
| 1320 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639248184949277131 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany | 2 |
| 1321 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639248186153617119 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany | 1 |
| 1322 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639248190621934686 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany | — |
| 1323 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639248190903938927 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany | 2 |
| 1324 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639248201546676784 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany | 1 |
| 1325 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639248203025645693 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany | 1 |
| 1326 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639248207067163725 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany | 1 |
| 1327 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639248208608297935 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany | — |
| 1328 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639248209340890946 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany | — |
| 1329 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639248216340367574 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany | 3 |
| 1330 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639248227792856151 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, RANKEDDISTINCT, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany | — |
| 1331 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639248244055565288 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, RANKEDDISTINCT, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany, purchase_subreport_bat_fany_2 | — |
| 1332 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639248244629829875 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, RANKEDDISTINCT, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany, purchase_subreport_bat_fany_2 | 2 |
| 1333 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639248245711784730 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, RANKEDDISTINCT, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany, purchase_subreport_bat_fany_2 | 3 |
| 1334 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639279252776336455 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, RANKEDDISTINCT, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany, purchase_subreport_bat_fany_2 | 3 |
| 1335 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639279266968870549 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, RANKEDDISTINCT, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany, purchase_subreport_bat_fany_2 | 2 |
| 1336 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639279321800576028 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, RANKEDDISTINCT, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany, purchase_subreport_bat_fany_2 | 4 |
| 1337 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639279335086518712 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, RANKEDDISTINCT, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany, purchase_subreport_bat_fany_2 | 1 |
| 1338 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639279365337538109 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, RANKEDDISTINCT, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany, purchase_subreport_bat_fany_2 | 1 |
| 1339 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639279373798827413 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, RANKEDDISTINCT, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany, purchase_subreport_bat_fany_2 | — |
| 1340 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639279376752130100 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, RANKEDDISTINCT, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany, purchase_subreport_bat_fany_2 | — |
| 1341 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639279388274237751 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, RANKEDDISTINCT, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany, purchase_subreport_bat_fany_2 | 8 |
| 1342 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639286160919690356 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, RANKEDDISTINCT, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany, purchase_subreport_bat_fany_2 | — |
| 1343 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639286601803654846 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, RANKEDDISTINCT, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany, purchase_subreport_bat_fany_2 | 1 |
| 1344 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639286602294274152 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, RANKEDDISTINCT, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany, purchase_subreport_bat_fany_2 | — |
| 1345 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya__0005_639287934359646239 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, RANKEDDISTINCT, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany, purchase_subreport_bat_fany_2 | — |
| 1346 | purchase_ma7dr_fat7_mazryf_fanya_lagnt__0005_639244866453669717 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | 1 |
| 1347 | purchase_ma7dr_fat7_mazryf_fanya_lagnt__0005_639244866760564118 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | — |
| 1348 | purchase_ma7dr_fat7_mazryf_fanya_lagnt__0005_639244867321247387 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | — |
| 1349 | purchase_ma7dr_fat7_mazryf_fanya_lagnt__0005_639244868937891991 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | 6 |
| 1350 | purchase_ma7dr_fat7_mazryf_fanya_lagnt__0005_639248082574158652 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | — |
| 1351 | purchase_ma7dr_fat7_mazryf_fanya_lagnt__0005_639248082755822568 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | — |
| 1352 | purchase_ma7dr_fat7_mazryf_fanya_lagnt__0005_639248083013932329 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | — |
| 1353 | purchase_ma7dr_fat7_mazryf_fanya_lagnt__0005_639248083185353535 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | 1 |
| 1354 | purchase_ma7dr_fat7_mazryf_fanya_lagnt__0005_639248083344391042 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | — |
| 1355 | purchase_ma7dr_fat7_mazryf_fanya_lagnt__0005_639248087242447154 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | — |
| 1356 | purchase_ma7dr_fat7_mazryf_fanya_lagnt__0005_639248087427230733 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | — |
| 1357 | purchase_ma7dr_fat7_mazryf_fanya_lagnt__0005_639248087745508615 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | — |
| 1358 | purchase_ma7dr_fat7_mazryf_fanya_lagnt__0005_639248088131728396 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | — |
| 1359 | purchase_ma7dr_fat7_mazryf_fanya_lagnt__0005_639248092581338914 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | — |
| 1360 | purchase_ma7dr_fat7_mazryf_fanya_lagnt__0005_639248093425148468 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | — |
| 1361 | purchase_ma7dr_fat7_mazryf_fanya_lagnt__0005_639248093749552070 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | — |
| 1362 | purchase_ma7dr_fat7_mazryf_fanya_lagnt__0005_639248094498154691 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | — |
| 1363 | purchase_ma7dr_fat7_mazryf_fanya_lagnt__0005_639248095101736546 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | — |
| 1364 | purchase_ma7dr_fat7_mazryf_fanya_lagnt__0005_639248095491479242 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | — |
| 1365 | purchase_ma7dr_fat7_mazryf_fanya_lagnt__0005_639248096183974678 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | 1 |
| 1366 | purchase_ma7dr_fat7_mazryf_fanya_lagnt__0005_639278184959266492 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | 1 |
| 1367 | purchase_ma7dr_fat7_mazryf_fanya_lagnt__0005_639287019492022872 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | — |
| 1368 | purchase_ma7dr_fat7_mazryf_fanya_lagnt__0005_639287899726810741 | `Reports/Temp/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | 1 |
| 1369 | purchase_maqbol_fany__0005_639249065909544910 | `Reports/Temp/` | — | — | — | — | — | 4 |
| 1370 | purchase_maqbol_fany__0005_639249131546637704 | `Reports/Temp/` | az | AZTRH, AZTRH_EVAL_CRIT, AZTRH_OFFRS_TYPES, GLSSUMS | — | — | — | — |
| 1371 | purchase_maqbol_fany__0005_639249138756242518 | `Reports/Temp/` | az | AZTRH, AZTRH_EVAL_CRIT, AZTRH_OFFRS_TYPES, GLSSUMS | — | — | — | — |
| 1372 | purchase_maqbol_fany__0005_639249149530680340 | `Reports/Temp/` | az | AZTRH, AZTRH_EVAL_CRIT, AZTRH_OFFRS_TYPES, GLSSUMS | — | — | — | — |
| 1373 | purchase_maqbol_fany__0005_639249160114557432 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1374 | purchase_maqbol_fany__0005_639249160369788920 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1375 | purchase_maqbol_fany__0005_639249160896553088 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1376 | purchase_maqbol_fany__0005_639249161067350238 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1377 | purchase_maqbol_fany__0005_639249161705055758 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1378 | purchase_maqbol_fany__0005_639249161928475923 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1379 | purchase_maqbol_fany__0005_639249162201467223 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1380 | purchase_maqbol_fany__0005_639249162362295077 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | 1 |
| 1381 | purchase_maqbol_fany__0005_639267235963649401 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | 1 |
| 1382 | purchase_maqbol_fany__0005_639279113165796767 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1383 | purchase_maqbol_fany__0005_639279114152974401 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | 3 |
| 1384 | purchase_maqbol_fany__0005_639279118464477162 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1385 | purchase_maqbol_fany__0005_639279118619326506 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | 1 |
| 1386 | purchase_maqbol_fany__0005_639279118920668546 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1387 | purchase_maqbol_fany__0005_639279119225893655 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1388 | purchase_maqbol_fany__0005_639279119361926244 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1389 | purchase_maqbol_fany__0005_639279119648218482 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1390 | purchase_maqbol_fany__0005_639279119797743407 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1391 | purchase_maqbol_fany__0005_639279121281306025 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1392 | purchase_maqbol_fany__0005_639279121365179725 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1393 | purchase_maqbol_fany__0005_639279121496398938 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | 1 |
| 1394 | purchase_maqbol_fany__0005_639279122185320048 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1395 | purchase_maqbol_fany__0005_639279122350917690 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1396 | purchase_maqbol_fany__0005_639279122588746809 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1397 | purchase_maqbol_fany__0005_639279123677991767 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1398 | purchase_maqbol_fany__0005_639279123966129713 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | 1 |
| 1399 | purchase_maqbol_fany__0005_639279124353995096 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1400 | purchase_maqbol_fany__0005_639279124493009283 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1401 | purchase_maqbol_fany__0005_639279124602173289 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | 1 |
| 1402 | purchase_maqbol_fany__0005_639279124988157060 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1403 | purchase_maqbol_fany__0005_639279125279114808 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | 14 |
| 1404 | purchase_maqbol_fany__0005_639279165593109783 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | 5 |
| 1405 | purchase_maqbol_fany__0005_639279170209615207 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1406 | purchase_maqbol_fany__0005_639279203521220876 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1407 | purchase_maqbol_fany__0005_639279203737816531 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | 1 |
| 1408 | purchase_maqbol_fany__0005_639279205168510872 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1409 | purchase_maqbol_fany__0005_639279241946577468 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | 3 |
| 1410 | purchase_maqbol_fany__0005_639279253334898024 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1411 | purchase_maqbol_fany__0005_639279310827070620 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1412 | purchase_maqbol_fany__0005_639279364625275100 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | 1 |
| 1413 | purchase_maqbol_fany__0005_639279388206093409 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1414 | purchase_marfood_fany__0005_639249065804705226 | `Reports/Temp/` | az | AZACCMF, AZTRH | — | — | — | — |
| 1415 | purchase_marfood_fany__0005_639249104700504004 | `Reports/Temp/` | az | AZACCMF, AZTRH | — | — | — | — |
| 1416 | purchase_marfood_fany__0005_639249105155577089 | `Reports/Temp/` | az | AZACCMF, AZTRH | — | — | — | — |
| 1417 | purchase_marfood_fany__0005_639249105567704718 | `Reports/Temp/` | az | AZACCMF, AZTRH | — | — | — | — |
| 1418 | purchase_marfood_fany__0005_639249106500831698 | `Reports/Temp/` | az | AZACCMF, AZTRH | — | — | — | — |
| 1419 | purchase_marfood_fany__0005_639249106704309274 | `Reports/Temp/` | az | AZACCMF, AZTRH | — | — | — | — |
| 1420 | purchase_marfood_fany__0005_639249107095473856 | `Reports/Temp/` | az | AZACCMF, AZTRH | — | — | — | 2 |
| 1421 | purchase_marfood_fany__0005_639249117545780941 | `Reports/Temp/` | az | AZTRH, AZTRH_EVAL_CRIT, AZTRH_OFFRS_TYPES, AZTRTY, GLSSUMS | — | — | — | — |
| 1422 | purchase_marfood_fany__0005_639249117840706935 | `Reports/Temp/` | az | AZTRH, AZTRH_EVAL_CRIT, AZTRH_OFFRS_TYPES, AZTRTY, GLSSUMS | — | — | — | — |
| 1423 | purchase_marfood_fany__0005_639249117923289554 | `Reports/Temp/` | az | AZTRH, AZTRH_EVAL_CRIT, AZTRH_OFFRS_TYPES, AZTRTY, GLSSUMS | — | — | — | — |
| 1424 | purchase_marfood_fany__0005_639249120723346482 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1425 | purchase_marfood_fany__0005_639249121022037147 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1426 | purchase_marfood_fany__0005_639249121705581341 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1427 | purchase_marfood_fany__0005_639249124837012924 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1428 | purchase_marfood_fany__0005_639249125436588769 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1429 | purchase_marfood_fany__0005_639249125811768289 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1430 | purchase_marfood_fany__0005_639249127942334270 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1431 | purchase_marfood_fany__0005_639249128071809427 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1432 | purchase_marfood_fany__0005_639249128243988415 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1433 | purchase_marfood_fany__0005_639249130694289434 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1434 | purchase_marfood_fany__0005_639249130755129327 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | 1 |
| 1435 | purchase_marfood_fany__0005_639249131193044130 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1436 | purchase_marfood_fany__0005_639249139626493681 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1437 | purchase_marfood_fany__0005_639249139876702498 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1438 | purchase_marfood_fany__0005_639249141623449194 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1439 | purchase_marfood_fany__0005_639249144426630330 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1440 | purchase_marfood_fany__0005_639249144573462436 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1441 | purchase_marfood_fany__0005_639249144679665181 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | 1 |
| 1442 | purchase_marfood_fany__0005_639249145527913507 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1443 | purchase_marfood_fany__0005_639249145677919633 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1444 | purchase_marfood_fany__0005_639249145768458358 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1445 | purchase_marfood_fany__0005_639249149452655898 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | 6 |
| 1446 | purchase_marfood_fany__0005_639249149573003480 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | 3 |
| 1447 | purchase_marfood_fany__0005_639249149718493121 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | 4 |
| 1448 | purchase_marfood_fany__0005_639262960124633462 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1449 | purchase_marfood_fany__0005_639279117403571220 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | 1 |
| 1450 | purchase_marfood_fany__0005_639279170294763776 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1451 | purchase_marfood_fany__0005_639279183758415672 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1452 | purchase_marfood_fany__0005_639279194621203302 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1453 | purchase_marfood_fany__0005_639279195401275275 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1454 | purchase_marfood_fany__0005_639279198616359415 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1455 | purchase_marfood_fany__0005_639279203471292287 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1456 | purchase_marfood_fany__0005_639279203816620790 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | 2 |
| 1457 | purchase_marfood_fany__0005_639279204220564642 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | 3 |
| 1458 | purchase_marfood_fany__0005_639279204323637733 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | 2 |
| 1459 | purchase_marfood_fany__0005_639279205129405988 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | 2 |
| 1460 | purchase_marfood_fany__0005_639279253277290402 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1461 | purchase_marfood_fany__0005_639279267386907472 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | 2 |
| 1462 | purchase_marfood_fany__0005_639286920288117454 | `Reports/Temp/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 1463 | purchase_mozkrt_tadbeer_solfaa__0005_639277765165450760 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1464 | purchase_mozkrt_tadbeer_solfaa__0005_639277784959467268 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1465 | purchase_mozkrt_tadbeer_solfaa__0005_639277786303541542 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1466 | purchase_mozkrt_tadbeer_solfaa__0005_639277786546009205 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1467 | purchase_mozkrt_tadbeer_solfaa__0005_639277786680752741 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | 1 |
| 1468 | purchase_mozkrt_tadbeer_solfaa__0005_639277790796408616 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1469 | purchase_mozkrt_tadbeer_solfaa__0005_639284501652104708 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | 2 |
| 1470 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639256971519428186 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1471 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260160838183453 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1472 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260182144401388 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | 2 |
| 1473 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260183484408009 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | 1 |
| 1474 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260184769277018 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | 1 |
| 1475 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260184829279300 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1476 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260185022356248 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | 1 |
| 1477 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260185699319688 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | 1 |
| 1478 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260185758576179 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1479 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260196360957718 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1480 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260196465895380 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1481 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260202061568996 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1482 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260203512459268 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1483 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260203605995225 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1484 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260203671590812 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1485 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260203841291208 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1486 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260203961782422 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1487 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260204089064673 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1488 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260204144741509 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1489 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260204301598953 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1490 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260205094193989 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | 2 |
| 1491 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260205622970446 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1492 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260205674703667 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1493 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260206378045008 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | 1 |
| 1494 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260208382950817 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1495 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260208496943451 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1496 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260208707164576 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | 4 |
| 1497 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639260243382677696 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | 2 |
| 1498 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639272449531352987 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1499 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639272464449429371 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | 1 |
| 1500 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639272466315272112 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | 1 |
| 1501 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639272468436419159 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1502 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639272468746941591 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1503 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639272470019363360 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 1504 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir__0005_639272470164706180 | `Reports/Temp/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
