# كتالوج التقارير — جزء 04 من 09

سجل آلي (مش مستخرج بالـLLM) لكل تقرير Telerik: الاسم، القاعدة، الجداول اللي بيقراها، البارامترات، والتقارير الفرعية.
المصدر: `<SqlDataSource SelectCommand=...>` و`<UriReportSource Uri=...>` جوه ملفات `.trdx`.
لتجديد الملف ده: `node scripts/reports-catalog.mjs`

| # | التقرير (stem) | مسار | القاعدة | جداول | CTE | بارامترات | تقارير فرعية | نسخ مكررة |
|---|---|---|---|---|---|---|---|---|
| 565 | ReportGljrnlSt9_En | `Reports/` | — | — | — | ComId, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd, FromSumCd, FromTrNo … | — | 2 |
| 566 | ReportGLMF_Ar | `Reports/` | — | — | — | login | — | 2 |
| 567 | ReportGlmfLst_Ar | `Reports/` | — | — | — | AccLvl, AccNo, AccNos, AccSt, ChangeFont, ComId, CompanyAddress, CompanyName … | — | — |
| 568 | ReportGlmfLst_En | `Reports/` | — | — | — | AccNo, AccNos, AccSt, ComId, FromAccNo, Manacc, SecLvl, ToAccNo … | — | 2 |
| 569 | ReportGlOldAcc_Ar | `Reports/` | — | — | — | Bal, ChkAgeSrc, ChkDueDate, ChkMnth, ComId, CompDate, CompanyAddress, CompanyName … | — | 2 |
| 570 | ReportGlSlsBuyEng_Ar | `Reports/` | gl | GLCST, GLJRNLD | — | CompanyAddress, CompanyName, FromDate, ReportTitle, ShowTotal, ToDate, TotalCstCd, logo | — | 2 |
| 571 | ReportGlSlsBuyEng_Ar_ALLNew | `Reports/` | gl | GLCST, GLJRNLD | — | CompanyAddress, CompanyName, FromDate, ReportTitle, ShowTotal, ToDate, TotalCstCd, logo | — | 2 |
| 572 | ReportGlUnBalCsh_Ar | `Reports/` | — | — | — | AccNo, ComId, CompanyAddress, CompanyName, CshCd, CshTy, CstCd, CstCds … | — | — |
| 573 | ReportGlunbaljrn | `Reports/` | — | — | — | ChkGRP, ComId, CompanyAddress, CompanyName, FromDate, FromTrNo, JrnCd, JrnCds … | — | — |
| 574 | ReportGlunbaljrnB | `Reports/` | — | — | — | ChkGRP, ComId, CompanyAddress, CompanyName, FromDate, FromTrNo, JrnCd, JrnCds … | — | — |
| 575 | ReportImprstd1 | `Reports/` | — | — | — | Chk, CompanyAddress, CompanyName, EmpNo, FromItm, InternalReportTemplates, Item, Logo … | — | 3 |
| 576 | ReportItemBalance | `Reports/` | — | — | — | Aradiobuttonlist3, Atextbox1, BalConds, BtnMitm, BtnMitms, CSrt, ChkD2qty, ChkSum … | — | 1 |
| 577 | ReportItmanlsysdet | `Reports/` | — | — | — | ChkedItm, CompanyAddress, CompanyName, FItmCd, InternalReportTemplates, Logo, MitmCd, Mloc … | — | 1 |
| 578 | ReportItmanlsysdetQty | `Reports/` | — | — | — | ChkedItm, CompanyAddress, CompanyName, FItmCd, InternalReportTemplates, Logo, MitmCd, Mloc … | — | 1 |
| 579 | ReportItmanlsysdetQtyExchngVal | `Reports/` | — | — | — | ChkedItm, CompanyAddress, CompanyName, FItmCd, InternalReportTemplates, Logo, MitmCd, Mloc … | — | 1 |
| 580 | ReportItmanlsysdetVal | `Reports/` | — | — | — | ChkedItm, CompanyAddress, CompanyName, FItmCd, InternalReportTemplates, Logo, MitmCd, Mloc … | — | 1 |
| 581 | ReportItmanlsysdetValQty | `Reports/` | — | — | — | ChkedItm, CompanyAddress, CompanyName, FItmCd, InternalReportTemplates, Logo, MitmCd, Mloc … | — | 1 |
| 582 | ReportItmCard | `Reports/` | — | — | — | AccNm, Actv, BtnMitm, BtnMitms, BtnPloc, BtnPlocs, BtnPtrTy, BtnPtrTys … | — | — |
| 583 | ReportItmCard0 | `Reports/` | — | — | — | AccNm, Actv, BtnMitm, BtnMitms, BtnPloc, BtnPlocs, BtnPtrTy, BtnPtrTys … | — | 1 |
| 584 | ReportItmCard1 | `Reports/` | — | — | — | AccNm, Actv, BtnMitm, BtnMitms, BtnPloc, BtnPlocs, BtnPtrTy, BtnPtrTys … | — | 1 |
| 585 | ReportItmCard10 | `Reports/` | — | — | — | AccNm, Actv, BtnMitm, BtnMitms, BtnPloc, BtnPlocs, BtnPtrTy, BtnPtrTys … | — | 1 |
| 586 | ReportItmCard11111 | `Reports/` | — | — | — | CompanyAddress, CompanyName, Logo, ReportFileName, ReportTitle, Url, login | — | 1 |
| 587 | ReportItmCard1234 | `Reports/` | — | — | — | AccNm, Actv, BtnMitm, BtnMitms, BtnPloc, BtnPlocs, BtnPtrTy, BtnPtrTys … | — | 1 |
| 588 | ReportItmCard2 | `Reports/` | — | — | — | AccNm, Actv, BtnMitm, BtnMitms, BtnPloc, BtnPlocs, BtnPtrTy, BtnPtrTys … | — | 1 |
| 589 | ReportItmCard3 | `Reports/` | — | — | — | AccNm, Actv, BtnMitm, BtnMitms, BtnPloc, BtnPlocs, BtnPtrTy, BtnPtrTys … | — | 1 |
| 590 | ReportItmCard7 | `Reports/` | — | — | — | AccNm, Actv, BtnMitm, BtnMitms, BtnPloc, BtnPlocs, BtnPtrTy, BtnPtrTys … | — | 1 |
| 591 | ReportItmCard8 | `Reports/` | — | — | — | AccNm, Actv, BtnMitm, BtnMitms, BtnPloc, BtnPlocs, BtnPtrTy, BtnPtrTys … | — | 1 |
| 592 | ReportItmCard9 | `Reports/` | — | — | — | AccNm, Actv, BtnMitm, BtnMitms, BtnPloc, BtnPlocs, BtnPtrTy, BtnPtrTys … | — | 1 |
| 593 | ReportItmcycrptscr | `Reports/` | — | — | — | Actv, CompanyAddress, CompanyName, FrmDt, FromItm, ItmStr, ItmStrs, Logo … | — | 1 |
| 594 | ReportItmlocR_Ar | `Reports/` | — | — | — | Chk, Chk1, Chk2, Chk3, Chk4, CompanyAddress, CompanyName, FromFyr … | — | 1 |
| 595 | ReportItmMaxMin | `Reports/` | — | — | — | Actv, CompanyAddress, CompanyName, FrmName, FromItm, Limt, Logo, Prnt … | — | 1 |
| 596 | ReportItmNlvl | `Reports/` | — | — | — | ChtActv, CompanyAddress, CompanyName, Dmys, FromItm, InternalReportTemplates, ItmMain, Logo … | — | 1 |
| 597 | ReportItmstop_Index1 | `Reports/` | — | — | — | Actv, ChkOut, CompanyAddress, CompanyName, FItm, FormCst, FromCnt, FromDate … | — | — |
| 598 | ReportItmstop_Index1 - Copy | `Reports/` | — | — | — | Actv, ChkOut, CompanyAddress, CompanyName, FItm, FormCst, FromCnt, FromDate … | — | 1 |
| 599 | ReportItmTotLocConv | `Reports/` | — | — | — | Cmitm, Cmitms, CompanyAddress, CompanyName, Expdt, FDt, FLoc, Itms … | — | 1 |
| 600 | ReportLoans_Ar | `Reports/` | — | — | — | Chk1, CompanyAddress, CompanyName, EmpNo, EmpNos, FGha, FromEmpNo, Gha … | — | 1 |
| 601 | ReportPayment_Ar | `Reports/` | — | — | — | BnkId, ChkNo, CompanyAddress, CompanyName, CshCd, CshTy, CurCd, FromDate … | — | 2 |
| 602 | ReportPaymentRequest_Ar | `Reports/` | — | — | — | BnkId, ChkNo, CompanyAddress, CompanyName, CshCd, CshTy, CurCd, FromDate … | — | 2 |
| 603 | ReportPaymentRequestTemplate_Ar | `Reports/` | — | — | — | CompanyAddress, CompanyName, FromDate, Logo, SpNo, SpTy, SpdId, ToDate … | — | 2 |
| 604 | ReportPaymentTemplate_Ar | `Reports/` | — | — | — | CompanyAddress, CompanyName, Logo, TrNo, TrTyDistination, Url, login | — | 2 |
| 605 | ReportPaymentTemplateOrder_Ar | `Reports/` | — | — | — | CompanyAddress, CompanyName, Logo, TrNo, TrTyDistination, Url, login | — | 2 |
| 606 | ReportPosDetail | `Reports/` | — | — | — | CompanyAddress, CompanyName, CshCd, Fdt, InternalReportTemplates, Loc, Logo, PayTyps … | — | 1 |
| 607 | ReportPosTotal | `Reports/` | — | — | — | CompanyAddress, CompanyName, CshCd, Fdt, InternalReportTemplates, Loc, Logo, PayTyps … | — | 1 |
| 608 | ReportPrintSuspendedChecks_Ar | `Reports/` | — | — | — | CompanyAddress, CompanyName, FromDate, Logo, ToDate, Url, login | — | 2 |
| 609 | ReportPyInOutAbsence | `Reports/` | — | — | — | AbsenceTr, AdvacSys, AutoAdjust, CompanyAddress, CompanyName, EmpSrch, EmpSrchs, FromDate … | — | — |
| 610 | ReportPyInOutAll | `Reports/` | — | — | — | AbsenceTr, AdvacSys, AutoAdjust, CompanyAddress, CompanyName, EmpSrch, EmpSrchs, FromDate … | — | — |
| 611 | ReportPyInOutAtndAndDprt | `Reports/` | — | — | — | AbsenceTr, AdvacSys, AutoAdjust, CompanyAddress, CompanyName, EmpSrch, EmpSrchs, FromDate … | — | — |
| 612 | ReportPyInOutDelay | `Reports/` | — | — | — | AbsenceTr, AdvacSys, AutoAdjust, CompanyAddress, CompanyName, EmpSrch, EmpSrchs, FromDate … | — | — |
| 613 | ReportPyInOutOver | `Reports/` | — | — | — | AbsenceTr, AdvacSys, AutoAdjust, CompanyAddress, CompanyName, EmpSrch, EmpSrchs, FromDate … | — | — |
| 614 | ReportQty1 | `Reports/` | — | — | — | Aradiobuttonlist3, Atextbox1, BalConds, BtnMitm, BtnMitms, CSrt, ChkD2qty, ChkSum … | — | 1 |
| 615 | ReportQtyOnly | `Reports/` | — | — | — | Aradiobuttonlist3, Atextbox1, BalConds, BtnMitm, BtnMitms, CSrt, ChkD2qty, ChkSum … | — | — |
| 616 | ReportRecipientDetails_Ar | `Reports/` | — | — | — | CompanyAddress, CompanyName, Delivered, GranteeId, Logo, MainPartyId, ProjectId, RecipientInsertingStatus … | — | 2 |
| 617 | ReportRecordedDetails_Ar | `Reports/` | — | — | — | CompanyAddress, CompanyName, CountryId, FromDate, GranteeId, GranteeTypeId, Logo, MainParty … | — | 2 |
| 618 | ReportReplacements_Ar | `Reports/` | — | — | — | CompanyAddress, CompanyName, FromDate, GiverId, Logo, Parameter1, ToDate, Url … | — | 2 |
| 619 | ReportReps_Ar | `Reports/` | — | — | — | BrokerType, CompanyAddress, CompanyName, Logo, Office, OfficeName, Type, Url … | — | 2 |
| 620 | ReportRepsls | `Reports/` | — | — | — | Acombobox1, CompanyAddress, CompanyName, FromDate, FromItm, FromRep, InternalReportTemplates, ItmStr … | — | 1 |
| 621 | ReportRfAnlysis | `Reports/` | — | — | — | CarLin, Chkcmpnd, CompanyAddress, CompanyName, Fcrep, Fcus, Fitm, Fmitm … | — | 1 |
| 622 | ReportRfAnlysisPurchases | `Reports/` | — | — | — | CarLin, Chkcmpnd, CompanyAddress, CompanyName, Fcrep, Fcus, Fitm, Fmitm … | — | 1 |
| 623 | ReportRfAnlysisReturns | `Reports/` | — | — | — | CarLin, Chkcmpnd, CompanyAddress, CompanyName, Fcrep, Fcus, Fitm, Fmitm … | — | 1 |
| 624 | ReportRfAnlysisSales | `Reports/` | — | — | — | CarLin, Chkcmpnd, CompanyAddress, CompanyName, Fcrep, Fcus, Fitm, Fmitm … | — | — |
| 625 | ReportRfItmcstanlysis | `Reports/` | — | — | — | Addrmrk, CompanyAddress, CompanyName, Cst, Csts, FDt, FItm, InternalReportTemplates … | — | 1 |
| 626 | ReportRfPurchasesAndReturn2 | `Reports/` | — | — | — | CarLin, Chkcmpnd, CompanyAddress, CompanyName, Fcrep, Fcus, Fitm, Fmitm … | — | 1 |
| 627 | ReportRfSalesAndReturns | `Reports/` | — | — | — | CarLin, Chkcmpnd, CompanyAddress, CompanyName, Fcrep, Fcus, Fitm, Fmitm … | — | — |
| 628 | ReportSimpleReceipt_Ar | `Reports/` | — | — | — | CompanyAddress, CompanyName, Logo, Url, login, trNo, trTy | — | 2 |
| 629 | ReportStoppedProjectInstance_Ar | `Reports/` | — | — | — | BeginDate, CompanyAddress, CompanyName, CountryId, CurrentState, EndDate, GiverId, Logo … | — | 2 |
| 630 | ReportSummaryPayment_Ar | `Reports/` | — | — | — | CompanyAddress, CompanyName, Logo, Url, login | — | 2 |
| 631 | ReportTotalLocs1 | `Reports/` | — | — | — | Aradiobuttonlist3, Atextbox1, BalConds, BtnMitm, BtnMitms, CSrt, ChkD2qty, ChkSum … | — | — |
| 632 | ReportTotalLocs2 | `Reports/` | — | — | — | Aradiobuttonlist3, Atextbox1, BalConds, BtnMitm, BtnMitms, CSrt, ChkD2qty, ChkSum … | — | — |
| 633 | ReportTransfere_Ar | `Reports/` | — | — | — | CompanyAddress, CompanyName, Logo, TransfereId, Url, login | — | 2 |
| 634 | ReportTrcmpr_Index1 | `Reports/` | — | — | — | Acheckbox1, Addrmrk, C11, C12, C21, C22, C31, C32 … | — | — |
| 635 | ReportUnitCost | `Reports/` | — | — | — | Aradiobuttonlist3, Atextbox1, BalConds, BtnMitm, BtnMitms, CSrt, ChkD2qty, ChkSum … | — | 1 |
| 636 | RF_ALLANA12_AR | `Reports/` | gl | RPTCOLS | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ToDate | — | 5 |
| 637 | RfFaAdd_With_Resp | `Reports/` | gl | APPCODES, FADPRC_Q, GLCST, GLLISTS | — | — | — | 2 |
| 638 | RfFaAdd_With_Resp_m | `Reports/` | gl | APPCODES, FADPRC, GLCST, GLLISTS | — | — | — | 2 |
| 639 | RfFaAdd_WithOut_Resp | `Reports/` | gl | APPCODES, FADPRC_Q, GLCST, GLLISTS | — | — | — | 2 |
| 640 | RfFaAdd_WithOut_Resp_m | `Reports/` | gl | APPCODES, FADPRC, GLCST, GLLISTS | — | — | — | 2 |
| 641 | RfFaRpnExtrasOnly_Ar | `Reports/` | — | — | — | ChkFaCd1, ChkFaCd2, ChkFaCd3, ChkFaCd4, ChkMcstCd, ChkOCst, ChkcstCd, ColGrop … | — | — |
| 642 | RfFaRpnQantitiesShort_Ar | `Reports/` | — | — | — | ChkFaCd1, ChkFaCd2, ChkFaCd3, ChkFaCd4, ChkMcstCd, ChkOCst, ChkcstCd, ColGrop … | — | — |
| 643 | RfFaRpnQntyCstCoulmns | `Reports/` | — | — | — | ChkFaCd1, ChkFaCd2, ChkFaCd3, ChkFaCd4, ChkcstCd, ComId, CompanyAddress, CompanyName … | — | 2 |
| 644 | RfRptGen_analysis | `Reports/` | — | — | — | CHKNOCOL, CHKNOZERO, ChKCalc, ChKHst, ComId, CompanyAddress, CompanyName, CstCd … | — | 1 |
| 645 | RfRptGen_AnalysisMenu | `Reports/` | — | — | — | CHKNOCOL, CHKNOZERO, ChKCalc, ChKHst, ComId, CompanyAddress, CompanyName, CstCd … | — | 2 |
| 646 | RfRptGen_BalanceSheet | `Reports/` | — | — | — | CHKNOCOL, CHKNOZERO, ChKCalc, ChKHst, ComId, CompanyAddress, CompanyName, CstCd … | — | 1 |
| 647 | RfRptGen_BuyUnit | `Reports/` | gl | AZGLRPT_OUT_TEMP | LRPT, RRPT | CHKNOCOL, CHKNOZERO, ChKCalc, ChKHst, ComId, CompanyAddress, CompanyName, CstCd … | — | 2 |
| 648 | RfRptGen_FinancialCenter | `Reports/` | — | — | — | CHKNOCOL, CHKNOZERO, ChKCalc, ChKHst, ComId, CompanyAddress, CompanyName, CstCd … | — | 2 |
| 649 | RfRptGen_FinancialCenter_sandoaa | `Reports/` | — | — | — | CHKNOCOL, CHKNOZERO, ChKCalc, ChKHst, ComId, CompanyAddress, CompanyName, CstCd … | — | 2 |
| 650 | RfRptGen_FinancialCenter1 | `Reports/` | — | — | — | CHKNOCOL, CHKNOZERO, ChKCalc, ChKHst, ComId, CompanyAddress, CompanyName, CstCd … | — | 2 |
| 651 | RfRptGen_IncomeList | `Reports/` | — | — | — | CHKNOCOL, CHKNOZERO, ChKCalc, ChKHst, ComId, CompanyAddress, CompanyName, CstCd … | — | 2 |
| 652 | RfRptGen_IncomeList_sandoaa | `Reports/` | — | — | — | CHKNOCOL, CHKNOZERO, ChKCalc, ChKHst, ComId, CompanyAddress, CompanyName, CstCd … | — | 2 |
| 653 | RfRptGen_IncomeList1 | `Reports/` | — | — | — | CHKNOCOL, CHKNOZERO, ChKCalc, ChKHst, ComId, CompanyAddress, CompanyName, CstCd … | — | 2 |
| 654 | RfRptGen_IncomeList1_sandoaa | `Reports/` | — | — | — | CHKNOCOL, CHKNOZERO, ChKCalc, ChKHst, ComId, CompanyAddress, CompanyName, CstCd … | — | 2 |
| 655 | RfRptGen_IncomeList2 | `Reports/` | — | — | — | CHKNOCOL, CHKNOZERO, ChKCalc, ChKHst, ComId, CompanyAddress, CompanyName, CstCd … | — | 2 |
| 656 | RfRptGen_IncomeList2_sandoaa | `Reports/` | — | — | — | CHKNOCOL, CHKNOZERO, ChKCalc, ChKHst, ComId, CompanyAddress, CompanyName, CstCd … | — | 2 |
| 657 | RfRptGen_Production | `Reports/` | — | — | — | CHKNOCOL, CHKNOZERO, ChKCalc, ChKHst, ComId, CompanyAddress, CompanyName, CstCd … | — | 2 |
| 658 | RfRptGen_Production  | `Reports/` | — | — | — | CHKNOCOL, CHKNOZERO, ChKCalc, ChKHst, ComId, CompanyAddress, CompanyName, CstCd … | — | 1 |
| 659 | RfRptGen_ProfitAndLoss | `Reports/` | gl | AZGLRPT_OUT_TEMP | LRPT, RRPT | CHKNOCOL, CHKNOZERO, ChKCalc, ChKHst, ComId, CompanyAddress, CompanyName, CstCd … | — | 2 |
| 660 | RfRptGen_TradingAccount | `Reports/` | gl | AZGLRPT_OUT_TEMP | LRPT, RRPT | CHKNOCOL, CHKNOZERO, ChKCalc, ChKHst, ComId, CompanyAddress, CompanyName, CstCd … | — | 2 |
| 661 | RfRptGen_TradingAccount1 | `Reports/` | gl | AZGLRPT_OUT_TEMP | LRPT, RRPT | CHKNOCOL, CHKNOZERO, ChKCalc, ChKHst, ComId, CompanyAddress, CompanyName, CstCd … | — | 2 |
| 662 | Rpt0GljrnlNSummary | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, TrNo, Url, login | — | — |
| 663 | Rpt0GljrnlNSummaryGrouped | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, SelectedIds, TrNo, Url, login | — | 2 |
| 664 | Rpt0GljrnlSummary | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, TrNo, Url, login | — | — |
| 665 | Rpt0GljrnlSummaryGrouped | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, SelectedIds, TrNo, Url, login | — | 2 |
| 666 | Rpt1GljrnlDetailed | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, TrNo, Url, login | — | — |
| 667 | Rpt1GljrnlDetailedGrouped | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, SelectedIds, TrNo, Url, login | — | 2 |
| 668 | Rpt1GljrnlNDetailed | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, TrNo, Url, login | — | — |
| 669 | Rpt1GljrnlNDetailedGrouped | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, SelectedIds, TrNo, Url, login | — | 2 |
| 670 | Rpt3GljrnlAutomatic | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, TrNo, Url, login | — | — |
| 671 | Rpt3GljrnlAutomaticGrouped | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, SelectedIds, TrNo, Url, login | — | 2 |
| 672 | Rpt3GljrnlNAutomatic | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, TrNo, Url, login | — | — |
| 673 | Rpt3GljrnlNAutomaticGrouped | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, SelectedIds, TrNo, Url, login | — | 2 |
| 674 | Rpt3GljrnlNSpecialModel | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, TrNo, Url, login | — | — |
| 675 | Rpt3GljrnlNSpecialModelGrouped | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, SelectedIds, TrNo, Url, login | — | 2 |
| 676 | Rpt3GljrnlSpecialModel | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, TrNo, Url, login | — | — |
| 677 | Rpt3GljrnlSpecialModelGrouped | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, SelectedIds, TrNo, Url, login | — | 2 |
| 678 | Rpt4GljrnlCentralRecord | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, TrNo, Url, login | — | — |
| 679 | Rpt4GljrnlCentralRecordGrouped | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, SelectedIds, TrNo, Url, login | — | 2 |
| 680 | Rpt4GljrnlNCentralRecord | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, TrNo, Url, login | — | — |
| 681 | Rpt4GljrnlNCentralRecordGrouped | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, SelectedIds, TrNo, Url, login | — | 2 |
| 682 | Rpt5GljrnlNPay | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, TrNo, Url, login | — | — |
| 683 | Rpt5GljrnlNPayGrouped | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, LnTy, Logo, ReportTitle, SelectedIds, Sgrp … | — | 2 |
| 684 | Rpt5GljrnlPay | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, LnTy, ReportTitle, Sgrp, TrNo, Url … | — | — |
| 685 | Rpt5GljrnlPayGrouped | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, LnTy, Logo, ReportTitle, SelectedIds, Sgrp … | — | 2 |
| 686 | Rpt6GljrnlNTotalAccounts | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, TrNo, Url, login | — | — |
| 687 | Rpt6GljrnlNTotalAccountsGrouped | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, SelectedIds, TrNo, Url, login | — | 2 |
| 688 | Rpt6GljrnlTotalAccounts | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, TrNo, Url, login | — | — |
| 689 | Rpt6GljrnlTotalAccountsGrouped | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, Logo, SelectedIds, TrNo, Url, login | — | 2 |
| 690 | Rpt7GljrnlBilateral | `Reports/` | — | — | — | CompanyAddress, CompanyName, Hdscr, JrnCd, TrDt, TrNo, Url, login | — | — |
| 691 | Rpt7GljrnlBilateralGrouped | `Reports/` | — | — | — | CompanyAddress, CompanyName, Hdscr, JrnCd, Logo, SelectedIds, TrDt, TrNo … | — | 2 |
| 692 | Rpt7GljrnlNBilateral | `Reports/` | — | — | — | CompanyAddress, CompanyName, Hdscr, JrnCd, TrDt, TrNo, Url, login | — | — |
| 693 | Rpt7GljrnlNBilateralGrouped | `Reports/` | — | — | — | CompanyAddress, CompanyName, Hdscr, JrnCd, Logo, SelectedIds, TrDt, TrNo … | — | 2 |
| 694 | Rpt8GljrnlMoreDetails | `Reports/` | — | — | — | CompanyAddress, CompanyName, DefaultComId, JrnCd, TrNo, Url, login | — | — |
| 695 | Rpt8GljrnlMoreDetailsGrouped | `Reports/` | — | — | — | CompanyAddress, CompanyName, DefaultComId, JrnCd, Logo, SelectedIds, TrNo, Url … | — | 2 |
| 696 | Rpt8GljrnlNMoreDetails | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, TrNo, Url, login | — | — |
| 697 | Rpt8GljrnlNMoreDetailsGrouped | `Reports/` | — | — | — | CompanyAddress, CompanyName, DefaultComId, JrnCd, Logo, SelectedIds, TrNo, Url … | — | 2 |
| 698 | SAIL - SOE -assp | `Reports/` | — | GLCST, GLJRNLD, GLJRNLH, GLLCMF, GLMF | — | FromDate, ToDate | — | 4 |
| 699 | salaries_stat_one_month | `Reports/` | gl | APPCODES, GLJRNLD, GLSUMS | — | FromDate, ToDate | — | 1 |
| 700 | salaries137 | `Reports/` | gl | APPCODES, GLJRNLD, GLSUMS | — | FromDate, ToDate | — | 1 |
| 701 | School | `Reports/` | — | APPCODES, AQRENT_H, TENANTMF, UNTMF | — | TrNo, Url, login | — | — |
| 702 | SecondComplaintStatusreport | `Reports/` | arch | COMPLAINTS | — | — | — | 1 |
| 703 | sector_bal | `Reports/` | gl | GLJRNLD, GLMF | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 704 | sector_bal_cr | `Reports/` | gl | GLJRNLD, GLMF | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 705 | sector_bal_db | `Reports/` | gl | GLJRNLD, GLMF | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 706 | sector_bal_net | `Reports/` | gl | GLJRNLD, GLMF | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 707 | sector_income | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 708 | Shop | `Reports/` | — | APPCODES, AQRENT_H, TENANTMF, UNTMF | — | TrNo, Url, login | — | — |
| 709 | south_asyout | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 710 | south_mnia | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 711 | SqlReport | `Reports/` | — | — | — | — | — | 2 |
| 712 | SqlReportFaRpn_111 | `Reports/` | gl | APPCODES, FADPRC_Q, GLCST | — | — | — | 2 |
| 713 | SqlReportFaRpn_111_m | `Reports/` | gl | APPCODES, FADPRC, GLCST | — | — | — | 2 |
| 714 | SqlReportFaRpn_112 | `Reports/` | gl | APPCODES, FADPRC_Q, GLCST | — | — | — | 2 |
| 715 | SqlReportFaRpn_112_m | `Reports/` | gl | APPCODES, FADPRC, GLCST | — | — | — | 2 |
| 716 | SqlReportFaRpn_113_without_30_33 | `Reports/` | gl | APPCODES, FADPRC_Q, GLCST, GLLISTS | — | — | — | 2 |
| 717 | SqlReportFaRpn_113_without_30_33_m | `Reports/` | gl | APPCODES, FADPRC, GLCST, GLLISTS | — | — | — | 2 |
| 718 | SqlReportFaRpn_1133_1130 | `Reports/` | gl | APPCODES, FADPRC_Q, GLCST, GLLISTS | — | — | — | 2 |
| 719 | SqlReportFaRpn_1133_1130_m | `Reports/` | gl | APPCODES, FADPRC, GLCST, GLLISTS | — | — | — | 2 |
| 720 | SqlReportFaRpn_114 | `Reports/` | gl | APPCODES, FADPRC_Q, GLCST, GLLISTS | — | — | — | 2 |
| 721 | SqlReportFaRpn_114_m | `Reports/` | gl | APPCODES, FADPRC, GLCST, GLLISTS | — | — | — | 2 |
| 722 | SqlReportFaRpn_115 | `Reports/` | gl | APPCODES, FADPRC_Q, GLCST | — | — | — | 2 |
| 723 | SqlReportFaRpn_115_m | `Reports/` | gl | APPCODES, FADPRC_Q, GLCST | — | — | — | 2 |
| 724 | SqlReportFaRpn_116 | `Reports/` | gl | APPCODES, FADPRC_Q, GLCST, GLLISTS | — | — | — | 2 |
| 725 | SqlReportFaRpn_116_m | `Reports/` | gl | APPCODES, FADPRC, GLCST, GLLISTS | — | — | — | 2 |
| 726 | SqlReportFaRpn_Ar | `Reports/` | — | — | — | ChkFaCd1, ChkFaCd2, ChkFaCd3, ChkFaCd4, ChkMcstCd, ChkOCst, ChkcstCd, ColGrop … | — | 2 |
| 727 | SqlReportFaRpn_ArNormal | `Reports/` | gl | FADPRC_Q, GLCST | — | ChkFaCd1, ChkFaCd2, ChkFaCd3, ChkFaCd4, ChkMcstCd, ChkOCst, ChkcstCd, ColGrop … | — | 2 |
| 728 | sum_cd_number | `Reports/` | gl | GLJRNLD, GLMF, GLSUMS | — | Url, filter, login | — | 2 |
| 729 | sum_ssum_balcr | `Reports/` | gl | GLJRNLD, GLSSUMS, GLSUMS | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 730 | sum_ssum_baldb | `Reports/` | gl | GLJRNLD, GLSSUMS, GLSUMS | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 731 | sum_ssum_netcr | `Reports/` | gl | GLJRNLD, GLSSUMS, GLSUMS | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 732 | sum_ssum_netdb | `Reports/` | gl | GLJRNLD, GLSSUMS, GLSUMS | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 733 | SUMMARY SHEET  assp | `Reports/` | — | GLJRNLD, GLMF | — | FromDate, ToDate | — | 4 |
| 734 | summary sheet GEF | `Reports/` | — | GLJRNLD, GLMF | — | FromDate, ToDate | — | 4 |
| 735 | TableWizardTest | `Reports/` | — | — | — | CompanyAddress, CompanyName, ReportTitle, Url, login, logo | — | 1 |
| 736 | TacticalGoalsRpt | `Reports/` | — | — | — | Logo, ReportTitle, StrategicGoalId, TacticalGoalName, TacticalId, Url, login | — | 1 |
| 737 | takaleef_acc_no_not_equal | `Reports/` | gl | GLJRNLD, GLLOC, GLMF, GLTRSTBL | — | ChkGRP, ComId, CompanyAddress, CompanyName, FromDate, FromTrNo, JrnCd, JrnCds … | — | 1 |
| 738 | takaleef_acc_no_not_equal_acc_cst | `Reports/` | gl | GLJRNLD, GLMF, GLTRSTBL | — | ChkGRP, ComId, CompanyAddress, CompanyName, FromTrNo, JrnCd, JrnCds, Logo … | — | 1 |
| 739 | takaleef_Egmaly | `Reports/` | gl | CST_VAR, GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 740 | TAKALEEF_EGMALYA_NEW | `Reports/` | gl | CST_VAR, GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 741 | TAKALEEF_EGMALYA_NEW - Copy | `Reports/` | gl | CST_VAR, GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 742 | TAKALEEF_EGMALYA_NEW_update | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 743 | TAKALEEF_EGMALYA_NEW_VER | `Reports/` | gl | CST_VAR, GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 744 | TAKALEEF_EGMALYA_NEW_VER_all | `Reports/` | gl | CST_VAR, GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 745 | TAKALEEF_EGMALYA_per_1 | `Reports/` | gl | CST_VAR, GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 746 | takaleef_profit_asyout_head_north | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 747 | takaleef_profit_elmnya_head_north | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 748 | takaleef_profit_elmnya_head_south | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 749 | takaleef_profit_ELwady_m7htat | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 750 | takaleef_profit_ELwady_m7htat_together | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 751 | takaleef_profit_with_m7htat | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 752 | takaleef_profit_with_m7htat_together | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
