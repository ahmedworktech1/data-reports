# glx_sandoaa.dbo.GLJRNLD

ord | col                   | type     | len  | nullable | ident | pk | ar                   
----+-----------------------+----------+------+----------+-------+----+----------------------
1   | JRN_CD                | nvarchar | 10   | false    | false | 1  | طريقة الطرح          
2   | TR_NO                 | int      | 4    | false    | false | 1  | رقم العملية          
3   | LN_NO                 | int      | 4    | false    | false | 1  |                      
4   | ACC_NO                | nvarchar | 30   | true     | false | 0  | رقم الحساب           
5   | TR_DS                 | nvarchar | 4000 | true     | false | 0  | نوع الحركة           
6   | LN_TY                 | int      | 4    | true     | false | 0  |                      
7   | DB_VL                 | decimal  | 17   | true     | false | 0  |                      
8   | CR_VL                 | decimal  | 17   | true     | false | 0  |                      
9   | CUR_CD                | nvarchar | 16   | true     | false | 0  | العملة               
10  | CUR_VL                | float    | 8    | true     | false | 0  | المبلغ بالعملة       
11  | RATE                  | float    | 8    | true     | false | 0  | تعديل سعر التحويل    
12  | SUM_CD                | nvarchar | 30   | true     | false | 0  | بند إحصائي           
13  | CST_CD                | nvarchar | 30   | true     | false | 0  | مركز التكلفة         
14  | DOC_TY                | int      | 4    | true     | false | 0  |                      
15  | DOC_NO                | nvarchar | 200  | true     | false | 0  | رقم المستند          
16  | Posted                | nvarchar | 2    | true     | false | 0  | الترحيل              
17  | USR                   | nvarchar | 10   | true     | false | 0  | المجموعات المسموحة   
18  | Crtd                  | datetime | 8    | true     | false | 0  |                      
19  | Mdfied                | datetime | 8    | true     | false | 0  |                      
20  | TMP_NO                | int      | 4    | true     | false | 0  |                      
21  | IRMRK                 | nvarchar | 200  | true     | false | 0  |                      
22  | REFS                  | nvarchar | -1   | true     | false | 0  | رقم العملية          
23  | TR_DS_EN              | nvarchar | 4000 | true     | false | 0  |                      
24  | VAL1                  | float    | 8    | true     | false | 0  |                      
25  | VAL2                  | decimal  | 17   | true     | false | 0  |                      
26  | VAL3                  | float    | 8    | true     | false | 0  |                      
27  | TR_DT                 | datetime | 8    | true     | false | 0  | التاريخ              
28  | PRD                   | int      | 4    | true     | false | 0  | الفترة               
29  | EnteredBy             | nvarchar | 24   | true     | false | 0  |                      
30  | UpdatedBy             | nvarchar | 24   | true     | false | 0  |                      
31  | EntryDate             | datetime | 8    | true     | false | 0  |                      
32  | UpdateDate            | datetime | 8    | true     | false | 0  |                      
33  | GL_JRN_CD             | nvarchar | 10   | true     | false | 0  | يومية مقارن          
34  | GL_TR_NO              | int      | 4    | true     | false | 0  | قيد مقارن            
35  | GL_LN_NO              | int      | 4    | true     | false | 0  |                      
36  | intDOC_NO             | int      | 4    | true     | false | 0  |                      
37  | POSTED1               | nvarchar | 2    | true     | false | 0  |                      
38  | POSTED1_DT            | datetime | 8    | true     | false | 0  |                      
39  | POSTED1_BY            | nvarchar | 24   | true     | false | 0  |                      
40  | POSTED1_F1            | nvarchar | 1000 | true     | false | 0  | مسمي 5               
41  | POSTED1_F2            | nvarchar | 30   | true     | false | 0  | الجهة                
42  | POSTED1_F3            | nvarchar | 30   | true     | false | 0  | مسمي 7               
43  | POSTED1_F4            | nvarchar | 30   | true     | false | 0  | مسمي 8               
44  | POSTED1_F5            | nvarchar | 200  | true     | false | 0  | مسمي 9               
45  | POSTED1_F6            | nvarchar | 200  | true     | false | 0  | مسمي 10              
46  | POSTED1_F7            | nvarchar | 200  | true     | false | 0  |                      
47  | SSUM_CD               | nvarchar | 30   | true     | false | 0  |  بند إحصائي فرعي     
48  | DOC_LN_NO             | int      | 4    | true     | false | 0  | رقم السطر في القيد   
49  | DIST_DON              | nvarchar | 2    | true     | false | 0  |                      
50  | DIST_By               | nvarchar | 400  | true     | false | 0  |                      
51  | DIST_DT               | datetime | 8    | true     | false | 0  |                      
52  | DIST_JRN_CD           | nvarchar | 6    | true     | false | 0  |                      
53  | DIST_TR_NO            | int      | 4    | true     | false | 0  |                      
54  | DIST_LN_NO            | int      | 4    | true     | false | 0  |                      
55  | NUM_WRD               | nvarchar | 510  | true     | false | 0  |                      
56  | NEW_REFS              | nvarchar | -1   | true     | false | 0  |                      
57  | PAID_VL               | decimal  | 9    | true     | false | 0  |                      
58  | CHK_NO                | nvarchar | 510  | true     | false | 0  | رقم الشيك            
59  | Itm_CD                | nvarchar | 30   | true     | false | 0  | رقم الصنف ...        
60  | TMP_JRN_CD            | nvarchar | 20   | true     | false | 0  |                      
61  | POSTED_C              | nvarchar | 2    | true     | false | 0  |                      
62  | TMP_GL_JRN_CD         | nvarchar | 30   | true     | false | 0  |                      
63  | TMP_GL_TR_NO          | int      | 4    | true     | false | 0  |                      
64  | KY_TY                 | nvarchar | 2    | true     | false | 0  |                      
65  | COM_ID                | nvarchar | 30   | true     | false | 0  | الوحدة المحاسبية     
66  | BNK_ID                | nvarchar | 30   | true     | false | 0  | اسم البنك            
67  | BNK_BRNCH             | nvarchar | 510  | true     | false | 0  |                      
68  | REFS_X                | nvarchar | 510  | true     | false | 0  |                      
69  | A1_REF                | nvarchar | 60   | true     | false | 0  |                      
70  | REFS_AZ               | nvarchar | 510  | true     | false | 0  |                      
71  | VAL4                  | decimal  | 9    | true     | false | 0  |                      
72  | VAL5                  | decimal  | 9    | true     | false | 0  |                      
73  | doc_dt                | datetime | 8    | true     | false | 0  | تاريخ المستند        
74  | scst_cd               | nvarchar | 50   | true     | false | 0  | مركز التكلفة فرعي    
75  | REP_CD                | nvarchar | 60   | true     | false | 0  |                      
76  | HJ_Crtd               | nvarchar | 20   | true     | false | 0  |                      
77  | HJ_Mdfied             | nvarchar | 20   | true     | false | 0  |                      
78  | HJ_TR_DT              | nvarchar | 20   | true     | false | 0  |                      
79  | HJ_POSTED1_DT         | nvarchar | 20   | true     | false | 0  |                      
80  | HJ_DIST_DT            | nvarchar | 20   | true     | false | 0  |                      
81  | HJ_doc_dt             | nvarchar | 20   | true     | false | 0  |                      
82  | AZ_ACC_NO             | nvarchar | 30   | true     | false | 0  |                      
83  | LC_TYP                | nvarchar | 20   | true     | false | 0  | نوع الإعتماد         
84  | Sp_ty                 | smallint | 2    | true     | false | 0  |                      
85  | POSTED1_F8            | nvarchar | 200  | true     | false | 0  |                      
86  | POSTED1_F9            | nvarchar | 200  | true     | false | 0  |                      
87  | CNTRY_ID              | nvarchar | 30   | true     | false | 0  | الدولة               
88  | ROLL_No               | nvarchar | 40   | true     | false | 0  | رقم الحافظة          
89  | ROLL_DT               | datetime | 8    | true     | false | 0  |                      
90  | HM_SRC                | nvarchar | 100  | true     | false | 0  |                      
91  | HM_REF                | nvarchar | -1   | true     | false | 0  |                      
92  | HM_RULES              | nvarchar | -1   | true     | false | 0  |                      
93  | HM_RULE_LNS           | nvarchar | -1   | true     | false | 0  |                      
94  | Due_Dt                | datetime | 8    | true     | false | 0  | تاريخ فتح المظاريف   
95  | Hj_Due_Dt             | nvarchar | 30   | true     | false | 0  |                      
96  | BDG_SIGN              | smallint | 2    | true     | false | 0  |                      
97  | BDG_SIGN_BY           | nvarchar | 100  | true     | false | 0  |                      
98  | BDG_SIGN_DT           | nvarchar | 100  | true     | false | 0  |                      
99  | BDG_SIGN_NO           | nvarchar | 30   | true     | false | 0  |                      
100 | NM5                   | int      | 4    | true     | false | 0  |                      
101 | NM6                   | int      | 4    | true     | false | 0  |                      
102 | NM7                   | int      | 4    | true     | false | 0  |                      
103 | NM8                   | int      | 4    | true     | false | 0  |                      
104 | NM9                   | int      | 4    | true     | false | 0  |                      
105 | NM10                  | int      | 4    | true     | false | 0  |                      
106 | CNTRY                 | int      | 4    | true     | false | 0  | الدولة               
107 | REF_NO                | nvarchar | 510  | true     | false | 0  | مرجع صيغه العقد      
108 | WF_TR_NO              | int      | 4    | true     | false | 0  |                      
109 | WF_LN_NO              | int      | 4    | true     | false | 0  |                      
110 | HJ_ROLL_DT            | nvarchar | 20   | true     | false | 0  |                      
111 | BK_TR_NO              | nvarchar | 510  | true     | false | 0  |                      
112 | PKID                  | nvarchar | 6    | true     | false | 0  | رقم الوحدة           
113 | FUND_SUM_CD           | nvarchar | 100  | true     | false | 0  | مصادر تمويل الجهات   
114 | SP_NO                 | nvarchar | 20   | true     | false | 0  | التخصيص              
115 | SP_ID                 | nvarchar | 60   | true     | false | 0  | المانح               
116 | SPD_ID                | nvarchar | 20   | true     | false | 0  | المشروع              
117 | DedTYP                | nvarchar | 40   | true     | false | 0  |                      
118 | Fpon                  | nvarchar | 50   | true     | false | 0  |                      
119 | Tpon                  | nvarchar | 50   | true     | false | 0  |                      
120 | pon_dt                | datetime | 8    | true     | false | 0  |                      
121 | To_Com_Id             | nvarchar | 30   | true     | false | 0  | إلى وحدة محاسبية     
122 | TO_ACC_NO             | nvarchar | 100  | true     | false | 0  | الرقم المقابل        
123 | TotFaJrnlVal          | decimal  | 13   | true     | false | 0  |                      
124 | CURRENT_MILEAGE       | decimal  | 13   | true     | false | 0  |                      
125 | previous_mileage      | decimal  | 13   | true     | false | 0  |                      
126 | CostIndicator         | int      | 4    | true     | false | 0  |                      
127 | SEG1_CD               | nvarchar | 200  | true     | false | 0  |                      
128 | SEG2_CD               | nvarchar | 200  | true     | false | 0  |                      
129 | SEG3_CD               | nvarchar | 200  | true     | false | 0  |                      
130 | SEG4_CD               | nvarchar | 200  | true     | false | 0  |                      
131 | SEG5_CD               | nvarchar | 200  | true     | false | 0  |                      
132 | SEG6_CD               | nvarchar | 200  | true     | false | 0  |                      
133 | SEG7_CD               | nvarchar | 200  | true     | false | 0  |                      
134 | SEG8_CD               | nvarchar | 200  | true     | false | 0  |                      
135 | SEG9_CD               | nvarchar | 200  | true     | false | 0  |                      
136 | SEG10_CD              | nvarchar | 200  | true     | false | 0  |                      
137 | SEG11_CD              | nvarchar | 200  | true     | false | 0  |                      
138 | SEG12_CD              | nvarchar | 200  | true     | false | 0  |                      
139 | SEG13_CD              | nvarchar | 200  | true     | false | 0  |                      
140 | SEG14_CD              | nvarchar | 200  | true     | false | 0  |                      
141 | SEG15_CD              | nvarchar | 200  | true     | false | 0  |                      
142 | NEW_TR_NO             | int      | 4    | true     | false | 0  |                      
143 | MAINACC_NO            | nvarchar | 40   | true     | false | 0  |                      
144 | C_Jrn_Cd              | nvarchar | 10   | true     | false | 0  |                      
145 | c_Tr_No               | int      | 4    | true     | false | 0  | العملية              
146 | is_Reversed_Copy      | int      | 4    | true     | false | 0  |                      
147 | Linq_Id               | nvarchar | 100  | true     | false | 0  | مسلسل                
148 | MainAccNo             | nvarchar | 20   | true     | false | 0  |                      
149 | Tr_Type               | smallint | 2    | true     | false | 0  | نوع الحركة           
151 | AZ_OPRTN_NO           | nvarchar | 800  | true     | false | 0  | رقم العملية          
310 | TRNSFR_TO_ENTITY      | nvarchar | 400  | true     | false | 0  | الجهة المحول إليها   
311 | TRNSFR_BNK            | nvarchar | 400  | true     | false | 0  | البنك                
312 | TRNSFR_BNK_BRNCH      | nvarchar | 400  | true     | false | 0  | فرع البنك            
313 | TRNSFR_BNK_ACC_NO     | nvarchar | 200  | true     | false | 0  | رقم حساب البنك       
314 | TRNSFR_OLD_BNK_ACC_NO | nvarchar | 200  | true     | false | 0  | رقم حساب البنك القديم
