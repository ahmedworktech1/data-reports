# كتالوج التقارير — جزء 03 من 09

سجل آلي (مش مستخرج بالـLLM) لكل تقرير Telerik: الاسم، القاعدة، الجداول اللي بيقراها، البارامترات، والتقارير الفرعية.
المصدر: `<SqlDataSource SelectCommand=...>` و`<UriReportSource Uri=...>` جوه ملفات `.trdx`.
لتجديد الملف ده: `node scripts/reports-catalog.mjs`

| # | التقرير (stem) | مسار | القاعدة | جداول | CTE | بارامترات | تقارير فرعية | نسخ مكررة |
|---|---|---|---|---|---|---|---|---|
| 377 | purchase_2mr_tashkeel_lagnt_shera2_mn_sooq_m7ly | `Reports/` | az | APPCODES, AZITMS, AZLISTS, AZTRD, AZTRH, PYEMPMF_H | ALLMEMBERS, ITEMS, LOANINFO, NUMBERED | — | — | — |
| 378 | purchase_3dad_el_moardin_kolhm | `Reports/` | gl | AZTRH, GLCHKSMF, GLCSH_TR_H, GLLCMF, GLSSUMS | AZTRH_DEDUP | Loc, TrNo, TrTy | — | — |
| 379 | purchase_aqd_moawla_a3mal | `Reports/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | AdvancePercent, ContractDuration, ContractValue, ContractorName, PenaltyRate, WarrantyYears, WorkNature, WorkSite | — | — |
| 380 | purchase_AztrhRequestInstanceLogs | `Reports/` | az | AZTRH, BRCAUSERS, REQUESTINSTANCELOGS, STATES, TRANSITIONS, TRIGGERS | — | — | — | — |
| 381 | Purchase_AztrhRequestInstanceLogss | `Reports/` | az | AZTRH, BRCAUSERS, REQUESTINSTANCELOGS, STATES, TRANSITIONS, TRIGGERS | — | — | — | — |
| 382 | purchase_baa3_markbaat | `Reports/` | az | APPCODES, AZACCMF, AZITMS, AZPKGDEF, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 383 | purchase_bayan_b2oamr_eltawreed | `Reports/` | az | AZTRH | — | — | — | — |
| 384 | purchase_bayan_be3mlyat_eltoreed | `Reports/` | az | APPCODES, AZTRH, AZTRTY | — | — | — | — |
| 385 | purchase_bayan_beas3aar_elmoaaad_elmorda | `Reports/` | az | AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 386 | purchase_bayanat_el2snaf_elmatloba | `Reports/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH | — | — | — | — |
| 387 | purchase_bayanat_el2snaf_elmatloba_mostadema | `Reports/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH | — | — | — | — |
| 388 | purchase_baynat_el2snaf_elmatloba | `Reports/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH | — | — | — | — |
| 389 | purchase_baynat_el2snaf_elmoshtrah | `Reports/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH | — | — | — | — |
| 390 | purchase_egra2at_lagnt_bat_lekbool_asnaf_nsbt_takhfeed | `Reports/` | az | APPCODES, AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | ALLMEMBERS, COMMITTEEDATA, HEADERDATA, NUMBERED, WITHJOBNAME | — | — | — |
| 391 | purchase_egra2at_lagnt_elbat_fe_elmon2sa | `Reports/` | az | APPCODES, AZITMS, AZLISTS, AZTRD, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, ITEMS, NUMBERED | FnclTrNo, Loc, TrTy | purchase_subreport_lagnt_elbat_fi_elmon2sah | — |
| 392 | purchase_egra2at_lagnt_shera2_be2tfa2_elmobashr | `Reports/` | az | APPCODES, AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | ALLMEMBERS, COMMITTEEDATA, HEADERDATA, NUMBERED, WITHJOBNAME | — | — | — |
| 393 | Purchase_Ekhtar_BL_natiga_El_fania | `Reports/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 394 | Purchase_Ekhtar_BL_natiga_El_fania-claude.com | `Reports/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 395 | purchase_entfa3_mashro3 | `Reports/` | az | APPCODES, AZACCMF, AZITMS, AZPKGDEF, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 396 | purchase_est3lam_no3_eltakyeem_fel_amalyat | `Reports/` | az | AZTRH, AZTRH_OFFRS_TYPES, AZTRTY, GLSSUMS | — | — | — | — |
| 397 | purchase_est3lam_tanbehat_da5lya | `Reports/` | main | NOTIFICATIONS | — | — | — | — |
| 398 | purchase_Estealam | `Reports/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, REQUESTINSTANCES, STATES | — | — | purchase_tafsily_talab_elsarf | — |
| 399 | purchase_estghlal_mashro3 | `Reports/` | az | APPCODES, AZACCMF, AZITMS, AZPKGDEF, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 400 | purchase_kash_asnaf_solf | `Reports/` | az | APPCODES, AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH | — | — | — | — |
| 401 | purchase_kashf_asnaf_bl_sar_eltakdiry | `Reports/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH | — | — | — | — |
| 402 | purchase_kashf_elsharkat_elmorsh7a | `Reports/` | az | AZACCMF, AZTRD, AZTRH | — | — | — | — |
| 403 | purchase_kashf_esnaf_matlopa_BEL2MR_ELMOBASHR | `Reports/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH | HEADERDATA | — | — | — |
| 404 | purchase_kashf_esnaf_matlopa_blmomarsa_ma7doda | `Reports/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH | HEADERDATA | — | — | — |
| 405 | Purchase_kashf_esnaf_s3rt2deury | `Reports/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH | — | — | — | — |
| 406 | purchase_kashf_tafreegh_esnaf | `Reports/` | az | AZITMS, AZTRD, AZTRH | — | — | — | — |
| 407 | purchase_kashf_tafreegh_solfa_mostadema | `Reports/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | — | — | — |
| 408 | purchase_kashf_tafreegh_solfa_n2dya | `Reports/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | — | — | — |
| 409 | purchase_korast_shroot | `Reports/` | az | AZTRD, AZTRH, AZTRTY, PYEMPMF_H | — | — | — | — |
| 410 | purchase_krar_tashkeel_lagnet_bat_fany | `Reports/` | az | AZITMS, AZLISTS, AZTRD, AZTRH, PYEMPMF_H | ALLMEMBERS, ITEMS, NUMBERED | — | — | — |
| 411 | purchase_krar_tashkeel_lagnt_bat_solfa_mostadema | `Reports/` | az | AZITMS, AZLISTS, AZTRD, AZTRH, PYEMPMF_H | ALLMEMBERS, ITEMS, NUMBERED | — | — | — |
| 412 | purchase_krar_tashkeel_lagnt_momarsa_2mr_mobashr | `Reports/` | az | APPCODES, AZITMS, AZLISTS, AZTRD, AZTRH, PYEMPMF_H | ALLMEMBERS, FINALRESULT, ITEMSCTE, NUMBERED, WITHJOBNAME | — | — | — |
| 413 | purchase_krar_tashkeel_lagnt_momarsa_m7doda | `Reports/` | az | AZITMS, AZLISTS, AZTRD, AZTRH, PYEMPMF_H | ALLMEMBERS, ITEMS, NUMBERED | — | — | — |
| 414 | purchase_lagnt_bat_fany | `Reports/` | az | AZITMS, AZLISTS, AZTRD, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, COUNCILMEMBER, EXTERNALMEMBER, FINALRESULT, ITEMSCTE, NUMBERED ... | — | — | — |
| 415 | purchase_lagnt_fa7s_W_estlam | `Reports/` | az | AZLISTS, AZTRH, PYEMPMF_H | ALLMEMBERS, NUMBERED | — | — | — |
| 416 | Purchase_lagnt_fat7_fany w maly | `Reports/` | az | AZLISTS, AZTRH, PYEMPMF_H | ALLMEMBERS, NUMBERED | — | — | — |
| 417 | Purchase_lagnt_fat7_fany w maly_subreport | `Reports/` | az | AZLISTS, AZTRH, PYEMPMF_H | ALLMEMBERS, NUMBERED | — | purchase_subreport_bat_fany | — |
| 418 | purchase_lagnt_fat7_mazryf_malya | `Reports/` | az | AZLISTS, AZTRH, PYEMPMF_H | ALLMEMBERS, NUMBERED | — | — | — |
| 419 | purchase_lagntmwasfatfanya | `Reports/` | az | AZTRH, PYEMPMF_H | ALLMEMBERS, NUMBERED | — | — | — |
| 420 | purchase_m7dr_egra2at_lagnt_shera2 | `Reports/` | az | AZITMS, AZLISTS, AZTRD, AZTRH, PYEMPMF_H | ALLMEMBERS, ITEMS, NUMBERED | — | — | — |
| 421 | purchase_m7dr_egra2at_lagnt_shera2_mostademaa | `Reports/` | az | AZITMS, AZLISTS, AZTRD, AZTRH, PYEMPMF_H | ALLMEMBERS, ITEMS, NUMBERED | — | — | — |
| 422 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya | `Reports/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, RANKEDDISTINCT, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany, purchase_subreport_bat_fany_2 | — |
| 423 | purchase_ma7dr_egr2at_lagnt_bat_fi_el3rood_elfanya (2) | `Reports/` | az | APPCODES, AZACCMF, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, NUMBERED | FnclTrNo, Loc, TrTy | purchase_subreport_bat_fany | — |
| 424 | purchase_ma7dr_fat7_mazryf_fanya_lagnt | `Reports/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | DEDUP, DOC, MEMBERIDS, MEMBERS | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | purcahse_test_fat7mazryf, purchase_test2_fat7_mazryf, purchase_test2_fat7_mazryf_2 | — |
| 425 | purchase_maqbol_fany | `Reports/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 426 | purchase_marfood_fany | `Reports/` | az | AZACCMF, AZTRH, AZTRTY | — | — | — | — |
| 427 | purchase_mozkrt_3rd_3la_elsayed_ra2s_magls | `Reports/` | az | AZACCMF, AZTRD, AZTRH | FINALSUPPLIERS, SPLITSUPPLIERS, SUPPLIERS | — | — | — |
| 428 | purchase_mozkrt_3rd_solfa_mostadema_82 | `Reports/` | az | AZITMS, AZLISTS, AZTRD, AZTRH, PYEMPMF_H | ALLMEMBERS, ITEMS, NUMBERED | — | — | — |
| 429 | purchase_mozkrt_3rd_solfa_mostadema72 | `Reports/` | az | AZITMS, AZLISTS, AZTRD, AZTRH, PYEMPMF_H | ALLMEMBERS, ITEMS, NUMBERED | — | — | — |
| 430 | purchase_mozkrt_tadbeer_solfaa | `Reports/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 431 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir | `Reports/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 432 | Purchase_mozkrt_tasdiq_ala_lagnet_tadbir-bak | `Reports/` | az | AZITMS, AZTRD, AZTRH, AZTRTY, GLBDG, GLMF | H | — | — | — |
| 433 | purchase_namozg_e3lan_sharkat | `Reports/` | az | APPCODES, ATTACHMENTS, AZACCMF, AZTRD, AZTRH, AZTRH_EVAL_CRIT, AZTRH_OFFRS_TYPES, AZTRTY | MAINDATA, MOVETYPE, OFFRS_TYPES, OPRTYPE | — | — | — |
| 434 | purchase_namozg_test | `Reports/` | az | APPCODES, ATTACHMENTS, AZACCMF, AZTRD, AZTRH, AZTRTY | MAINDATA, MOVETYPE, OPRTYPE | — | — | — |
| 435 | purchase_natiga_3mal_bat_fany | `Reports/` | az | AZTRH, AZTRH_EVAL_CRIT, AZTRH_OFFRS_TYPES, GLSSUMS | — | — | — | — |
| 436 | purchase_natiga_3mal_bat_fany_all_1 | `Reports/` | az | AZTRH, AZTRH_EVAL_CRIT, AZTRH_OFFRS_TYPES, GLSSUMS | — | — | — | — |
| 437 | purchase_natiga_3mal_bat_fany_all_2 | `Reports/` | az | AZITMS, AZTRD, AZTRD_EVAL_CRIT, AZTRH, AZTRH_EVAL_CRIT, AZTRH_OFFRS_TYPES, GLSSUMS | — | — | — | — |
| 438 | purchase_natiga_3mal_bat_fany_all_3 | `Reports/` | az | AZTRH, AZTRH_EVAL_CRIT, AZTRH_OFFRS_TYPES, GLSSUMS | — | — | — | — |
| 439 | purchase_Oqood_w_moshtriat | `Reports/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, REQUESTINSTANCES, STATES | — | — | purchase_tafsily_talab_elsarf | — |
| 440 | purchase_sadad_tamin_el_ebtidaa | `Reports/` | gl | AZTRH, GLCHKSMF, GLCSH_TR_H, GLLCMF, GLSSUMS | AZTRH_DEDUP | Loc, TrNo, TrTy | — | — |
| 441 | purchase_shehada_edarya | `Reports/` | az | AZTRH | — | — | — | — |
| 442 | purchase_Shera2_3kaaar | `Reports/` | az | APPCODES, AZACCMF, AZITMS, AZPKGDEF, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 443 | purchase_shera2_mankolat | `Reports/` | az | APPCODES, AZACCMF, AZITMS, AZPKGDEF, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 444 | purchase_subreport_bat_fany | `Reports/` | az | AZTRH | LETTER, OFFERS, RANKEDOFFERS, REJECTED, REJECTEDSUP, TRREP | FnclTrNo, Loc, TrTy | — | — |
| 445 | purchase_subreport_bat_fany_2 | `Reports/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, RANKED, RANKEDDISTINCT, SUPPLIERS, TRREP | FnclTrNo, Loc, TrTy | — | — |
| 446 | purchase_subreport_lagnt_elbat_fi_elmon2sah | `Reports/` | az | AZTRH | — | FnclTrNo, Loc, TrTy | — | — |
| 447 | purchase_subreport_m7dr_fat7_mazryf | `Reports/` | az | APPCODES, AZTRH | — | FNCLTRNOparam, Locparam, TrTyparam | — | — |
| 448 | purchase_subreport_m7dr_fat7_mazryf_2 | `Reports/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, NUMBERED | FNCLTRNOparam, Locparam, TrTyparam | — | — |
| 449 | purchase_subreport_m7dr_fat7_mazryf_sadad_eltamin | `Reports/` | gl | AZTRH, GLCHKSMF, GLCSH_TR_H, GLLCMF, GLSSUMS | AZTRH_DEDUP | — | — | — |
| 450 | purchase_tadbeer_had_adna | `Reports/` | az | AZITMLOC, AZITMS, AZLOCS, AZTRD, AZTRTY | — | — | — | — |
| 451 | purchase_tafsily_talab_elsarf | `Reports/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, REQUESTINSTANCES, STATES | DOCLINES | — | — | — |
| 452 | purchase_Talab_sheraa_mogamaa | `Reports/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, REQUESTINSTANCES, STATES | — | — | — | — |
| 453 | purchase_talb_e7tyag_a3mal | `Reports/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | — | — | — |
| 454 | purchase_talb_e7tyag_mogm3 --- depracted | `Reports/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH | — | — | — | — |
| 455 | purchase_talb_sarf | `Reports/` | az | AZITMS, AZLISTS, AZLOCS, AZPKGDEF, AZTRD, AZTRH | — | — | — | — |
| 456 | purchase_talb_ta3akod | `Reports/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | — | — | — |
| 457 | purchase_Talbe7tyaaaaaag | `Reports/` | az | AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | — | — | — | — |
| 458 | purchase_test2_fat7_mazryf | `Reports/` | — | — | — | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | — | — |
| 459 | purchase_test2_fat7_mazryf_2 | `Reports/` | — | — | — | FNCLTRNOparam, LocParam, TrNoParam, TrTyParam | — | — |
| 460 | purchse_shehada_edareya_mo2kta | `Reports/` | az | AZTRH, PYEMPMF_H | — | Filter_LOC_Text, filter_TO_TR_DT, filter_TR_DT | — | — |
| 461 | purchse_shehada_edareya_mostadema | `Reports/` | az | AZTRH, PYEMPMF_H | — | — | — | — |
| 462 | purshase_egra2at_lagnt_fat7_mazryf_fany | `Reports/` | az, gl | APPCODES, AZLISTS, AZTRH, AZTRTY, GLCHKSMF, GLCSH_TR_H, GLLCMF, GLSSUMS, PYEMPMF_H | ALLMEMBERS, AZTRH_DEDUP, NUMBERED | FNCLTRNOparam, Locparam, TrTyparam | purchase_subreport_m7dr_fat7_mazryf, purchase_subreport_m7dr_fat7_mazryf_2, purchase_subreport_m7dr_fat7_mazryf_sadad_eltamin | — |
| 463 | purshase_egra2at_lagnt_fat7_mazryf_fany_2 | `Reports/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, NUMBERED | FNCLTRNOparam, Locparam, TrTyparam | purchase_subreport_m7dr_fat7_mazryf | — |
| 464 | purshase_egra2at_lagnt_fat7_mazryf_fany_test | `Reports/` | az | APPCODES, AZLISTS, AZTRH, AZTRTY, PYEMPMF_H | ALLMEMBERS, NUMBERED | — | — | — |
| 465 | purshase_kshf_tfryghy_llbt_almaly | `Reports/` | az | AZACCMF, AZITMS, AZTRD, AZTRH, AZTRH_OFFRS | NUMBEREDSUPPLIERS, SUPPLIERS | FromDate, ToDate | — | — |
| 466 | purshase_m7dr_egra2at_belmomarsa_elm7doda | `Reports/` | az | APPCODES, AZACCMF, AZITMS, AZLISTS, AZPKGDEF, AZTRD, AZTRH, PYEMPMF_H | AGGREGATEDMEMBERS, ALLMEMBERS, COMPANYNAMES, FINALRESULT, FINALSUPPLIERS, ITEMSCTE ... | — | — | — |
| 467 | purshase_sheahda_Edarya_Soooolfa_mostadema | `Reports/` | az | AZTRH, PYEMPMF_H | — | — | — | — |
| 468 | purshase_talb_3roood_as3ar_momarsa_bl2mr_mobashr | `Reports/` | az | APPCODES, AZACCMF, AZITMS, AZTRD, AZTRH | — | — | — | — |
| 469 | QfAccAna_CoulumnCharts_Ar | `Reports/` | — | — | — | CstCds, CurCd, FromAccNo, FromDate, Group1, Group2, Group3, Group4 … | — | 2 |
| 470 | QfAccAna_LineCharts_Ar | `Reports/` | — | — | — | CstCds, CurCd, FromAccNo, FromDate, Group1, Group2, Group3, Group4 … | — | 2 |
| 471 | QfAccAna_PieCharts_Ar | `Reports/` | — | — | — | CstCds, CurCd, FromAccNo, FromDate, Group1, Group2, Group3, Group4 … | — | 2 |
| 472 | QueryAztrhOprtn | `Reports/` | az | AZTRH, AZTRTY | — | — | — | — |
| 473 | QueryBeneficiarieRpt | `Reports/` | arch | BENEFICIARIE | BENEFICIARIESCOUNTS, BENEFICIARYCOUNTS, COMBINEDDATA | AccidentNos, ActionTyps, BeneficiarieId, BtwnDate, Centers, Ctgs, DecisionCds, Details … | — | 1 |
| 474 | QueryBeneficirieDecisionsDetails | `Reports/` | — | — | — | BeneficiarieId, CellNo, Decision, Logo, Org, ReportTitle, Url, login | — | — |
| 475 | QueryBeneficirieDetails | `Reports/` | — | — | — | BeneficiarieId, BtwnDate, InJrd, Logo, Marytr, Org, ReportTitle, ToDate … | — | 1 |
| 476 | QueryBeneficirieReligionsDetails | `Reports/` | — | — | — | BeneficiarieId, CellNo, Logo, Org, ReportTitle, Rlgn, Url, login | — | 1 |
| 477 | QueryCaseReport | `Reports/` | — | — | — | CaseNumber, CaseType, CourtId, FromDate, Login, ToDate, Url | — | 1 |
| 478 | QueryGlJrnl1 | `Reports/` | gl | GLJRNLD, GLMF, GLSUMS | — | Url, filter, login | — | 2 |
| 479 | QueryGlJrnl2 | `Reports/` | gl | GLJRNLD, GLMF | — | Url, filter, login | — | 2 |
| 480 | QueryNumericalStaticAccident | `Reports/` | — | — | — | AccidentNumber, CellNo, Logo, ReportTitle, Url, login | — | 1 |
| 481 | QueryVisitsReport | `Reports/` | arch | VISITORS, VISITS | — | Url, filter, login | — | 1 |
| 482 | R_103_103 SUMMARY SHEET  grant | `Reports/` | — | GLJRNLD, GLMF | — | FromDate, ToDate | — | 1 |
| 483 | R_136_136 New Report | `Reports/` | — | GLJRNLD, GLMF | — | FromDate, ToDate | — | 1 |
| 484 | R_2_2 _»_«__ | `Reports/` | — | RPT_OUT | — | — | — | 1 |
| 485 | R_95_95 FORM 100 - loan | `Reports/` | — | GLCST, GLJRNLD, GLLCMF, GLMF, GLSUMS | — | FromDate, ToDate | — | 1 |
| 486 | R_97_97 FORM 100 - grand | `Reports/` | — | GLCST, GLJRNLD, GLLCMF, GLMF, GLSUMS | — | FromDate, ToDate | — | 1 |
| 487 | ReceiptVoucher | `Reports/` | — | — | — | Bild, BildState, BildType, Bld, BldCd, Collect, ContractState, CreateStat … | — | — |
| 488 | ReceiptVoucherAlhafez | `Reports/` | — | — | — | Bild, BildState, BildType, Bld, BldCd, Collect, ContractState, CreateStat … | — | — |
| 489 | ReceiptVoucherIns | `Reports/` | — | — | — | Bild, BildState, BildType, Bld, BldCd, Collect, ContractState, CreateStat … | — | — |
| 490 | ReceiptVoucherMaintenance | `Reports/` | — | — | — | Bild, BildState, BildType, Bld, BldCd, Collect, ContractState, CreateStat … | — | — |
| 491 | Report on rented units - comprehensive-53 | `Reports/` | — | AQCOLLECT_D, AQRENT_D, AQRENT_H, BLDMF, EARN_RECORDS, TENANTMF, UNTMF | — | — | — | — |
| 492 | ReportAccPaid | `Reports/` | — | — | — | Adjtoth, CustLmt, FAccNo, FDt, FRepCd, Famt, FmeritDt, FtrNo … | — | 1 |
| 493 | ReportAccPaid_Index2 | `Reports/` | — | — | — | Adjtoth, CustLmt, FAccNo, FDt, FRepCd, Famt, FmeritDt, FtrNo … | — | 1 |
| 494 | ReportAccPay | `Reports/` | — | — | — | ChkNo, CompanyAddress, CompanyName, Cronly, CustLmt, FAccNo, FDt, FRepCd … | — | 1 |
| 495 | ReportAccstat | `Reports/` | — | — | — | AccTyps, Addrmrk, ApprovedOnly, ChkTr, CompanyAddress, CompanyName, Crdt, Csts … | — | — |
| 496 | ReportAccstat1 | `Reports/` | — | — | — | AccTyps, Addrmrk, ApprovedOnly, ChkTr, CompanyAddress, CompanyName, Crdt, Csts … | — | — |
| 497 | ReportAllana0 | `Reports/` | — | — | — | AccSrc, AccountsCod, Chktax1, CitmCod, Cmpnditms, CompanyAddress, CompanyName, CstStrCod … | — | — |
| 498 | ReportAllana1 | `Reports/` | — | — | — | AccSrc, AccountsCod, Chktax1, CitmCod, Cmpnditms, CompanyAddress, CompanyName, CstStrCod … | — | — |
| 499 | ReportAllana2 | `Reports/` | — | — | — | AccSrc, AccountsCod, Chktax1, CitmCod, Cmpnditms, CompanyAddress, CompanyName, CstStrCod … | — | — |
| 500 | ReportArchive | `Reports/` | — | — | — | FromDt, JrnCd, ToDt, TrNo, Url, login | — | 2 |
| 501 | ReportAudit_Ar | `Reports/` | — | — | — | CompanyAddress, CompanyName, CreatedDateFrom, CreatedDateTo, Logo, TableName, TransactionType, Url … | — | 2 |
| 502 | ReportAztrhnew | `Reports/` | — | — | — | AccNo, AccNo2, AccNos, AccNos2, BonsOnly, Citm, Citms, CompanyAddress … | — | 1 |
| 503 | ReportBegBal_Ar | `Reports/` | — | — | — | Actv, Chk1, CompanyAddress, CompanyName, Floc, FrmNme, FromItm, Itm … | — | 1 |
| 504 | ReportBegBal2_Ar | `Reports/` | — | — | — | Actv, Chk1, CompanyAddress, CompanyName, Floc, FrmNme, FromItm, Itm … | — | 1 |
| 505 | ReportBigBdgt_Ar | `Reports/` | — | — | — | ChpNo, ChpNos, FromChpNo, FromGrop, FromItmNo, FromUntCd, Grop, Grops … | — | 2 |
| 506 | ReportBigPackages | `Reports/` | — | — | — | Aradiobuttonlist3, Atextbox1, BalConds, BtnMitm, BtnMitms, CSrt, ChkD2qty, ChkSum … | — | 1 |
| 507 | ReportBonus | `Reports/` | — | — | — | Aradiobuttonlist3, Atextbox1, BalConds, BtnMitm, BtnMitms, CSrt, ChkD2qty, ChkSum … | — | 1 |
| 508 | ReportBriefFormItems | `Reports/` | — | — | — | Aradiobuttonlist3, Atextbox1, BalConds, BtnMitm, BtnMitms, CSrt, ChkD2qty, ChkSum … | — | 1 |
| 509 | ReportBVCharges | `Reports/` | — | — | — | Aradiobuttonlist3, Atextbox1, BalConds, BtnMitm, BtnMitms, CSrt, ChkD2qty, ChkSum … | — | 1 |
| 510 | ReportCshState | `Reports/` | — | — | — | COM_ID, CST_CD, CompanyAddress, CompanyName, CshCd, CshTy, CurCd, DSsumCd … | — | 2 |
| 511 | ReportCshState_Ar | `Reports/` | — | — | — | COM_ID, CST_CD, CompanyAddress, CompanyName, CshCd, CshTy, CurCd, DSsumCd … | — | — |
| 512 | ReportCurBal_Ar | `Reports/` | — | — | — | Actv, Balbons, Chkadjbal, Chkrqty, CompanyAddress, CompanyName, Floccd, FrmNme … | — | 1 |
| 513 | ReportCurbalManualInv | `Reports/` | — | — | — | Actv, Balbons, Chkadjbal, Chkrqty, CompanyAddress, CompanyName, Floccd, FrmNme … | — | 1 |
| 514 | ReportCusbal1 | `Reports/` | — | — | — | CarLin, Chk1, CompanyAddress, CompanyName, Fbal, Fcrep, Fcus, Fdt … | — | 1 |
| 515 | ReportCusbal2 | `Reports/` | — | — | — | CarLin, Chk1, CompanyAddress, CompanyName, Fbal, Fcrep, Fcus, Fdt … | — | 1 |
| 516 | ReportCusbal3 | `Reports/` | — | — | — | CarLin, Chk1, CompanyAddress, CompanyName, Fbal, Fcrep, Fcus, Fdt … | — | 1 |
| 517 | ReportExpdt | `Reports/` | — | — | — | Brnsh, CompanyAddress, CompanyName, Frm, Itms, Itmss, Logo, Prnt … | — | 1 |
| 518 | ReportExpierd_Ar | `Reports/` | — | — | — | CstCd, DMY, DMYs, FClosDt, FVendorNo, GrDs, GrTy, GuaranteTy … | — | — |
| 519 | ReportExpierd_En | `Reports/` | — | — | — | DMY, DMYs, FClosDt, FVendorNo, GuaranteTy, TClosDt, TVendorNo, Url … | — | 2 |
| 520 | ReportExpierd_En.trdx.BASE | `Reports/` | — | — | — | DMY, DMYs, FClosDt, FVendorNo, GuaranteTy, TClosDt, TVendorNo, Url … | — | 2 |
| 521 | ReportExpierd_En.trdx.LOCAL | `Reports/` | — | — | — | DMY, DMYs, FClosDt, FVendorNo, GuaranteTy, TClosDt, TVendorNo, Url … | — | 2 |
| 522 | ReportExpierd_En.trdx.REMOTE | `Reports/` | — | — | — | DMY, DMYs, FClosDt, FVendorNo, GuaranteTy, TClosDt, TVendorNo, Url … | — | 2 |
| 523 | ReportFaRpn_Ar | `Reports/` | — | — | — | ChkFaCd1, ChkFaCd2, ChkFaCd3, ChkFaCd4, ChkMcstCd, ChkOCst, ChkcstCd, ColGrop … | — | — |
| 524 | ReportFaRpnBalanceBeginning_Ar | `Reports/` | — | — | — | ChkFaCd1, ChkFaCd2, ChkFaCd3, ChkFaCd4, ChkMcstCd, ChkOCst, ChkcstCd, ColGrop … | — | — |
| 525 | ReportFaRpnCars_Ar | `Reports/` | — | — | — | ChkFaCd1, ChkFaCd2, ChkFaCd3, ChkFaCd4, ChkMcstCd, ChkOCst, ChkcstCd, ColGrop … | — | — |
| 526 | ReportFaRpnimprovment_Ar | `Reports/` | gl | FADPRC_Q, GLCST | — | ChkFaCd1, ChkFaCd2, ChkFaCd3, ChkFaCd4, ChkMcstCd, ChkOCst, ChkcstCd, ColGrop … | — | 2 |
| 527 | ReportFaRpnSumCd_Ar | `Reports/` | — | — | — | ChkFaCd1, ChkFaCd2, ChkFaCd3, ChkFaCd4, ChkMcstCd, ChkOCst, ChkcstCd, ColGrop … | — | 2 |
| 528 | ReportFollowPayment_Ar | `Reports/` | — | — | — | BnkId, ChkNo, CompanyAddress, CompanyName, CshCd, CshTy, CurCd, FromDate … | — | 2 |
| 529 | ReportFollowPaymentRequest_Ar | `Reports/` | — | — | — | BnkId, ChkNo, CompanyAddress, CompanyName, CshCd, CshTy, CurCd, FromDate … | — | 2 |
| 530 | ReportGlAccTr1_Ar | `Reports/` | — | — | — | AccNo, AccNos, AccStat, AccountsNames, ComId, CompanyAddress, CompanyName, FromAccNo … | — | — |
| 531 | ReportGlAccTr1_En | `Reports/` | — | — | — | AccNo, AccNos, AccountsNames, ComId, FromAccNo, FromDate, ToAccNo, ToDate … | — | 2 |
| 532 | ReportGlBalAcc_Ar | `Reports/` | — | — | — | CompanyAddress, CompanyName, FromAccount, FromDate, Logo, ParmsFromOtherConds, ReportTitle, ToAccount … | — | — |
| 533 | ReportGlbdg_Ar | `Reports/` | — | — | — | AccNo, AccNos, FromAccNo, FromDate, FromItmNo, FromPrd, FromTrNo, MitmNo … | — | 2 |
| 534 | ReportGlbdgFinance_Ar | `Reports/` | — | — | — | AccNo1, AccNos1, FromAccNo1, FromItmNo1, FromPrd1, MitmNo1, MitmNos1, ToAccNo1 … | — | 2 |
| 535 | ReportGljrnl1_AR | `Reports/` | — | — | — | JrnCd, TrNo, Url, login | — | 2 |
| 536 | ReportGljrnlLSt1_Ar | `Reports/` | — | — | — | ComId, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd, FromSumCd, FromTrNo … | — | 2 |
| 537 | ReportGljrnlLSt2_Ar | `Reports/` | — | — | — | ComId, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd, FromSumCd, FromTrNo … | — | 2 |
| 538 | ReportGljrnlLSt2_En | `Reports/` | — | — | — | ComId, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd, FromSumCd, FromTrNo … | — | 2 |
| 539 | ReportGljrnlLSt3_Ar | `Reports/` | — | — | — | ComId, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd, FromSumCd, FromTrNo … | — | 2 |
| 540 | ReportGljrnlLSt3_En | `Reports/` | — | — | — | ComId, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd, FromSumCd, FromTrNo … | — | 2 |
| 541 | ReportGljrnlLSt4_Ar | `Reports/` | — | — | — | ComId, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd, FromSumCd, FromTrNo … | — | 2 |
| 542 | ReportGljrnlLSt5_Ar | `Reports/` | — | — | — | ComId, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd, FromSumCd, FromTrNo … | — | 2 |
| 543 | ReportGljrnlLSt5_En | `Reports/` | — | — | — | ComId, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd, FromSumCd, FromTrNo … | — | 2 |
| 544 | ReportGljrnlLSt6_Ar | `Reports/` | — | — | — | ComId, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd, FromSumCd, FromTrNo … | — | 2 |
| 545 | ReportGljrnlLSt7_Ar | `Reports/` | — | — | — | ComId, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd, FromSumCd, FromTrNo … | — | 2 |
| 546 | ReportGljrnlLSt7_En | `Reports/` | — | — | — | ComId, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd, FromSumCd, FromTrNo … | — | 2 |
| 547 | ReportGljrnlLSt8_Ar | `Reports/` | — | — | — | ComId, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd, FromSumCd, FromTrNo … | — | 2 |
| 548 | ReportGljrnlLSt8_En | `Reports/` | — | — | — | ComId, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd, FromSumCd, FromTrNo … | — | 2 |
| 549 | ReportGljrnlLSt9_Ar | `Reports/` | — | — | — | ComId, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd, FromSumCd, FromTrNo … | — | 2 |
| 550 | ReportGljrnlLSt9_En | `Reports/` | — | — | — | ComId, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd, FromSumCd, FromTrNo … | — | 2 |
| 551 | ReportGljrnlSt1_Ar | `Reports/` | — | — | — | ComId, CompanyAddress, CompanyName, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd … | — | — |
| 552 | ReportGljrnlSt2_Ar | `Reports/` | — | — | — | ComId, CompanyAddress, CompanyName, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd … | — | — |
| 553 | ReportGljrnlSt2_En | `Reports/` | — | — | — | ComId, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd, FromSumCd, FromTrNo … | — | 2 |
| 554 | ReportGljrnlSt3_Ar | `Reports/` | — | — | — | ComId, CompanyAddress, CompanyName, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd … | — | — |
| 555 | ReportGljrnlSt3_En | `Reports/` | — | — | — | ComId, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd, FromSumCd, FromTrNo … | — | 2 |
| 556 | ReportGljrnlSt4_Ar | `Reports/` | — | — | — | ComId, CompanyAddress, CompanyName, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd … | — | — |
| 557 | ReportGljrnlSt5_Ar | `Reports/` | — | — | — | ComId, CompanyAddress, CompanyName, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd … | — | — |
| 558 | ReportGljrnlSt5_En | `Reports/` | — | — | — | ComId, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd, FromSumCd, FromTrNo … | — | 2 |
| 559 | ReportGljrnlSt6_Ar | `Reports/` | — | — | — | ComId, CompanyAddress, CompanyName, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd … | — | — |
| 560 | ReportGljrnlSt7_Ar | `Reports/` | — | — | — | ComId, CompanyAddress, CompanyName, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd … | — | — |
| 561 | ReportGljrnlSt7_En | `Reports/` | — | — | — | ComId, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd, FromSumCd, FromTrNo … | — | 2 |
| 562 | ReportGljrnlSt8_Ar | `Reports/` | — | — | — | ComId, CompanyAddress, CompanyName, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd … | — | — |
| 563 | ReportGljrnlSt8_En | `Reports/` | — | — | — | ComId, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd, FromSumCd, FromTrNo … | — | 2 |
| 564 | ReportGljrnlSt9_Ar | `Reports/` | — | — | — | ComId, CompanyAddress, CompanyName, FromAccNo, FromCstCd, FromDate, FromScstCd, FromSsumCd … | — | — |
