# azx_sandoaa.dbo.AZOFFR_H

ord | col        | type     | len | nullable | ident | pk | ar
----+------------+----------+-----+----------+-------+----+---
1   | ITM_TY     | smallint | 2   | true     | false | 0  |   
2   | ITM_CD     | nvarchar | 74  | true     | false | 0  |   
3   | FDT        | datetime | 8   | true     | false | 0  |   
4   | TDT        | datetime | 8   | true     | false | 0  |   
5   | OFFR_TY    | smallint | 2   | true     | false | 0  |   
6   | RMRK       | nvarchar | 100 | true     | false | 0  |   
7   | EnteredBy  | nvarchar | 60  | true     | false | 0  |   
8   | UpdatedBy  | nvarchar | 60  | true     | false | 0  |   
9   | EntryDate  | datetime | 8   | true     | false | 0  |   
10  | UpdateDate | datetime | 8   | true     | false | 0  |   
11  | bns_count  | int      | 4   | true     | false | 0  |   
12  | ITMS       | nvarchar | 500 | true     | false | 0  |   
13  | QTYS       | nvarchar | 500 | true     | false | 0  |   
14  | TOT_QTY    | decimal  | 9   | true     | false | 0  |   
15  | sno        | int      | 4   | false    | true  | 1  |   
16  | DSCR       | nvarchar | 500 | true     | false | 0  |   
17  | QTY_CND    | int      | 4   | true     | false | 0  |   
18  | HJ_FDT     | nvarchar | 20  | true     | false | 0  |   
19  | HJ_TDT     | nvarchar | 20  | true     | false | 0  |   
20  | MCID       | nvarchar | 300 | true     | false | 0  |   
21  | TOT_VAL    | float    | 8   | true     | false | 0  |   
22  | COM_ID     | nvarchar | 30  | true     | false | 0  |   
23  | WF_TR_NO   | int      | 4   | true     | false | 0  |   
24  | WF_LN_NO   | int      | 4   | true     | false | 0  |   
