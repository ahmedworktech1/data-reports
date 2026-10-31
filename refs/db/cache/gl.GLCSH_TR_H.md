# glx_sandoaa.dbo.GLCSH_TR_H

ord | col                  | type     | len  | nullable | ident | pk | ar                       
----+----------------------+----------+------+----------+-------+----+--------------------------
1   | TR_TY                | smallint | 2    | false    | false | 1  | نوع السند                
2   | TR_NO                | int      | 4    | false    | false | 1  | رقم السند                
3   | TR_DT                | datetime | 8    | true     | false | 0  | التاريخ                  
4   | CSH_CD               | nvarchar | 30   | true     | false | 0  | الخزينة                  
5   | CST_CD               | nvarchar | 30   | true     | false | 0  | رقم مركز التكلفة         
6   | TOT_AMT              | decimal  | 9    | true     | false | 0  | المبلغ                   
7   | TO_NM                | nvarchar | 200  | true     | false | 0  | السيد/السادة             
8   | TOADR                | nvarchar | 510  | true     | false | 0  |                          
9   | DOC_TY               | smallint | 2    | true     | false | 0  |                          
10  | DOC_NO               | nvarchar | 50   | true     | false | 0  | رقم الإيصال              
11  | CHK_NO               | nvarchar | 40   | true     | false | 0  | رقم الشيك                
12  | BNK_ID               | nvarchar | 20   | true     | false | 0  | مسحوبا على بنك           
13  | BNK_BRNCH            | nvarchar | 6    | true     | false | 0  |                          
14  | BACC_NO              | nvarchar | 40   | true     | false | 0  | الحساب البنكى            
15  | RMRK                 | nvarchar | 510  | true     | false | 0  | وذلك عن                  
16  | REP_CD               | nvarchar | 40   | true     | false | 0  | الموظف                   
17  | REP_CD1              | nvarchar | 10   | true     | false | 0  |                          
18  | POSTED               | nvarchar | 2    | true     | false | 0  |                          
19  | PJRN_CD              | nvarchar | 30   | true     | false | 0  |                          
20  | PTR_NO               | int      | 4    | true     | false | 0  |                          
21  | POSTED_DT            | datetime | 8    | true     | false | 0  |                          
22  | POSTED_BY            | nvarchar | 24   | true     | false | 0  |                          
23  | EnteredBy            | nvarchar | 24   | true     | false | 0  |                          
24  | UpdatedBy            | nvarchar | 24   | true     | false | 0  |                          
25  | EntryDate            | datetime | 8    | true     | false | 0  |                          
26  | UpdateDate           | datetime | 8    | true     | false | 0  |                          
27  | DOCS                 | nvarchar | 1000 | true     | false | 0  | أرقام الإيصالات          
28  | RDOCS                | nvarchar | 1000 | true     | false | 0  | إيصالات مسجلة            
29  | PAID                 | nvarchar | 2    | true     | false | 0  |                          
30  | PAID_DT              | datetime | 8    | true     | false | 0  | تاريخ التوريد            
31  | PAID_BY              | nvarchar | 24   | true     | false | 0  | سٌدد بواسطة              
32  | CSH_TY               | int      | 4    | true     | false | 0  | طريقة الدفع              
33  | PRNTD                | nvarchar | 2    | true     | false | 0  | حالة الطباعة             
34  | CUR_CD               | nvarchar | 16   | true     | false | 0  | العملة                   
35  | HCUR_VL              | decimal  | 9    | true     | false | 0  | المبلغ بالعملة           
36  | HRATE                | decimal  | 9    | true     | false | 0  | سعر التحويل              
37  | REVISD               | nvarchar | 2    | true     | false | 0  | حالة المراجعة            
38  | REVISD_BY            | nvarchar | 24   | true     | false | 0  |                          
39  | REVISD_DT            | datetime | 8    | true     | false | 0  |                          
40  | R_DT                 | datetime | 8    | true     | false | 0  |                          
41  | DblAct               | nvarchar | 2    | true     | false | 0  |                          
42  | DblAct_ty            | smallint | 2    | true     | false | 0  |                          
43  | DblAct_No            | int      | 4    | true     | false | 0  |                          
44  | SRC                  | nvarchar | 30   | true     | false | 0  |                          
45  | HPJRN_CD             | nvarchar | 10   | true     | false | 0  |                          
46  | HPTR_NO              | int      | 4    | true     | false | 0  |                          
47  | TOT_NUM_WRD          | nvarchar | 510  | true     | false | 0  |                          
48  | tmp_no               | int      | 4    | true     | false | 0  |                          
49  | HDUE_DT              | datetime | 8    | true     | false | 0  | تاريخ الشيك              
50  | COM_ID               | nvarchar | 30   | true     | false | 0  | الوحدة                   
51  | ROLL_NO              | nvarchar | 30   | true     | false | 0  | رقم الحافظة              
52  | SUM_CD               | nvarchar | 30   | true     | false | 0  | بند إحصائي               
53  | SSUM_CD              | nvarchar | 30   | true     | false | 0  |  بند إحصائي فرعي         
54  | ALT_CHK_NO           | nvarchar | 30   | true     | false | 0  | بدل شيك                  
55  | DIST_DON             | nvarchar | 10   | true     | false | 0  |                          
56  | CHK_stat             | smallint | 2    | true     | false | 0  | مرحلة الشيك              
57  | chk_stat_DT          | datetime | 8    | true     | false | 0  | تاريخ الحالة             
58  | ALT_TR_NO            | nvarchar | 30   | true     | false | 0  | بدل السند رقم            
59  | TO_FRST_ACC          | smallint | 2    | true     | false | 0  |                          
60  | BY_ACC_RPT           | smallint | 2    | true     | false | 0  |                          
61  | tmp_jrn_cd           | nvarchar | 30   | true     | false | 0  |                          
62  | SCST_CD              | nvarchar | 50   | true     | false | 0  | مركز التكلفة فرعي        
63  | RMRK_EN              | nvarchar | 510  | true     | false | 0  |                          
64  | HCHK_NO              | nvarchar | 510  | true     | false | 0  |                          
65  | HBNK_ID              | nvarchar | 20   | true     | false | 0  |                          
66  | HJ_TR_DT             | nvarchar | 20   | true     | false | 0  |                          
67  | HJ_POSTED_DT         | nvarchar | 20   | true     | false | 0  |                          
68  | HJ_PAID_DT           | nvarchar | 20   | true     | false | 0  |                          
69  | HJ_REVISD_DT         | nvarchar | 20   | true     | false | 0  |                          
70  | HJ_R_DT              | nvarchar | 20   | true     | false | 0  |                          
71  | HJ_HDUE_DT           | nvarchar | 20   | true     | false | 0  |                          
72  | HJ_chk_stat_DT       | nvarchar | 20   | true     | false | 0  |                          
73  | LOC                  | nvarchar | 50   | true     | false | 0  |                          
74  | Ptr_ty               | smallint | 2    | true     | false | 0  | نوع سند المرجع           
75  | Ptr_no1              | smallint | 2    | true     | false | 0  | رقم سند المرجع           
76  | Sp_ty                | smallint | 2    | true     | false | 0  |                          
77  | SPD_Id               | nvarchar | 70   | true     | false | 0  | المشروع                  
78  | SP_Id                | nvarchar | 70   | true     | false | 0  | المانح                   
79  | SP_NO                | nvarchar | 70   | true     | false | 0  | التخصيص                  
80  | EgBatch              | nvarchar | 100  | true     | false | 0  |                          
81  | CntryId              | nvarchar | 100  | true     | false | 0  | الدولة                   
82  | Posted1F2            | nvarchar | 100  | true     | false | 0  | الجهة                    
83  | EgPayOffNumber       | nvarchar | 100  | true     | false | 0  |                          
84  | EgTransfereNumber    | nvarchar | 100  | true     | false | 0  |                          
85  | EgEndorseNumber      | nvarchar | 100  | true     | false | 0  |                          
86  | REFS_X               | nvarchar | 100  | true     | false | 0  |                          
87  | WF_TR_NO             | int      | 4    | true     | false | 0  |                          
88  | WF_LN_NO             | int      | 4    | true     | false | 0  |                          
89  | FTR_DT               | datetime | 8    | true     | false | 0  | من تاريخ                 
90  | TTR_DT               | datetime | 8    | true     | false | 0  | الى تاريخ                
91  | CNT_ID               | nvarchar | 40   | true     | false | 0  |                          
92  | HJ_FTR_DT            | nvarchar | 20   | true     | false | 0  |                          
93  | HJ_TTR_DT            | nvarchar | 20   | true     | false | 0  |                          
94  | AUDT_TR_TY           | nvarchar | 100  | true     | false | 0  | نوع الحركه الرقابية      
95  | AUDT_TR_NO           | int      | 4    | true     | false | 0  | رقم الحركه الرقابية      
96  | NOTES                | nvarchar | 510  | true     | false | 0  | البيان                   
97  | DOC_DT               | datetime | 8    | true     | false | 0  | تاريخ المستند            
98  | HDOC_DT              | datetime | 8    | true     | false | 0  | ت. الاستحقاق             
99  | Hposted1_f1          | nvarchar | 100  | true     | false | 0  |                          
100 | Hposted1_f2          | nvarchar | 100  | true     | false | 0  |                          
101 | Hposted1_f3          | nvarchar | 100  | true     | false | 0  |                          
102 | DueCSH_DT            | datetime | 8    | true     | false | 0  | تاريخ الاستحقاق          
103 | LOAN_TYP             | smallint | 2    | true     | false | 0  | نوع السلفة               
104 | Instit_Req           | nvarchar | 400  | true     | false | 0  | الجهة الطالبة            
105 | Committe_Name        | nvarchar | 400  | true     | false | 0  | اسم اللجنة               
106 | Booklet_Num          | nvarchar | 100  | true     | false | 0  | رقم الكراسة              
107 | Document_type        | int      | 4    | true     | false | 0  | نوع المستند              
108 | Loan_Applicant       | nvarchar | 200  | true     | false | 0  | اسم طالب السلفة          
109 | Loan_Reason          | nvarchar | 1000 | true     | false | 0  | سبب السلفة               
110 | Loan_Dt              | datetime | 8    | true     | false | 0  | تاريخ تقديم طلب السلفة   
111 | Guarantee_Num        | nvarchar | 100  | true     | false | 0  | رقم خطاب الضمان          
112 | Operation_Name       | nvarchar | 1000 | true     | false | 0  | اسم العملية              
113 | Tender_Num           | nvarchar | 100  | true     | false | 0  | رقم المناقصة             
114 | Tender_Dt            | datetime | 8    | true     | false | 0  | تاريخ المناقصة           
115 | Tender_End_Dt        | datetime | 8    | true     | false | 0  | تاريخ الانتهاء           
116 | Org_Name             | nvarchar | 400  | true     | false | 0  | اسم الشركة               
117 | Src_Bank             | nvarchar | 400  | true     | false | 0  | البنك المصدر             
118 | AZ_TRTY              | smallint | 2    | true     | false | 0  | نوع الحركة               
119 | AZ_TRNO              | int      | 4    | true     | false | 0  | رقم الاذن                
120 | AZ_TOT_AMT           | decimal  | 9    | true     | false | 0  | المبلغ                   
121 | AZ_TR_DT             | datetime | 8    | true     | false | 0  | تاريخ الحركة             
122 | AZ_LOC               | nvarchar | 16   | true     | false | 0  | الفرع                    
123 | AZ_TR_TY             | smallint | 2    | true     | false | 0  | نوع الحركة               
124 | AZ_OPRTN_NO          | nvarchar | 800  | true     | false | 0  | رقم العملية              
125 | AZ_OPRTN_TY          | smallint | 2    | true     | false | 0  | نوع العملية              
126 | AZ_OPRTN_NM          | nvarchar | 200  | true     | false | 0  | اسم العملية              
127 | PY_TRCODE            | nvarchar | 8    | true     | false | 0  | نوع الحركة               
128 | PY_EMPNO             | nvarchar | 50   | true     | false | 0  | رقم الموظف               
129 | PY_SNO               | int      | 4    | true     | false | 0  | رقم الحركة               
130 | PY_DBL1              | decimal  | 9    | true     | false | 0  | المبلغ                   
131 | PY_DBL2              | decimal  | 9    | true     | false | 0  | القسط الدورى للسلفة      
132 | PY_INT1              | int      | 4    | true     | false | 0  | عدد الاقساط              
133 | PY_DT1               | datetime | 8    | true     | false | 0  | تاريخ السلفة             
134 | AZ_EMP_NO            | nvarchar | 50   | true     | false | 0  | رقم الموظف               
135 | Representative_Name  | nvarchar | 200  | true     | false | 0  | اسم المندوب              
136 | Pymnt_Frm_No         | nvarchar | 200  | true     | false | 0  | رقم استمارة الصرف        
137 | FIN_APPRV            | nvarchar | 2    | true     | false | 0  |                          
138 | PY_DT2               | datetime | 8    | true     | false | 0  | تاريخ انتهاء السلفة      
139 | SubstitutionCount    | int      | 4    | true     | false | 0  | عدد الاستعاضات           
140 | Offer_Memo_No        | nvarchar | 500  | true     | false | 0  | رقم مذكرة العرض          
141 | HJRN_CD              | nvarchar | 100  | true     | false | 0  | رقم اليومية              
142 | HTR_NO               | int      | 4    | true     | false | 0  | رقم القيد                
143 | HJRN_CD_N            | nvarchar | 100  | true     | false | 0  | رقم اليومية ماقبل الترحيل
144 | HTR_NO_N             | int      | 4    | true     | false | 0  | رقم القيد ماقبل الترحيل  
145 | AZ_SUPPLIER_ACTIVITY | nvarchar | 2000 | true     | false | 0  | نوع النشاط               
