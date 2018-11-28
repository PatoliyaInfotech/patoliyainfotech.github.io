---
layout: database-doc
title: Query syntax
---

## Reserved words

Always use uppercase for the reserved keywords like SELECT and WHERE.

It is best to avoid the abbreviated keywords and use the full length ones where available (prefer ABSOLUTE to ABS).

Do not use database server specific keywords where an ANSI SQL keyword already exists performing the same function. This helps to make code more portable.

```sql
SELECT FirstName
  FROM USR_CRM.dbo.family_Client AS FC
 WHERE fc.DOB > '1980-09-30';

```
## White space

To make the code easier to read it is important that the correct complement of spacing is used. Do not crowd code or remove natural language spaces.

### Spaces

Spaces should be used to line up the code so that the root keywords all end on the same character boundary. This forms a river down the middle making it easy for the readers eye to scan over the code and separate the keywords from the implementation detail. Rivers are bad in typography, but helpful here.

```sql
SELECT f.FirstName,
        AVG(f.DOB) AS AverageDOB , 
  FROM USR_CRM.dbo.Family_Client AS f
  WHERE f.FirstName = 'Banksia'
     OR f.FirstName = 'Sheoak'
     OR f.FirstName = 'Wattle'
  GROUP BY f.FirstName, f.CreatedDate)


```

Notice that SELECT, FROM, etc. are all right aligned while the actual column names and implementation specific details are left aligned.

Although not exhaustive always include spaces:
- 	before and after equals (=)
- 	after commas (,)
- 	surrounding apostrophes (') where not within parentheses or with a trailing comma or semicolon.

```sql
SELECT a.title, a.release_date, a.recording_date
  FROM albums AS a
 WHERE a.title = 'Charcoal Lane'
    OR a.title = 'The New Danger';

```

## Line spacing

Always include newlines/vertical space:

- 	before AND or OR
- 	after semicolons to separate queries for easier reading
- 	after each keyword definition
- 	after a comma when separating multiple columns into logical groups
- 	to separate code into related sections, which helps to ease the readability of large chunks of code.

Keeping all the keywords aligned to the righthand side and the values left aligned creates a uniform gap down the middle of query. It makes it much easier to scan the query definition over quickly too.

```sql
INSERT INTO USR_CRM.dbo.Family_Client (FirstName, DOB)
VALUES ('Chander’, '1990-01-01 01:01:01.00000'),
       ('Dalnger', '2008-01-01 01:01:01.00000');
UPDATE USR_CRM.dbo.Family_Client
   SET DOB = '1990-01-01 01:01:01.00000'
 WHERE FirstName = ' Dalnger’;
SELECT a. FirstName,
       a.DOB
  FROM USR_CRM.dbo.Family_Client AS a
 WHERE a.FirstName = 'Chander'
    OR a.FirstName = 'Dalnger';

```

## Subqueries

Subqueries should also be aligned to the right side of the river and then laid out using the same style as any other query. Sometimes it will make sense to have the closing parenthesis on a new line at the same character position as its opening partner—this is especially true where you have nested subqueries.

```sql
SELECT r.last_name,
       (SELECT MAX(YEAR(championship_date))
          FROM champions AS c
         WHERE c.last_name = r.last_name
           AND c.confirmed = 'Y') AS last_championship_year
  FROM riders AS r
 WHERE r.last_name IN
       (SELECT c.last_name
          FROM champions AS c
         WHERE YEAR(championship_date) > '2008'
           AND c.confirmed = 'Y');


```

## Preferred formalisms

- 	Use IN() instead of multiple OR clauses.
- 	Where a value needs to be interpreted before leaving the database use the CASE expression. CASE statements can be nested to form more complex logical structures.
- 	Avoid the use of UNION clauses and temporary tables where possible. If the schema can be optimised to remove the reliance on these features then it most likely should be.

```sql
SELECT UserName,
      (CASE CountryID
      	WHEN 1 THEN 'NZ'
       	WHEN 2 THEN 'AUS'
       END) AS Country
  FROM USR_CRM.dbo.Family_login
 WHERE IsActive = 1
   AND NumberFailedAttempt BETWEEN 8 AND 9
   AND AccessTypeID IN (1,2,3,4)

```
