# azx_sandoaa.dbo.AZTRD_EVAL_CRIT

ord | col       | type     | len  | nullable | ident | pk | ar         
----+-----------+----------+------+----------+-------+----+------------
1   | LOC       | nvarchar | 16   | false    | false | 1  | الفرع      
2   | TR_TY     | smallint | 2    | false    | false | 1  | رقم الحركة 
3   | TR_NO     | int      | 4    | false    | false | 1  | رقم الحركة 
4   | LN_NO     | int      | 4    | false    | false | 1  |            
5   | SNO       | int      | 4    | false    | false | 1  | رقم التسلسل
6   | EC_DESC   | nvarchar | 8000 | true     | false | 0  |            
7   | EC_WEIGHT | int      | 4    | true     | false | 0  |            
8   | EC_SCORE  | int      | 4    | true     | false | 0  |            
