---
layout: database-doc
title: General
---

## Do
- 	DON'T ASSUME, ALWAYS ASK THE QUESTIONS. 
- 	Use consistent and descriptive identifiers and names.
-   If it is user changeable table then it should have IsActive Flag and Audit fields (DateCreated, DateLastModified, CreatedUserID,LastModifiedUserID). CTRL table (Ref tables doesn’t need those fields)
- 	Please create Date or DatetimeOffset Datatype field. 

1. 	If it is DATETIMEOFFSET type column and when set the GETDATE() as datetime value  then no need to convert to UTC, we can store as it is (server time is UTC time) and in the get sp we need to convert to local datetime field.
2. 	If it is Date type column and when set the GETDATE() as Date field value then we need to convert to Local date and store it. In the get sp no need for conversion.
3. 	If it is Date type column and when set the user input value as Date field value then NO conversion needed for set and get sps.

- Please Make sure if it is Not NULL value column then create it as Not Null value column. 
- Make judicious use of white space and indentation to make code easier to read.
- Try to use only standard SQL functions instead of vendor specific functions for reasons of portability.
- Keep code succinct and devoid of redundant SQL—such as unnecessary quoting or parentheses or WHEREclauses that can otherwise be derived.
- Include comments in SQL code where necessary. Use the C style opening /* and closing */ where possible otherwise precede comments with -- and finish them with a new line.
- Camel Cases (Do or Avoid?)


## Avoid

- Descriptive prefixes or Hungarian notation such as sp_ or tbl.
- Hard deletion on new tables (set IsActive Flag to 0.)
- Left outer join if the join table depends on the first table or join table is part of the where condition – Use Inner join in those cases (Please understand the relationship between tables when write queries). 
```sql
SELECT FC.first_name
FROM USR_CRM.dbo.Family_Client FC
LEFT OUTER JOIN USR_CRM.dbo.Family F ON FC.FamilyID=F.FamilyID
WHERE F.FamilyID=41563;
```
- Plurals—use the more natural collective term where possible instead. For example staff instead of employees or people instead of individuals.
- Quoted identifiers—if you must use them then stick to SQL92 double quotes for portability (you may need to configure your SQL server to support this depending on vendor).
- Object oriented design principles should not be applied to SQL or database structures.
