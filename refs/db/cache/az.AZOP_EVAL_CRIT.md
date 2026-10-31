# azx_sandoaa.dbo.AZOP_EVAL_CRIT

ord | col       | type     | len  | nullable | ident | pk | ar         
----+-----------+----------+------+----------+-------+----+------------
1   | TR_NO     | int      | 4    | false    | false | 1  | رقم الحركة 
2   | SNO       | int      | 4    | false    | false | 1  | رقم التسلسل
3   | EC_DESC   | nvarchar | 8000 | true     | false | 0  |            
4   | EC_WEIGHT | int      | 4    | true     | false | 0  |            
5   | EC_SCORE  | int      | 4    | true     | false | 0  |            
