---
layout: nodejs
title: "Conditionals"
---
###### Use the === operator
Programming is not about remembering stupid rules. Use the triple equality operator as it will work just as expected

Right:

```js
const a = 0;
if (a !== '') {
  console.log('winning');
}
```

Wrong:

```js
const a = 0;
if (a == '') {
  console.log('losing');
}
```


###### Use multi-line ternary operator

The ternary operator should not be used on a single line. Split it up into multiple lines instead.

Right:
```js
const foo = (a === b)
  ? 1
  : 2;

```

Wrong:
```js
const foo = (a === b) ? 1 : 2;
```

###### Use descriptive conditions
Any non-trivial conditions should be assigned to a descriptively named variable or function:

Right:
```js
const isValidPassword = password.length >= 4 && /^(?=.*\d).{4,}$/.test(password);

if (isValidPassword) {
  console.log('winning');
}
```

Wrong:
```js
if (password.length >= 4 && /^(?=.*\d).{4,}$/.test(password)) {
  console.log('losing');
}
```



