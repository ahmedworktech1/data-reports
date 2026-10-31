# archx_sandoaa.dbo.Reports_Filter

ord | col             | type     | len | nullable | ident | pk | ar       
----+-----------------+----------+-----+----------+-------+----+----------
1   | Ln_No           | int      | 4   | false    | false | 1  |          
2   | Conditions_Type | smallint | 2   | true     | false | 0  |          
3   | Rpt_Lnks        | nvarchar | 300 | true     | false | 0  |          
4   | EnteredBy       | nvarchar | 200 | true     | false | 0  |          
5   | UpdatedBy       | nvarchar | 200 | true     | false | 0  |          
6   | EntryDate       | datetime | 8   | true     | false | 0  |          
7   | UpdateDate      | datetime | 8   | true     | false | 0  |          
8   | Form_Id         | int      | 4   | false    | false | 1  | كود الشكل
9   | Tab_Type        | smallint | 2   | false    | false | 1  | نوع التاب
