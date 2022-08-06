---
layout: php
title: "General"
---

- **[JQuery tutorials](https://www.w3schools.com/jquery/default.asp)**
- **[PHP tutorials](https://www.w3schools.com/php/default.asp)**
- **[Codeigniter styleguide](https://codeigniter.com/userguide3/general/styleguide.html)**
- **[PSR-2: Coding Style Guide](https://www.php-fig.org/psr/psr-2/)**

### PHP Coding Guidelines & Best Practices
Coding Standards are an important factor for achieving a high code quality. A common visual style, naming conventions and other technical settings allow us to produce a homogenous code which is easy to read and maintain. However, not all important factors can be covered by rules and coding standards. Equally important is the style in which certain problems are solved programmatically - it’s the personality and experience of the individual developer which shines through and ultimately makes the difference between technically okay code or a well considered, mature solution.

These guidelines try to cover both, the technical standards as well as giving incentives for a common development style. These guidelines must be followed by everyone who creates code.

#### General considerations
- Almost every PHP file in Flow contains exactly one class and does not output anything if it is called directly. Therefore you start your file with a  `<?php` tag and must not end it with the closing `?>`.
- Every file must contain a header stating namespace and licensing information
    - Declare your namespace.
    - The copyright header itself must not start with `/**`, as this may confuse documentation generators!

```js

<?php
namespace YourCompany\Package\Something\New;

/*
 * This file is part of the YourCompany.Package package.
 *
 * (c) YourCompany
 *
 * This package is Open Source Software. For the full copyright and license
 * information, please view the LICENSE file which was distributed with this
 * source code.
 */
 ```

#### Naming

##### Package names

 All package names start with an uppercase character and usually are written in `UpperCamelCase`. In order to avoid problems with different filesystems, only the characters a-z, A-Z, 0-9 and the dash sign “-” are allowed for package names – don’t use special characters.

##### Namespace and Class names
- Only the characters `a-z`, `A-Z` and `0-9` are allowed for namespace and class names.
- Namespaces are usually written in UpperCamelCase but variations are allowed for well established names and abbreviations.
- Class names are always written in `UpperCamelCase`.
- The unqualified class name must be meant literally even without the namespace.
- The main purpose of namespaces is categorization and ordering
- Class names must be nouns, never adjectives.
- The name of abstract classes must start with the word “Abstract”, class names of aspects must end with the word “Aspect”.

##### Method names
All method names are written in lowerCamelCase. In order to avoid problems with different filesystems, only the characters a-z, A-Z and 0-9 are allowed for method names – don’t use special characters.

Make method names descriptive, but keep them concise at the same time. Constructors must always be called `__construct()`, never use the class name as a method name.

- `myMethod()`
- `someNiceMethodName()`
- `betterWriteLongMethodNamesThanNamesNobodyUnderstands()`
- `singYmcaLoudly()`
- `__construct()` 

##### Variable names
Variable names are written in lower case and should be

- self-explanatory
- Use '_' as the word separator.
- not shortened beyond recognition, but rather longer if it makes their meaning clearer

The following example shows two variables with the same meaning but different naming. You’ll surely agree the longer versions are better (don’t you …?).

*Correct naming of variables*

- `$company_data`
- `$first_name`

*Incorrect naming of variables*

- `$companyData`
- `$firstname`

As a special exception you may use variable names like `$i`, `$j` and `$k` for numeric indexes in `for` loops if it’s clear what they mean on the first sight. But even then you should want to avoid them.

##### Constant names
All constant names are written in `UPPERCASE`. This includes `TRUE`, `FALSE` and `NULL`. Words can be separated by underscores - you can also use the underscore to group constants thematically:

- `STUFF_LEVEL`
- `COOLNESS_FACTOR`
- `PATTERN_MATCH_EMAILADDRESS`
- `PATTERN_MATCH_VALIDHTMLTAGS`

It is, by the way, a good idea to use constants for defining regular expression patterns (as seen above) instead of defining them somewhere in your code.


##### Filenames
These are the rules for naming files:

- All filenames are `UpperCamelCase`.
- Class and interface files are named according to the class or interface they represent
- Each file must contain only one class or interface
- Names of files containing code for unit tests must be the same as the class which is tested, appended with “Test.php”.
- Files are placed in a directory structure representing the namespace structure. You may use PSR-0 or PSR-4 autoloading as you like. We generally use PSR-4.

