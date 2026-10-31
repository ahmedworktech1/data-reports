# كتالوج التقارير — جزء 05 من 09

سجل آلي (مش مستخرج بالـLLM) لكل تقرير Telerik: الاسم، القاعدة، الجداول اللي بيقراها، البارامترات، والتقارير الفرعية.
المصدر: `<SqlDataSource SelectCommand=...>` و`<UriReportSource Uri=...>` جوه ملفات `.trdx`.
لتجديد الملف ده: `node scripts/reports-catalog.mjs`

| # | التقرير (stem) | مسار | القاعدة | جداول | CTE | بارامترات | تقارير فرعية | نسخ مكررة |
|---|---|---|---|---|---|---|---|---|
| 753 | takaleef_profit_without_m7htat | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 754 | takaleef_revenue | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 755 | takaleef_revenue_all_mashro3at | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 756 | takaleef_revenue_all_mokaysat | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 757 | takaleef_revenue_asyot_north_mashro3at | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 758 | takaleef_revenue_asyot_north_mokaysat. | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 759 | takaleef_revenue_asyot_south_mashro3at . | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 760 | takaleef_revenue_asyot_south_mokaysat | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 761 | takaleef_revenue_asyoutِ_nourth | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 762 | takaleef_revenue_asyoutِ_nourth_mashro3at | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 763 | takaleef_revenue_asyoutِ_south | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 764 | takaleef_revenue_asyoutِ_south_mashro3at | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 765 | takaleef_revenue_Bani_soweef_mashro3at . | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 766 | takaleef_revenue_Bani_soweef_mokaysat | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 767 | takaleef_revenue_banysuef | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 768 | takaleef_revenue_banysuef_mashro3at | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 769 | takaleef_revenue_banysuef_mo2ysat | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 770 | takaleef_revenue_bnysuef_mashro3at | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 771 | takaleef_revenue_Elfayoum_mashro3at . | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 772 | takaleef_revenue_Elfayoum_mokaysat | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 773 | takaleef_revenue_Elmnya_north_mashro3at | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 774 | takaleef_revenue_Elmnya_north_mokaysat | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 775 | takaleef_revenue_Elmnya_nourth | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 776 | takaleef_revenue_Elmnya_nourth_mashro3at | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 777 | takaleef_revenue_Elmnya_nourth_mo2ysat | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 778 | takaleef_revenue_Elmnya_south | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 779 | takaleef_revenue_Elmnya_south_mashro3at | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 780 | takaleef_revenue_Elmnya_south_mo2ysat | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 781 | takaleef_revenue_Elmnya_south_mokaysat | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 782 | takaleef_revenue_ELwady_mashro3at | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 783 | takaleef_revenue_ELwady_mokaysat | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 2 |
| 784 | takaleef_revenue_fayoum | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 785 | takaleef_revenue_fayoum_mashro3at | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 786 | takaleef_revenue_fayoum_mo2ysat | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 787 | takaleef_revenue_kws_all | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 788 | takaleef_revenue_kws_asyot_north | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 789 | takaleef_revenue_kws_asyot_south | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 790 | takaleef_revenue_kws_banysuef | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 791 | takaleef_revenue_kws_Elmnya_north | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 792 | takaleef_revenue_kws_Elmnya_south | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 793 | takaleef_revenue_kws_fayoum | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 794 | takaleef_revenue_kws_percent_all | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 795 | takaleef_revenue_kws_percent_asyout_north | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 796 | takaleef_revenue_kws_percent_asyout_south | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 797 | takaleef_revenue_kws_percent_banysuef | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 798 | takaleef_revenue_kws_percent_fayoum | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 799 | takaleef_revenue_kws_percent_fyoum | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 800 | takaleef_revenue_kws_percent_mnia_nourth | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 801 | takaleef_revenue_kws_percent_mnia_south | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 802 | takaleef_revenue_kws_percent_wadyelgeded | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 803 | takaleef_revenue_kws_wadielgeded | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 804 | takaleef_revenue_m7tat | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 805 | takaleef_revenue_mashro3at | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 806 | takaleef_revenue_mo2ysat | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 807 | takaleef_revenue_Tiar | `Reports/` | — | GLJRNLD, GLSYSNDX | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 808 | takaleef_revenue_Tiar_asyout_north | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 809 | takaleef_revenue_Tiar_asyout_south | `Reports/` | — | GLJRNLD, GLSYSNDX | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 810 | takaleef_revenue_Tiar_banysuef | `Reports/` | — | GLJRNLD, GLSYSNDX | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 811 | takaleef_revenue_Tiar_fyoum | `Reports/` | — | GLJRNLD, GLSYSNDX | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 812 | takaleef_revenue_Tiar_m7tat | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 813 | takaleef_revenue_Tiar_mnia_north | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 814 | takaleef_revenue_Tiar_mnia_south | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 815 | takaleef_revenue_Tiar_wadielgeded | `Reports/` | — | GLJRNLD, GLSYSNDX | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 816 | takaleef_revenue_Tiar_wadielgeded_m7tat | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 817 | takaleef_revenue_wadielgeded | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 818 | takaleef_revenue_wadielgeded_mashro3at | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 819 | takaleef_revenue_wadielgeded_mo2ysat | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 820 | takleef_tayar | `Reports/` | gl | CST_VAR, GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 821 | takleft_taka_moba3a | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Parameter1, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 822 | takleft_taka_moba3a - Copy | `Reports/` | gl | GLJRNLD | ENERGYPURCHASES, REVENUECURRENTACTIVITY, TOTALCOST | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 823 | takleft_taka_moba3a_tafseely | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Parameter1, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 824 | TanzemWedara | `Reports/` | gl | FADPRC_Q, GLCST | — | DefaultReportTitle | — | 2 |
| 825 | TanzemWedara_m | `Reports/` | gl | FADPRC, GLCST | — | DefaultReportTitle | — | 2 |
| 826 | tarkeb_nesby_assets | `Reports/` | gl | GLJRNLD_A, GLSYSNDX | CURRBALANCES, PREVBALANCES, TOTALS, YEARS | URL, filter, login | — | 1 |
| 827 | tawzee3_Acc_no | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 828 | tawzee3_Acc_no_per_1 | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 829 | tax_cr | `Reports/` | gl | GLJRNLD, GLMF, GLSUMS, GLTRSTBL | — | Url, filter, login | — | 2 |
| 830 | tax_db | `Reports/` | gl | GLJRNLD, GLMF, GLSUMS, GLTRSTBL | — | Url, filter, login | — | 2 |
| 831 | tax_statement | `Reports/` | gl | FADPRC_Q, GLCST | — | DefaultReportTitle | — | 2 |
| 832 | tax_statement_m | `Reports/` | gl | FADPRC, GLCST | — | DefaultReportTitle | — | 2 |
| 833 | TenantReport | `Reports/` | — | — | — | FromTenant, Login, Nationality, Tenant, Tenants, ToTenant, Url | — | 2 |
| 834 | test | `Reports/` | gl | CSH_TEST | — | FromDate, ToDate | — | 1 |
| 835 | TestFaProjects | `Reports/` | gl | APPCODES, FA_PROJECTS, FA_PROJECTSCODING, FA_PROJECTS_DETAILS, GLCST | — | ColumnsNames, CompanyAddress, CompanyName, FromDate, Logo, ReportTitle, ToDate | — | 2 |
| 836 | testReport | `Reports/` | — | PLTR | — | — | — | 1 |
| 837 | testReport3 | `Reports/` | — | PYINOUT | — | — | — | 1 |
| 838 | tkaleef_rev_asyoutِ_n_moaysat | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 839 | tkaleef_rev_asyoutِ_s_moaysat | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 840 | tkalef_rev_asyout_n | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 841 | tkalef_rev_asyout_n_mashrouat | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 842 | tkalef_rev_asyout_s | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 843 | tkalef_rev_asyout_s_mashrouat | `Reports/` | — | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 844 | TOT_FA | `Reports/` | gl | APPCODES, FA_PROJECTSCODING, FA_PROJECTS_DETAILS, GLCST | — | DefaultReportTitle | — | 2 |
| 845 | TOTALREPORT | `Reports/` | gl | FADPRC_Q | — | DefaultReportTitle | — | 2 |
| 846 | TOTALREPORT_m | `Reports/` | gl | FADPRC | — | DefaultReportTitle | — | 2 |
| 847 | tr_no_finance_not_analysis_all | `Reports/` | gl | GLJRNLD, GLJRNLH, GLTRSTBL | — | ChkGRP, ComId, CompanyAddress, CompanyName, FromDate, FromTrNo, JrnCd, JrnCds … | — | 2 |
| 848 | tr_no_finance_not_analysis_all_liens | `Reports/` | gl | GLJRNLD, GLJRNLH, GLTRSTBL | — | ChkGRP, ComId, CompanyAddress, CompanyName, FromDate, FromTrNo, JrnCd, JrnCds … | — | 1 |
| 849 | tr_no_finance_not_analysis_all_not_revised | `Reports/` | gl | GLJRNLD, GLJRNLH, GLTRSTBL | — | ChkGRP, ComId, CompanyAddress, CompanyName, FromDate, FromTrNo, JrnCd, JrnCds … | — | 2 |
| 850 | tr_no_not_analysis_lines | `Reports/` | gl | GLJRNLD, GLJRNLH, GLMF, GLTRSTBL | — | ChkGRP, ComId, CompanyAddress, CompanyName, FromDate, FromTrNo, JrnCd, JrnCds … | — | 2 |
| 851 | tr_no_not_analysis_lines_not_revised | `Reports/` | gl | GLJRNLD, GLJRNLH, GLMF, GLTRSTBL | — | ChkGRP, ComId, CompanyAddress, CompanyName, FromDate, FromTrNo, JrnCd, JrnCds … | — | 2 |
| 852 | TrTyAnalysis_Ar | `Reports/` | — | — | — | AddBeginBalance, Appnd_TRDS, CashAndJrnl, ChkNoClos, ChkNoZero, ComId, CompanyAddress, CompanyName … | — | — |
| 853 | TrTyAnalysis_ArHst | `Reports/` | — | — | — | AddBeginBalance, Appnd_TRDS, CashAndJrnl, ComId, CompanyAddress, CompanyName, FromAccNo, FromCstCd … | — | 2 |
| 854 | TrTyAnalysis_BBAL_Ar | `Reports/` | — | — | — | AccNt, AddBeginBalance, Appnd_TRDS, CashAndJrnl, ChkNoClos, ChkNoZero, ComId, CompanyAddress … | — | — |
| 855 | TrTyAnalysis_CoulumnCharts_Ar | `Reports/` | — | — | — | AddBeginBalance, Appnd_TRDS, CashAndJrnl, ChkNoClos, ChkNoZero, ComId, CompanyAddress, CompanyName … | — | — |
| 856 | TrTyAnalysis_CUR_Ar | `Reports/` | — | — | — | AddBeginBalance, Appnd_TRDS, CashAndJrnl, ChkNoClos, ChkNoZero, ComId, CompanyAddress, CompanyName … | — | — |
| 857 | TrTyAnalysis_LineCharts_Ar | `Reports/` | — | — | — | AddBeginBalance, Appnd_TRDS, CashAndJrnl, ChkNoClos, ChkNoZero, ComId, CompanyAddress, CompanyName … | — | — |
| 858 | TrTyAnalysis_PieCharts_Ar | `Reports/` | — | — | — | AddBeginBalance, Appnd_TRDS, CashAndJrnl, ChkNoClos, ChkNoZero, ComId, CompanyAddress, CompanyName … | — | — |
| 859 | Unit data report-4 | `Reports/` | — | AQLISTS, BLDMF, TENANTMF, UNTMF | — | — | — | — |
| 860 | VisitorsPerPeriod | `Reports/` | — | — | — | CompanyAddress, CompanyName, JrnCd, TrNo, Url, login | — | — |
| 861 | VisitorsPerPeriodrpt | `Reports/` | — | — | — | CompanyAddress, CompanyName, FromMonth, FromStrtDt, ToMonth, ToStrtDt, Url, login | — | 1 |
| 862 | VisitsQuery | `Reports/` | — | ORGANIZATION, VISITORS, VISITS | — | — | — | 1 |
| 863 | wadyelgeded | `Reports/` | gl | GLJRNLD | — | DefaultReportTitle, Url, filter, filter_TO_TR_DT, filter_TR_DT, login | — | 1 |
| 864 | Z_FAMF | `Reports/` | gl | FAMF | — | — | — | 2 |
| 865 | ZGLMF_Lists | `Reports/` | — | GLMF | — | — | — | 2 |
| 866 | Batch_Post_Earmarked_Paid | `Reports/Arch/` | arch | BENEFICIARIE, BENEFICIARIE_ACCIDENT, BRCA_APPCODES_VIEW, FINANCIALDECISIONEXPORT, GUIDANCESTUDY_H, ORGANIZATION | BENEFICIARIES, FILTERED, PARENTS, PARENTSBASE, RAWROWS | — | — | — |
| 867 | Batch_Post_Earmarked_Prepared | `Reports/Arch/` | arch | BENEFICIARIE, BENEFICIARIE_ACCIDENT, BRCA_APPCODES_VIEW, FINANCIALDECISIONEXPORT, GUIDANCESTUDY_H, ORGANIZATION | BENEFICIARIES, FILTERED, PARENTS, PARENTSBASE, RAWROWS | — | — | — |
| 868 | Care_MartyrCard | `Reports/Arch/` | arch | APPCODES, ATTACHMENTS, BENEFICIARIE, BRCA_APPCODES_VIEW, ELIGIBILITYCASES, GUIDANCE_STUDY_SERVICES, MARTYRSBENEFICIARIE, ORGANIZATION, RANKS, SERVICESTYPES | — | BeneficiarieId, ImageFolder, ImagePath | — | — |
| 869 | Martyrs_Beneficiaries_Details_Ser | `Reports/Arch/` | arch | APPCODES, BENEFICIARIE, BENEFICIARIE_ACCIDENT, BENEFICIARIE_DECISION, MARTYRSBENEFICIARIE, ORGANIZATION | CTE_BENEFICIARIESBASE, CTE_BENEFICIARIESCOUNT, CTE_BENEFICIARIESWITHROWNUM, CTE_MARTYRS, CTE_MARTYRSWITHBENEFICIARYSTART | OrgNoParam, StudyNoParam, Type | — | — |
| 870 | Martyrs_Family_Details | `Reports/Arch/` | arch | APPCODES, BENEFICIARIE, BENEFICIARIE_ACCIDENT, BENEFICIARIE_DECISION, MARTYRSBENEFICIARIE, MARTYRSBENEFICIARIE_D, ORGANIZATION | CTE_BENEFICIARIESBASE, CTE_BENEFICIARIESCOUNT, CTE_BENEFICIARIESWITHROWNUM, CTE_MARTYRS, CTE_MARTYRSWITHBENEFICIARYSTART | OrgNoParam, StudyNoParam, Type | — | — |
| 871 | Martyrs_Family_Details_Types | `Reports/Arch/` | arch | APPCODES, BENEFICIARIE, BENEFICIARIE_ACCIDENT, BENEFICIARIE_DECISION, MARTYRSBENEFICIARIE, MARTYRSBENEFICIARIE_D, ORGANIZATION | CTE_BENEFICIARIESBASE, CTE_BENEFICIARIESCOUNT, CTE_BENEFICIARIESWITHROWNUM, CTE_MARTYRS, CTE_MARTYRSWITHBENEFICIARYSTART | OrgNoParam, StudyNoParam, Type | — | — |
| 872 | Martyrs_Multi_Beneficiaries_Details_Ser | `Reports/Arch/` | arch | APPCODES, BENEFICIARIE, BENEFICIARIE_ACCIDENT, BENEFICIARIE_DECISION, MARTYRSBENEFICIARIE, MARTYRSBENEFICIARIE_D, ORGANIZATION | CTE_BENEFICIARIESBASE, CTE_BENEFICIARIESCOUNT, CTE_BENEFICIARIESWITHROWNUM, CTE_MARTYRS, CTE_MARTYRSWITHBENEFICIARYSTART | OrgNoParam, StudyNoParam, Type | — | — |
| 873 | Pilot_Study_Beneficiaries_Injured | `Reports/Arch/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS_EXTRAS, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Beneficiaries_Details_Ser, Martyrs_Family_Details, Martyrs_Family_Details_Types, Martyrs_Multi_Beneficiaries_Details_Ser | — |
| 874 | Pilot_Study_Beneficiaries_Injured_Ser | `Reports/Arch/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Beneficiaries_Details_Ser, Martyrs_Family_Details, Martyrs_Family_Details_Types, Martyrs_Multi_Beneficiaries_Details_Ser | — |
| 875 | Pilot_Study_Beneficiaries_Injured_Totals | `Reports/Arch/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS_EXTRAS, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Beneficiaries_Details_Ser, Martyrs_Family_Details, Martyrs_Family_Details_Types, Martyrs_Multi_Beneficiaries_Details_Ser | — |
| 876 | Pilot_Study_Beneficiaries_Injured_Totals_Ser | `Reports/Arch/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Beneficiaries_Details_Ser, Martyrs_Family_Details, Martyrs_Family_Details_Types, Martyrs_Multi_Beneficiaries_Details_Ser | — |
| 877 | Pilot_Study_Beneficiaries_Only_Totals | `Reports/Arch/` | arch | GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS_EXTRAS, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Martyrs_Beneficiaries_Details_Ser, Martyrs_Family_Details, Martyrs_Family_Details_Types, Martyrs_Multi_Beneficiaries_Details_Ser | — |
| 878 | Pilot_Study_Beneficiaries_Only_Totals_Ser | `Reports/Arch/` | arch | GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Martyrs_Beneficiaries_Details_Ser, Martyrs_Family_Details, Martyrs_Family_Details_Types, Martyrs_Multi_Beneficiaries_Details_Ser | — |
| 879 | Pilot_Study_Injured_Martyrs | `Reports/Arch/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS_EXTRAS, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Details | — |
| 880 | Pilot_Study_Injured_Martyrs_Ser | `Reports/Arch/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Details | — |
| 881 | Pilot_Study_Injured_Martyrs_Totals | `Reports/Arch/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Details | — |
| 882 | Pilot_Study_Injured_Martyrs_Totals_Ser | `Reports/Arch/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Details | — |
| 883 | Pilot_Study_Injured_Only | `Reports/Arch/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS_EXTRAS, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details | — |
| 884 | Pilot_Study_Injured_Only_Ser | `Reports/Arch/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details | — |
| 885 | Pilot_Study_Injured_Only_Totals | `Reports/Arch/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details | — |
| 886 | Pilot_Study_Injured_Only_Totals_Ser | `Reports/Arch/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details | — |
| 887 | Pilot_Study_Martyrs_Only_Totals | `Reports/Arch/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Martyrs_Details | — |
| 888 | Pilot_Study_Martyrs_Only_Totals_Cost | `Reports/Arch/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_FINANC_PROPSLS, GUIDANCE_STUDY_SERVICECOSTINGTMP, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Martyrs_Details | 1 |
| 889 | Pilot_Study_Martyrs_Only_Totals_Ser | `Reports/Arch/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Martyrs_Details | — |
| 890 | Pilot_Study_One_Time | `Reports/Arch/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Details | — |
| 891 | Pilot_Study_One_Time_Cost | `Reports/Arch/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_FINANC_PROPSLS, GUIDANCE_STUDY_SERVICECOSTINGTMP, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Details | — |
| 892 | Pilot_Study_One_Time_Decision_Payment | `Reports/Arch/` | arch | BENEFICIARIE, ELIGIBILITYCASES, FINANCIALDECISIONEXPORT, GUIDANCESTUDY_H, GUIDANCE_STUDY_CONDITIONS, GUIDANCE_STUDY_FINANCE_DEC, GUIDANCE_STUDY_FINANC_PROPSLS, GUIDANCE_STUDY_SERVICES, GUIDANCE_TOTAL_NUMBER, MARTYRSBENEFICIARIE, ORGANIZATION, SERVICESTYPES | COMBINED, FDE2_GLOBAL, FIRSTENTRY, MARTYRCALCULATEDSTATUS | DecNo, StudyNoParam, Url, UserId | Injured_Details_Payment_Reason_Cost_One_Time, Injured_Details_Payment_Reason_One_Time, Injured_Details_Payment_Status_Cost_One_Time, Injured_Details_Payment_Status_One_Time, Martyrs_Details_Payment_Reason_Cost_One_Time, Martyrs_Details_Payment_Reason_One_Time | — |
| 893 | Pilot_Study_One_Time_Totals | `Reports/Arch/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Details | — |
| 894 | Pilot_Study_One_Time_Totals_Cost | `Reports/Arch/` | arch | BENEFICIARIE, GUIDANCESTUDY_H, GUIDANCE_STUDY_FINANC_PROPSLS, GUIDANCE_STUDY_SERVICECOSTINGTMP, GUIDANCE_TOTAL_NUMBER, ORGANIZATION, SERVICESTYPES | — | StudyNoParam | Injured_Details, Martyrs_Details | — |
| 895 | Single_Case | `Reports/Arch/` | — | APPEALS, CASEPARTICIPANT, CASES, CASESD, COURTS, PYEMPMF_H | EVENTS, PARTYDATA | — | — | — |
| 896 | StrategicPlanMaster1 | `Reports/Arch/` | arch | STRATEGICPLANS | — | — | — | — |
| 897 | stratigic | `Reports/Arch/` | arch | OPERATIONALOBJECTIVES, STRATEGICGOALS, STRATEGICPLANS, TACTICALGOALS | OPERATIONALCTE, STRATEGICCTE, TACTICALCTE | — | — | — |
| 898 | Tactics | `Reports/Arch/` | arch | OPERATIONALOBJECTIVES, PYLISTS, STRATEGICGOALS, STRATEGICPLANS, TACTICALGOALS | DEPTSPLIT, STRATEGICCTE, TACTICALCTE | Url | — | — |
| 899 | Tashgheely | `Reports/Arch/` | arch | OPERATIONALOBJECTIVES, PYLISTS, STRATEGICGOALS, STRATEGICPLANS, TACTICALGOALS | DEPTSPLIT, STRATEGICCTE, TACTICALCTE | Url | — | — |
| 900 | Total | `Reports/Arch/` | arch | OPERATIONALOBJECTIVES, PYLISTS, STRATEGICGOALS, STRATEGICPLANS, TACTICALGOALS | DEPTSPLIT, OPERATIONALCTE, OPERATIONALCTE_BASE, STRATEGICCTE, TACTICALCTE | Url | — | — |
| 901 | VisitorsPerPeriod | `Reports/Arch/` | — | — | — | CompanyAddress, CompanyName, FromMonth, FromStrtDt, ToMonth, ToStrtDt, Url, login | — | — |
| 902 | ARSEDET_ASNAF | `Reports/Az/` | az | AZITMS, AZLOCS, AZTRD, AZTRH | ITEMMOVEMENTS | — | — | — |
| 903 | Aztrh100 | `Reports/Az/` | az | AZITMS, AZLOCS, AZTRD, AZTRH, AZTRTY | — | — | — | — |
| 904 | GlaccstatnReport2_Ar | `Reports/Az/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | — |
| 905 | GlaccstatnReport65_Ar | `Reports/Az/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | — |
| 906 | Gltrial4_Ar | `Reports/Az/` | — | — | — | AccNt, BalanceType, ChkNoZero, ComId, CompanyAddress, CompanyName, CstGrp, CurCd … | — | 2 |
| 907 | kasf_7esab_modmag | `Reports/Az/` | az | ACCSTAT_W, APPCODES, GLCHKSMF_V, GLSSUMS | MAINDATA, OPENINGBALANCE | AccNoParam, TEntr, Url, fEntr | kashf_chekat | — |
| 908 | kashf_chekat | `Reports/Az/` | — | — | — | AccNoParam | — | — |
| 909 | ReportAccstat | `Reports/Az/` | — | — | — | AccTyps, Addrmrk, ApprovedOnly, ChkTr, CompanyAddress, CompanyName, Crdt, Csts … | — | — |
| 910 | ReportAccstat1 | `Reports/Az/` | — | — | — | AccTyps, Addrmrk, ApprovedOnly, ChkTr, CompanyAddress, CompanyName, Crdt, Csts … | — | — |
| 911 | ReportAllana0 | `Reports/Az/` | — | — | — | AccSrc, Accounts2Cod, AccountsCod, AccsFromGl, Chktax1, CitmCod, Cmpnditms, ComId … | — | — |
| 912 | ReportAllana1 | `Reports/Az/` | — | — | — | AccSrc, Accounts2Cod, AccountsCod, AccsFromGl, Chktax1, CitmCod, Cmpnditms, ComId … | — | — |
| 913 | ReportAllana2 | `Reports/Az/` | — | — | — | AccSrc, Accounts2Cod, AccountsCod, AccsFromGl, Chktax1, CitmCod, Cmpnditms, ComId … | — | — |
| 914 | ReportItmCard | `Reports/Az/` | — | — | — | AccNm, Actv, BtnMitm, BtnMitms, BtnPloc, BtnPlocs, BtnPtrTy, BtnPtrTys … | — | — |
| 915 | ReportItmstop_Index1 | `Reports/Az/` | — | — | — | Actv, ChkOut, CompanyAddress, CompanyName, FItm, FormCst, FromCnt, FromDate … | — | — |
| 916 | ReportQtyOnly | `Reports/Az/` | — | — | — | Aradiobuttonlist3, Atextbox1, BalConds, BtnMitm, BtnMitms, CSrt, ChkD2qty, ChkSum … | — | — |
| 917 | ReportRfAnlysisPurchases | `Reports/Az/` | — | — | — | CarLin, Chkcmpnd, CompanyAddress, CompanyName, Fcrep, Fcus, Fitm, Fmitm … | — | — |
| 918 | ReportRfAnlysisSales | `Reports/Az/` | — | — | — | CarLin, Chkcmpnd, CompanyAddress, CompanyName, Fcrep, Fcus, Fitm, Fmitm … | — | — |
| 919 | ReportRfPurchasesAndReturn | `Reports/Az/` | — | — | — | CarLin, Chkcmpnd, CompanyAddress, CompanyName, Fcrep, Fcus, Fitm, Fmitm … | — | — |
| 920 | ReportRfSalesAndReturns | `Reports/Az/` | — | — | — | CarLin, Chkcmpnd, CompanyAddress, CompanyName, Fcrep, Fcus, Fitm, Fmitm … | — | — |
| 921 | ReportTotalLocs1 | `Reports/Az/` | — | — | — | Aradiobuttonlist3, Atextbox1, BalConds, BtnMitm, BtnMitms, CSrt, ChkD2qty, ChkSum … | — | — |
| 922 | ReportTotalLocs2 | `Reports/Az/` | — | — | — | Aradiobuttonlist3, Atextbox1, BalConds, BtnMitm, BtnMitms, CSrt, ChkD2qty, ChkSum … | — | — |
| 923 | ReportTrcmpr_Index1 | `Reports/Az/` | — | — | — | Acheckbox1, Addrmrk, C11, C12, C21, C22, C31, C32 … | — | — |
| 924 | BeginningOfPeriodSplit(Debit-Credit) | `Reports/Gl/` | — | — | — | AccNt, AddBeginBalance, Appnd_TRDS, CashAndJrnl, ChkNoClos, ChkNoZero, ComId, CompanyAddress … | — | 1 |
| 925 | BnkEqltyReport_Ar | `Reports/Gl/` | — | — | — | AccNmAr, AccNo, CompanyAddress, CompanyName, FromDate, Logo, Sno, ToDate … | — | 1 |
| 926 | E3tmadat | `Reports/Gl/` | gl | APPCODES, GLLCMF, GLLISTS, GLSUMS | — | ClosDt, FromDate, OpnDt, ReportTitle, ToDate, filter_TO_TR_DT, filter_TR_DT | — | 1 |
| 927 | FajrnlReport1_Ar | `Reports/Gl/` | — | — | — | Chk1, Chk2, CompanyAddress, CompanyName, Doctot, FromDate, FromDocNo, FromFaCd … | — | 1 |
| 928 | GlaccstatnReport_currency_Ar | `Reports/Gl/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 1 |
| 929 | GlaccstatnReport1_Ar | `Reports/Gl/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 1 |
| 930 | GlaccstatnReport10_Ar | `Reports/Gl/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 1 |
| 931 | GlaccstatnReport11_Ar | `Reports/Gl/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 1 |
| 932 | GlaccstatnReport12_Ar | `Reports/Gl/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 1 |
| 933 | GlaccstatnReport13_Ar | `Reports/Gl/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 1 |
| 934 | GlaccstatnReport15_Ar | `Reports/Gl/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 1 |
| 935 | GlaccstatnReport2_Ar | `Reports/Gl/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 1 |
| 936 | GlaccstatnReport3_Ar | `Reports/Gl/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 1 |
| 937 | GlaccstatnReport4_Ar | `Reports/Gl/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 1 |
| 938 | GlaccstatnReport5_Ar | `Reports/Gl/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 1 |
| 939 | GlaccstatnReport6_Ar | `Reports/Gl/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 1 |
| 940 | GlaccstatnReport65_Ar | `Reports/Gl/` | — | — | — | ACCREP, Accs, Arrangement, ChkAGE, ChkAgeSrc, ChkBMerge, ChkExtra, ChkGrp … | — | 1 |
