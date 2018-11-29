---
layout: reactjs
title: "Formatting"
---

###### 2 Spaces for indentation
Two-spaces. Tabs are better, but they look like hell in web browsers (and on GitHub), and node uses 2 spaces, so that’s that.

Configure your editor appropriately.
###### 80 characters per line
Keep lines shorter than 80 characters. It’s better for lines to be too short than to be too long. Break up long lists, objects, and other statements onto multiple lines.

###### Semicolons
Don’t use them except in four situations:
- **for** (;;) loops. They’re actually required.
- null loops like: **while (something) ;** (But you’d better have a good reason for doing that.)
- **case 'foo': doSomething(); break**
- In front of a leading **(** or **[** at the start of the line. This prevents the expression from being interpreted as a function call or property access, respectively.

Some examples of good semicolon usage:

```js
;(x || y).doSomething()
;[a, b, c].forEach(doSomething)
for (const i = 0; i < 10; i ++) {
  switch (state) {
    case 'begin': start(); continue
    case 'end': finish(); break
    default: throw new Error('unknown state')
  }
  end()
}
```

###### Comma First
If there is a list of things separated by commas, and it wraps across multiple lines, put the comma at the start of the next line, directly below the token that starts the list. Put the final token in the list on a line by itself. For example:
```js
const magicWords = [ 'abracadabra'
                 , 'gesundheit'
                 , 'ventrilo'
                 ]
  , spells = { 'fireball' : function () { setOnFire() }
             , 'water' : function () { putOut() }
             }
  , a = 1
  , b = 'abc'
  , etc
  , somethingElse
```

###### Quotes
Use single quotes for strings except to avoid escaping.

Bad:
```js
const notOk = "Just double quotes"
```

Good:
```js
const ok = 'String contains "double" quotes'
const alsoOk = "String contains 'single' quotes or apostrophe"
```

###### Whitespace
Put a single space in front of ( for anything other than a function call. Also use a single space wherever it makes things more readable.

Don’t leave trailing whitespace at the end of lines. Don’t indent empty lines. Don’t use more spaces than are helpful.

###### Opening braces go on the same line
Your opening braces go on the same line as the statement.

Right:

```js
if (true) {
  console.log('winning');
}
```

Wrong:
```js
if (true)
{
  console.log('losing');
}
```

###### Declare one variable per var statement
Declare one variable per var statement, it makes it easier to re-order the lines. However, ignore Crockford when it comes to declaring variables deeper inside a function, just put the declarations wherever they make sense.

Right:
```js
const keys   = ['foo', 'bar'];
const values = [23, 42];

const object = {};
while (keys.length) {
  const key = keys.pop();
  object[key] = values.pop();
}
}
```

Wrong:
```js
const keys = ['foo', 'bar'],
    values = [23, 42],
    object = {},
    key;

while (keys.length) {
  key = keys.pop();
  object[key] = values.pop();
}
```

###### null, undefined, false, 0

Boolean variables and functions should always be either true or false. Don’t set it to 0 unless it’s supposed to be a number.

When something is intentionally missing or removed, set it to null.

Don’t set things to undefined. Reserve that value to mean “not yet set to anything.”

Boolean objects are forbidden.
