# glx_sandoaa.dbo.GLJRNLH

ord | col              | type     | len | nullable | ident | pk | ar               
----+------------------+----------+-----+----------+-------+----+------------------
1   | JRN_CD           | nvarchar | 10  | false    | false | 1  | طريقة الطرح      
2   | TR_NO            | int      | 4   | false    | false | 1  | رقم العملية      
3   | LOC              | nvarchar | 10  | true     | false | 0  |                  
4   | TR_DT            | datetime | 8   | true     | false | 0  | التاريخ          
5   | HDSCR            | nvarchar | 510 | true     | false | 0  | الوصف            
6   | PRD              | int      | 4   | true     | false | 0  | الفترة           
7   | TR_Src           | nvarchar | 50  | true     | false | 0  | مصدر القيد       
8   | TMP_NO           | int      | 4   | true     | false | 0  |                  
9   | HDSCR_EN         | nvarchar | 400 | true     | false | 0  | الوصف انجليزي    
10  | EnteredBy        | nvarchar | 24  | true     | false | 0  |                  
11  | UpdatedBy        | nvarchar | 24  | true     | false | 0  |                  
12  | EntryDate        | datetime | 8   | true     | false | 0  |                  
13  | UpdateDate       | datetime | 8   | true     | false | 0  |                  
14  | GL_JRN_CD        | nvarchar | 10  | true     | false | 0  | يومية مقارن      
15  | GL_TR_NO         | int      | 4   | true     | false | 0  | قيد مقارن        
16  | REVISD           | nvarchar | 40  | true     | false | 0  | حالة المراجعة    
17  | REVISD_BY        | nvarchar | 400 | true     | false | 0  | مراجعة بواسطة    
18  | REVISD_DT        | datetime | 8   | true     | false | 0  |                  
19  | TOT_NUM_WRD      | nvarchar | 510 | true     | false | 0  |                  
20  | HDOC_TY          | int      | 4   | true     | false | 0  | نوع المستند      
21  | HDOC_NO          | nvarchar | 200 | true     | false | 0  | رقم المستند      
22  | HDOC_DT          | datetime | 8   | true     | false | 0  | ت. الاستحقاق     
23  | HCHK_NO          | nvarchar | 510 | true     | false | 0  | رقم الشيك        
24  | TMP_JRN_CD       | nvarchar | 20  | true     | false | 0  |                  
25  | TMP_GL_JRN_CD    | nvarchar | 30  | true     | false | 0  |                  
26  | TMP_GL_TR_NO     | int      | 4   | true     | false | 0  |                  
27  | COM_ID           | nvarchar | 30  | true     | false | 0  | الوحدة المحاسبية 
28  | HBNK_ID          | nvarchar | 30  | true     | false | 0  | مسحوبا على       
29  | HBNK_BRNCH       | nvarchar | 510 | true     | false | 0  | فرع البنك        
30  | D_JRN_CD         | nvarchar | 20  | true     | false | 0  | اليومية المقابلة 
31  | D_TR_NO          | int      | 4   | true     | false | 0  | القيد المقابل    
32  | REFS_X           | nvarchar | 510 | true     | false | 0  |                  
33  | A1_REF           | nvarchar | 60  | true     | false | 0  |                  
34  | TO_NAM           | nvarchar | 510 | true     | false | 0  | المستفيدين       
35  | HJ_TR_DT         | nvarchar | 20  | true     | false | 0  |                  
36  | HJ_REVISD_DT     | nvarchar | 20  | true     | false | 0  |                  
37  | HJ_HDOC_DT       | nvarchar | 20  | true     | false | 0  |                  
38  | BDG_SIGN         | smallint | 2   | true     | false | 0  |                  
39  | BDG_SIGN_BY      | nvarchar | 100 | true     | false | 0  |                  
40  | BDG_SIGN_DT      | nvarchar | 100 | true     | false | 0  |                  
41  | BDG_SIGN_NO      | nvarchar | 30  | true     | false | 0  |                  
42  | prntd            | smallint | 2   | true     | false | 0  | حالة الطباعة     
43  | CNTRY            | int      | 4   | true     | false | 0  | الدولة           
44  | RepCd            | nvarchar | -1  | true     | false | 0  |                  
45  | WF_TR_NO         | int      | 4   | true     | false | 0  |                  
46  | WF_LN_NO         | int      | 4   | true     | false | 0  |                  
47  | REP_CD           | nvarchar | 60  | true     | false | 0  |                  
48  | HBK_TR_NO        | nvarchar | 510 | true     | false | 0  |                  
49  | TMP_VAL          | float    | 8   | true     | false | 0  |                  
50  | LC_TYP           | nvarchar | 20  | true     | false | 0  | نوع الإعتماد     
51  | SUM_CD           | nvarchar | 30  | true     | false | 0  | بند إحصائي       
52  | CST_CD           | nvarchar | 30  | true     | false | 0  | مركز التكلفة     
53  | DIST_DON         | nvarchar | 2   | true     | false | 0  |                  
54  | To_Com_Id        | nvarchar | 30  | true     | false | 0  | إلى وحدة محاسبية 
55  | HPOSTED1_F1      | nvarchar | 30  | true     | false | 0  |                  
56  | HPOSTED1_F2      | nvarchar | 30  | true     | false | 0  |                  
57  | HPOSTED1_F3      | nvarchar | 30  | true     | false | 0  |                  
58  | NEW_TR_NO        | int      | 4   | true     | false | 0  |                  
59  | C_Jrn_Cd         | nvarchar | 10  | true     | false | 0  |                  
60  | c_Tr_No          | int      | 4   | true     | false | 0  | العملية          
61  | is_Reversed_Copy | int      | 4   | true     | false | 0  |                  
62  | AZ_TR_NO         | int      | 4   | true     | false | 0  | رقم الاذن        
63  | AZ_LOC           | nvarchar | 16  | true     | false | 0  | الفرع            
64  | AZ_TR_TY         | smallint | 2   | true     | false | 0  | نوع الحركة       
65  | AZ_OPRTN_NO      | nvarchar | 800 | true     | false | 0  | رقم العملية      
66  | AZ_OPRTN_TY      | smallint | 2   | true     | false | 0  | نوع العملية      
67  | AZ_OPRTN_NM      | nvarchar | 200 | true     | false | 0  | اسم العملية      
68  | P_JRN_CD         | varchar  | 5   | true     | false | 0  | اليومية المقابلة 
69  | P_TR_NO          | varchar  | 20  | true     | false | 0  | رقم القيد المقابل
