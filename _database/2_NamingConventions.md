---
layout: database-doc
title: Naming conventions
---

## General

- Ensure the name is unique and does not exist as a reserved keyword.
- Keep the length to a maximum of 30 bytes—in practice this is 30 characters unless you are using multi-byte character set.
- Names must begin with a letter and may not end with an underscore.
- Only use letters, numbers and underscores in names (In Camel Case format we don’t need to use underscore).
- Avoid the use of multiple consecutive underscores—these can be hard to read.
- Use underscores where you would naturally include a space in the name (first name becomes first_name/FirstName). (In Camel Case format we don’t need to use underscore).
- Avoid abbreviations and if you have to use them make sure they are commonly understood.

```sql
SELECT first_name/FirstName
  FROM staff;

```
## Tables

- Use a collective name or, less ideally, a plural form. For example (in order of preference) staff and employees.
- Do not prefix with tbl or any other such descriptive prefix or Hungarian notation.
- Never give a table the same name as one of its columns and vice versa.

## Columns

- Always use the singular name.
- Where possible avoid simply using id as the primary identifier for the table (Instead use meaningful name like example FamilyID).
- Do not add a column with the same name as its table and vice versa.

## Aliasing or correlations

- Always include the AS keyword—makes it easier to read as it is explicit.
- For computed data (SUM() or AVG()) use the name you would give it were it a column defined in the schema.

```sql
SELECT SUM(s.Amount) AS TotalLoanAmount
  FROM USR_CRM.dbo.Family_loan_Structure AS s;

```

## Stored procedures

- The name must contain a verb at the end (GET/SET).
- Return only one result set(table) per stored Procedure.
- Try to do minimum number of tables DML per stored Procedure. Technically 1 per stored procedure (Sometimes we have to do more avoid this as much you can ask for more API calls).
- Do not prefix with sp_ or any other such descriptive prefix or Hungarian notation. Start with api_..... 
- Please use synonyms for tables ( incase we change the database/table name in future it is easy to change the synonyms). Synonyms format (APIS_[DatabaseName]_[TableName]
- Please use the function at the minimum level in the sps, (it may cause big performance hit)


## Functions

- Please use the prefix apif_.....
- Please don’t call function within function.

## Uniform suffixes

The following suffixes have a universal meaning ensuring the columns can be read and understood easily from SQL code. Use the correct suffix where appropriate.

- _id—a unique identifier such as a column that is a primary key.
-  _status—flag value or some other status of any type such as publication_status.
- 	_total—the total or sum of a collection of values.
- _num—denotes the field contains any kind of number.
- _name—signifies a name such as first_name.
- _seq—contains a contiguous sequence of values.
- _date—denotes a column that contains the date of something.
