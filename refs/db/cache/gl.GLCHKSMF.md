# glx_sandoaa.dbo.GLCHKSMF

ord | col            | type     | len  | nullable | ident | pk | ar                      
----+----------------+----------+------+----------+-------+----+-------------------------
1   | CHK_TYP        | smallint | 2    | false    | false | 1  | النوع                   
2   | CHK_No         | nvarchar | 60   | false    | false | 1  | رقم الشيك               
3   | CRDB           | tinyint  | 1    | true     | false | 0  | قبض/دفع                 
4   | RPAcc_No       | nvarchar | 30   | true     | false | 0  | رقم الحساب (عميل/مورد)  
5   | Notes_Acc      | nvarchar | 30   | true     | false | 0  | حساب أ.ق.د              
6   | DOC_NO         | nvarchar | 60   | true     | false | 0  | رقم الشيك الدفتري       
7   | AMT            | float    | 8    | true     | false | 0  | المبلغ                  
8   | AMT_PAID       | float    | 8    | true     | false | 0  | المبلغ المسدد           
9   | Tot_Expns      | float    | 8    | true     | false | 0  | إجمالي مصروفات          
10  | ISU_DT         | datetime | 8    | true     | false | 0  | تاريخ تحرير             
11  | DUE_DT         | datetime | 8    | true     | false | 0  | تاريخ استحقاق           
12  | BNK            | nvarchar | 160  | true     | false | 0  | البنك المسحوب عليه      
13  | NAM            | nvarchar | 160  | true     | false | 0  | اسم المسحوب عليه        
14  | ROLL_No        | nvarchar | 30   | true     | false | 0  | رقم الحافظة             
15  | LAST_ACC       | nvarchar | 30   | true     | false | 0  | اخر حساب                
16  | Stat           | tinyint  | 1    | true     | false | 0  | الحالة                  
17  | STAT_DT        | datetime | 8    | true     | false | 0  | تاريخ الحالة            
18  | RMRK           | nvarchar | -1   | true     | false | 0  | ملاحظات                 
19  | DEP_BNK        | nvarchar | 50   | true     | false | 0  | بنك الإيداع             
20  | ByHand         | nvarchar | 60   | true     | false | 0  | مناولة                  
21  | TRNSAcc        | nvarchar | 30   | true     | false | 0  |                         
22  | posted         | nvarchar | 2    | true     | false | 0  | نوع السند               
23  | EnteredBy      | nvarchar | 100  | true     | false | 0  |                         
24  | UpdatedBy      | nvarchar | 100  | true     | false | 0  |                         
25  | EntryDate      | datetime | 8    | true     | false | 0  |                         
26  | UpdateDate     | datetime | 8    | true     | false | 0  |                         
27  | TR_TY          | smallint | 2    | true     | false | 0  | نوع الإذن               
28  | TR_NO          | int      | 4    | true     | false | 0  | رقم القيد               
29  | LN_NO          | int      | 4    | true     | false | 0  |                         
30  | CUR_CD         | nvarchar | 16   | true     | false | 0  | اسم العملة              
31  | RATE           | decimal  | 9    | true     | false | 0  | سعر التحويل             
32  | CUR_VL         | decimal  | 9    | true     | false | 0  | المبلغ بالعملة الأجنبية 
33  | REP_CD         | nvarchar | 16   | true     | false | 0  | المندوب                 
34  | REP_CD1        | nvarchar | 16   | true     | false | 0  | مندوب التحصيل           
35  | COM_ID         | nvarchar | 30   | true     | false | 0  | الوحدة المحاسبية        
36  | CST_CD         | nvarchar | 30   | true     | false | 0  | مركز التكلفة            
37  | SUM_CD         | nvarchar | 30   | true     | false | 0  | بند إحصائى              
38  | SSUM_CD        | nvarchar | 30   | true     | false | 0  | بند إحصائى فرعي         
39  | REFS           | nvarchar | 50   | true     | false | 0  | رقم العملية             
40  | JRN_CD         | nvarchar | 10   | true     | false | 0  | يومية الإذن             
41  | CHK_stat       | smallint | 2    | true     | false | 0  | المرحلة                 
42  | chk_stat_DT    | datetime | 8    | true     | false | 0  | تاريخ المرحلة           
43  | SNO            | int      | 4    | true     | false | 0  | رقم التسلسل             
44  | batchid        | nvarchar | 30   | true     | false | 0  |                         
45  | RMRK1          | nvarchar | 300  | true     | false | 0  | و ذلك عن                
46  | RPACC_NO1      | nvarchar | 50   | true     | false | 0  | رقم الحساب 1            
47  | SUM_CD1        | nvarchar | 50   | true     | false | 0  | بند إحصائى              
48  | SSUM_CD1       | nvarchar | 50   | true     | false | 0  | بند إحصائى فرعي         
49  | AMT1           | float    | 8    | true     | false | 0  | المبلغ                  
50  | RPACC_NO2      | nvarchar | 50   | true     | false | 0  | رقم الحساب 2            
51  | SUM_CD2        | nvarchar | 50   | true     | false | 0  | بند إحصائى              
52  | SSUM_CD2       | nvarchar | 50   | true     | false | 0  | بند إحصائى فرعي         
53  | AMT2           | float    | 8    | true     | false | 0  | المبلغ                  
54  | RPACC_NO3      | nvarchar | 50   | true     | false | 0  | رقم الحساب 3            
55  | AMT3           | decimal  | 9    | true     | false | 0  | المبلغ                  
56  | SUM_CD3        | nvarchar | 50   | true     | false | 0  | بند إحصائى              
57  | SSUM_CD3       | nvarchar | 50   | true     | false | 0  | بند إحصائى فرعي         
58  | HJ_ISU_DT      | nvarchar | 20   | true     | false | 0  |                         
59  | HJ_DUE_DT      | nvarchar | 20   | true     | false | 0  |                         
60  | HJ_STAT_DT     | nvarchar | 20   | true     | false | 0  |                         
61  | HJ_chk_stat_DT | nvarchar | 20   | true     | false | 0  |                         
62  | ROLL_DT        | datetime | 8    | true     | false | 0  |                         
63  | BANK_NOTES     | nvarchar | -1   | true     | false | 0  |                         
64  | M_CONV_RATE    | float    | 8    | true     | false | 0  |                         
65  | M_TOT_PRICE    | float    | 8    | true     | false | 0  |                         
66  | VOUCHER_NO     | nvarchar | 30   | true     | false | 0  |                         
67  | ref_no         | nvarchar | 30   | true     | false | 0  | مرجع صيغه العقد         
68  | arrv_dt        | datetime | 8    | true     | false | 0  |                         
69  | RMRK2          | nvarchar | 6000 | true     | false | 0  | ملاحظات إضافية          
70  | HJ_ROLL_DT     | nvarchar | 20   | true     | false | 0  |                         
71  | HJ_arrv_dt     | nvarchar | 20   | true     | false | 0  |                         
72  | WF_TR_NO       | int      | 4    | true     | false | 0  |                         
73  | WF_LN_NO       | int      | 4    | true     | false | 0  |                         
74  | SCST_CD        | nvarchar | 100  | true     | false | 0  | مركز التكلفة الفرعي     
75  | CRDB2          | smallint | 2    | true     | false | 0  |                         
76  | CRDB3          | smallint | 2    | true     | false | 0  |                         
77  | posted1_f1     | nvarchar | 100  | true     | false | 0  | مسمي 5                  
78  | posted1_f2     | nvarchar | 100  | true     | false | 0  | الجهة                   
79  | posted1_f3     | nvarchar | 100  | true     | false | 0  | مسمي 7                  
80  | AZ_TR_NO       | int      | 4    | true     | false | 0  | رقم الحركة              
81  | AZ_LOC         | nvarchar | 16   | true     | false | 0  | الفرع                   
82  | AZ_TR_TY       | smallint | 2    | true     | false | 0  | نوع الحركة              
83  | AZ_OPRTN_NO    | nvarchar | 800  | true     | false | 0  | رقم العملية             
84  | AZ_OPRTN_TY    | smallint | 2    | true     | false | 0  | نوع العملية             
85  | AZ_OPRTN_NM    | nvarchar | 200  | true     | false | 0  | اسم العملية             
86  | SEG1_CD        | nvarchar | 100  | true     | false | 0  |                         
87  | SEG2_CD        | nvarchar | 100  | true     | false | 0  |                         
88  | SEG3_CD        | nvarchar | 100  | true     | false | 0  |                         
89  | SEG4_CD        | nvarchar | 100  | true     | false | 0  |                         
90  | SEG5_CD        | nvarchar | 100  | true     | false | 0  |                         
91  | SEG6_CD        | nvarchar | 100  | true     | false | 0  |                         
92  | SEG7_CD        | nvarchar | 100  | true     | false | 0  |                         
93  | SEG8_CD        | nvarchar | 100  | true     | false | 0  |                         
94  | SEG9_CD        | nvarchar | 100  | true     | false | 0  |                         
95  | SEG10_CD       | nvarchar | 100  | true     | false | 0  |                         
96  | SEG11_CD       | nvarchar | 100  | true     | false | 0  |                         
97  | SEG12_CD       | nvarchar | 100  | true     | false | 0  |                         
98  | SEG13_CD       | nvarchar | 100  | true     | false | 0  |                         
99  | SEG14_CD       | nvarchar | 100  | true     | false | 0  |                         
100 | SEG15_CD       | nvarchar | 100  | true     | false | 0  |                         
101 | BNK_NO         | nvarchar | 100  | true     | false | 0  | اسم البنك               
102 | BBR_NO         | int      | 4    | true     | false | 0  | اسم الفرع               
103 | BACC_NO        | nvarchar | 60   | true     | false | 0  | رقم الحساب البنكي       
104 | SIGN_RESP1     | nvarchar | 200  | true     | false | 0  | التوقيع الأول للمسؤولين 
105 | SIGN_RESP2     | nvarchar | 200  | true     | false | 0  | التوقيع الثاني للمسؤولين
106 | DocBk          | nvarchar | -1   | true     | false | 0  | دفتر الشيك              
107 | DocNo2         | nvarchar | 300  | true     | false | 0  | رقم السند               
108 | Document_Type  | int      | 4    | true     | false | 0  | نوع المستند             
109 | BNK_TRNS       | smallint | 2    | true     | false | 0  |                         
110 | TR_SRC         | nvarchar | 8    | true     | false | 0  | مصدر القيد              
