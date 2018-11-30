---
layout: php
title: "Code Layout"
---
### PHP Code Layout
#####Editor settings
######Tabs v. spaces
Ahh, the endless debate of tabs v. spaces. I used to be a fan of tabs, but I’ve come round to the argument that spaces are better — apart from anything else you can guarantee that they will look the same regardless of editor settings. The other benefit to using two spaces (which is the number I work with) is that code doesn’t start to scroll off the right side of the screen after a few levels of indentation.

######Linefeeds
The three major operating systems (Unix, Windows and Mac OS) use different ways to represent the end of a line. Unix systems use the newline character (`\n`), Mac systems use a carriage return (`\r`), and Windows systems use a carriage return followed by a line feed (`\r\n`). If you’ve ever opened a file created in Windows on a Unix system, you will probably have seen lots of odd characters (possibly represented by `^M`) where you would expect to see a clean line break.

I use simple newlines all the time, because I develop on Linux and my deployment target is almost always a Linux system.

If you develop on Windows (and many people do), you can set up most editors to save files in Unix format.

#####Including braces
Braces must always be included when writing code using `if`, `for`, `while` etc. blocks. There are no exceptions to this rule, even if the braces could be omitted. Leaving out braces makes code harder to maintain in the future and can also cause bugs that are very difficult to track down.

Some examples of correct/incorrect ways to write code blocks using braces:
```php
/* These are all incorrect */

if ( condition ) foo();

if ( condition )
  foo();

while ( condition )
  foo();

for ( $i = 0; $i < 10; $i++ )
  foo($i);
```
```php
/* These are all correct */

if ( condition )
{
  foo();
}

while ( condition )
{
  foo();
}

for ( $i = 0; $i < 10; $i++ )
{
  foo($i);
}
```

#####Where to put the braces
Braces should always be placed on a line on their own; again there are no exceptions to this rule. Braces should also align properly (use two spaces to achieve this) so a closing brace is always in the same column as the corresponding opening brace. For example:
```php
if ( condition )
{
  while ( condition )
  {
    foo();
  }
}
```
#####Spaces between tokens
Control statements such as `if`, `for`, `while` etc. should have one space on either side of the opening bracket, and one space before the closing bracket. However, individual conditions inside these brackets (e.g. `($i < 9) || ($i > 16)`) should **not** have spaces between their conditions and their opening/closing brackets.

In these examples, each pair shows the incorrect way followed by the correct way:
```php
/* incorrect *
$i=0;

if(( $i<2 )||( $i>5 )) 

foo ( $a,$b,$c ) 

$i=($j<5)?$j:5 




/* Correct */
$i = 0; 

if ( ($i < 2) || ($i > 5) )

foo($a, $b, $c)

$i = ($j < 5) ? $j : 5
```

#####Operator precedence
Always use brackets to make it absolutely clear what you are doing.
```php
$i = $j < 5 || $k > 6 && $m == 9 || $n != 10 ? 1 : 2; // What *is* going on here?!?
$i = ( (($j < 5) || $k > 6)) && (($m == 9) || ($n != 10)) ) ? 1 : 2; // Much clearer

```

#####Quoting strings
Strings in PHP can either be quoted with single quotes (`''`) or double quotes (`""`). The difference between the two is that the parser will use variable-interpolation in double-quoted strings, but not with single-quoted strings. So if your string contains no variables, use single quotes and save the parser the trouble of attempting to interpolate the string for variables, like so:

```php
$str = "Avoid this - it just makes more work for the parser.";
$str = 'This is much better.'
```
Likewise, if you are passing a variable to a function, there is no need to use double quotes:

```php
foo("$bar"); // No need to use double quotes
foo($bar); // Much better
```
If you’d like to insert values from variables, concatenate strings. A space must be inserted before and after the dot for better readability:

```php
$message = 'Hey ' . $name . ', you look ' . $appearance . ' today!';
```
You may break a string into multiple lines if you use the dot operator. You’ll have to indent each following line to mark them as part of the value assignment:

```php
$neos = 'A great ' .
  'project from ' .
  'a great ' .
  'team';
```
You should also consider using a PHP function such as sprintf() to concatenate strings to increase readability:
```php
$message = sprintf('Hey %s, you look %s today!', $name, $appearance);
```

Finally, when using associative arrays, you should include the key within single quotes to prevent any ambiguities, especially with constants:

```php
$foo = bar[example]; // Wrong: what happens if 'example' is defined as a constant elsewhere?
$foo = bar['example']; // Correct: no ambiguity as to the name of the key
```
However, if you are accessing an array with a key that is stored in a variable, you can simply use:

```php
$foo = bar[$example];
```

#####Shortcut operators
The shortcut operators `++` and `--` should **always** be used on a line of their own, with the exception of `for` loops. Failure to do this can cause obscure bugs that are incredibly difficult to track down. For example:
```php
$foo[$i++] = $j; // Wrong: relies on $i being incremented after the expression is evaluated
$foo[--$j] = $i; // Wrong: relies on $j being decremented before the expression is evaluated

$foo[$i] = $j;
$i++; // Correct: obvious when $i is incremented

$j--;
$foo[$j] = $i; // Correct: obvious when $j is decremented
``` 

#####Optional shortcut constructs
As well as the useful increment and decrement shortcuts, there are two other ways in which you can make your PHP code easier to use. The first is to replace if statements where you are assigning one of two values to a variable based on a conditional. You may be tempted to write something like this:

```php
if ( isset($_POST['username']) )
{
  $username = $_POST['username'];
}
else
{
  $username = '';
}

if ( isset($_POST['password']) )
{
  $password = md5($_POST['password']);
}
else
{
  $password = '';
}
```
Whilst the above code works and makes it obvious what you are doing, it’s not the easiest or clearest way if you want to run through a list of different variables and do a similar thing to all of them. A more compact way would be to use the ternary operator `? :` like so:
```php
$username = isset($_POST['username']) ? $_POST['username'] : '';
$password = isset($_POST['password']) ? md5($_POST['password']) : '';
```
I would recommend using the latter notation wherever you are checking assigning a number of variables one of two values depending on a boolean expression, simply because it makes the code easier to scan and also makes it obvious what you are doing without being unnecessarily verbose.

#####Use constants where possible
If a value is not going to change throughout the execution of your script, then use a constant rather than a variable to define it. That way, if you do change the value by accident, the PHP parser will output an error and allow you to fix the problem, without it causing any unforeseen side effects.

Remember that constants should never be enclosed in strings, either single or double. You must always use concatenation if you wish to include a constant’s value in a string.

##### Turn on all error reporting
A lot of code I’ve downloaded from the web and tried to use has failed on my machines because the developers switched off the `E_NOTICE` flag in their PHP configuration for some reason or another. As soon as I bring it onto my system, where error reporting is set to `E_ALL` (i.e. show all errors, including references to variables being used without being initialised), the PHP interpreter spews out dozens of error messages which I then have to fix before I can use the script.

What you need to remember as a developer is that the person who uses your script may not have exactly the same php.ini configuration as you so you aim for the lowest common denominator, i.e. all error reporting enabled. If your code works with `E_ALL` set, then it will also work with any other error reporting configuration, including when all error reporting is turned off (e.g. on sites where PHP errors are logged to a file instead).

Of course, on a production site you might want to turn off all errors, or at least redirect them to a file, to avoid admitting to users that your scripts are broken in some way. That’s perfectly fine and in many cases the recommended action to take. So long as your scripts work with all error reporting turned on, it doesn’t matter where they are deployed.

