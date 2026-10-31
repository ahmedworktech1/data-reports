# azx_sandoaa.dbo.AZOFFR_D

ord | col        | type     | len  | nullable | ident | pk | ar
----+------------+----------+------+----------+-------+----+---
1   | ITM_TY     | smallint | 2    | true     | false | 0  |   
2   | ITM_CD     | nvarchar | 26   | true     | false | 0  |   
3   | FDT        | datetime | 8    | true     | false | 0  |   
4   | TDT        | datetime | 8    | true     | false | 0  |   
5   | LN_NO      | int      | 4    | false    | false | 1  |   
6   | OFFR_TY    | smallint | 2    | true     | false | 0  |   
7   | QTY        | float    | 8    | true     | false | 0  |   
8   | OITM_CD    | nvarchar | 26   | true     | false | 0  |   
9   | OQTY       | decimal  | 9    | true     | false | 0  |   
10  | OUNT_PRC   | float    | 8    | true     | false | 0  |   
11  | RMRK       | nvarchar | 100  | true     | false | 0  |   
12  | EnteredBy  | nvarchar | 60   | true     | false | 0  |   
13  | UpdatedBy  | nvarchar | 60   | true     | false | 0  |   
14  | EntryDate  | datetime | 8    | true     | false | 0  |   
15  | UpdateDate | datetime | 8    | true     | false | 0  |   
16  | NEW_LN     | smallint | 2    | true     | false | 0  |   
17  | RAT        | smallint | 2    | true     | false | 0  |   
18  | DISC       | smallint | 2    | true     | false | 0  |   
19  | QTY_LMT    | decimal  | 9    | true     | false | 0  |   
20  | WithPrc    | smallint | 2    | true     | false | 0  |   
21  | bns_count  | int      | 4    | true     | false | 0  |   
22  | SNO        | int      | 4    | false    | false | 1  |   
23  | TRTYS      | nvarchar | 400  | true     | false | 0  |   
24  | PKID       | nvarchar | 40   | true     | false | 0  |   
25  | ACC_NOS    | nvarchar | 2000 | true     | false | 0  |   
26  | RANKS      | nvarchar | 2000 | true     | false | 0  |   
27  | HJ_FDT     | nvarchar | 20   | true     | false | 0  |   
28  | HJ_TDT     | nvarchar | 20   | true     | false | 0  |   
29  | MCID       | nvarchar | 300  | true     | false | 0  |   
30  | DISC_RNK   | int      | 4    | true     | false | 0  |   
31  | PNTQTY     | float    | 8    | true     | false | 0  |   
32  | PNTEXPR    | int      | 4    | true     | false | 0  |   
33  | PNTPRC     | float    | 8    | true     | false | 0  |   
34  | PNTMIN     | float    | 8    | true     | false | 0  |   
35  | PNTSPNT    | float    | 8    | true     | false | 0  |   
36  | COM_ID     | nvarchar | 30   | true     | false | 0  |   
37  | WF_TR_NO   | int      | 4    | true     | false | 0  |   
38  | WF_LN_NO   | int      | 4    | true     | false | 0  |   
