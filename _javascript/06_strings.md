---
layout: javascript
title: "Strings"
---
###### Prefer to use [template strings](https://github.com/lukehoban/es6features/blob/master/README.md#template-strings) when concating
```js
// AVOID THIS IMPLEMENTATION
const userFullName = user.firstName + ' ' + user.lastName;

// USE THIS INSTEAD
const userFullName = `${user.firstName} ${user.lastName}`;

```


###### Use single quotes
```js
const defaultUserAccessType = 'Corporate';
```
