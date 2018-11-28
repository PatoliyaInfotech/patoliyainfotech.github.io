---
layout: database-doc
title: Create syntax
---

When declaring schema information, it is also important to maintain human readable code. To facilitate this ensure the column definitions are ordered and grouped where it makes sense to do so.

Indent column definitions by four (4) spaces within the CREATE definition.

##  Choosing data types

- 	Where possible do not use vendor specific data types—these are not portable and may not be available in older versions of the same vendor’s software.
- 	Only use REAL or FLOAT types where it is strictly necessary for floating point mathematics otherwise prefer NUMERIC and DECIMAL at all times. Floating point rounding errors are a nuisance!

## Specifying default values

- 	The default value must be the same type as the column—if a column is declared a DECIMAL do not provide an INTEGER default value.
- 	Default values must follow the data type declaration and come before any NOT NULL statement.

## Constraints and keys

Constraints and their subset, keys, are a very important component of any database definition. They can quickly become very difficult to read and reason about though so it is important that a standard set of guidelines are followed.

### Choosing keys

Deciding the column(s) that will form the keys in the definition should be a carefully considered activity as it will effect performance and data integrity.

1. 	The key should be unique to some degree.
2. 	Consistency in terms of data type for the value across the schema and a lower likelihood of this changing in the future.
3. 	Keeping the key as simple as possible whilst not being scared to use compound keys where necessary.

It is a reasoned and considered balancing act to be performed at the definition of a database. Should requirements evolve in the future it is possible to make changes to the definitions to keep them up to date.

### Defining constraints

Once the keys are decided it is possible to define them in the system using constraints along with field value validation.

#### General

- 	Tables must have at least Primary key to be complete and useful.
- 	Constraints should be given a custom name excepting UNIQUE, PRIMARY KEY and FOREIGN KEY where the database vendor will generally supply sufficiently intelligible names automatically.

#### Layout and order

- 	Specify the primary key first right after the CREATE TABLE statement.
- 	Constraints should be defined directly beneath the column they correspond to. Indent the constraint so that it aligns to the right of the column name.
- 	If it is a multi-column constraint then consider putting it as close to both column definitions as possible and where this is difficult as a last resort include them at the end of the CREATE TABLE definition.
- 	If it is a table level constraint that applies to the entire table then it should also appear at the end.
- 	If it make senses to do so align each aspect of the query on the same character position. For example all NOT NULL definitions could start at the same character position. This is not hard and fast, but it certainly makes the code much easier to scan and read.

