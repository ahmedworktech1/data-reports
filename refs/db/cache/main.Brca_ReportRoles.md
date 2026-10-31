# erpx_sandoaa_br.Brca.ReportRoles

ord | col                     | type      | len | nullable | ident | pk | ar           
----+-------------------------+-----------+-----+----------+-------+----+--------------
1   | Id                      | int       | 4   | false    | false | 1  | الكود        
2   | Module                  | int       | 4   | false    | false | 1  |              
3   | DescriptionArabic       | nvarchar  | -1  | true     | false | 0  | الوصف عربى   
4   | DescriptionEnglish      | nvarchar  | -1  | true     | false | 0  | الوصف إنجليزى
5   | PermissionGroups        | nvarchar  | -1  | true     | false | 0  |              
6   | ReportNameArabic        | nvarchar  | -1  | true     | false | 0  |              
7   | ReportNameEnglish       | nvarchar  | -1  | true     | false | 0  |              
8   | MvcItemId               | nvarchar  | -1  | true     | false | 0  | الشاشة       
9   | FilterFolderId          | int       | 4   | true     | false | 0  |              
10  | EnteredBy               | nvarchar  | -1  | true     | false | 0  |              
11  | UpdatedBy               | nvarchar  | -1  | true     | false | 0  |              
12  | EntryDate               | datetime2 | 8   | true     | false | 0  |              
13  | UpdateDate              | datetime2 | 8   | true     | false | 0  |              
15  | DatabaseName            | int       | 4   | true     | false | 0  | البيانات     
16  | IsSqlReport             | bit       | 1   | false    | false | 0  |              
17  | UseSqlFromReport        | bit       | 1   | false    | false | 0  |              
18  | AggregationLevel        | smallint  | 2   | true     | false | 0  |              
19  | IsColumnReport          | bit       | 1   | false    | false | 0  |              
20  | PivotColumns            | nvarchar  | -1  | true     | false | 0  |              
21  | ReportFolder            | int       | 4   | true     | false | 0  |              
22  | ReportType              | int       | 4   | true     | false | 0  |              
23  | MaxPrintPowerUsers      | nvarchar  | -1  | true     | false | 0  |              
24  | MaxPrintingCount        | int       | 4   | true     | false | 0  |              
25  | MaxPrintingCountPerUser | int       | 4   | true     | false | 0  |              
26  | UniqueIdFields          | nvarchar  | 900 | true     | false | 0  |              
27  | PreventPrintPowerUsers  | nvarchar  | -1  | true     | false | 0  |              
28  | ShowPreventPrintButton  | bit       | 1   | false    | false | 0  |              
29  | new_id                  | int       | 4   | true     | false | 0  |              
