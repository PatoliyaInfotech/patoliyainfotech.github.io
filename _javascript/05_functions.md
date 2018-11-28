---
layout: javascript
title: "Functions"
---
###### Avoid using named function - due to hoisting
```js
// AVOID THIS IMPLEMENTATION
function getUserInfo() {
  // code here
}
```


###### Prefer to use arrow notation than declaring function name
```js
const getUserInfo = () => {
  // code here
}
```