---
layout: cleancode
title: "Variable Declaration"
---

## Mayfly Variables
- initialize variables just-in-time

```js
// Dirty
// All of the important variables are declared at the top of the file
const accessType = 1;
const personId = 2;
const loanAppId = 30455;

//
//
//
// 300 lines after
if (accessType < 5) {
  // code here
}

// Clean

//
//
//
// 300 lines after
const accessType = 1;
if (accessType < 5) {
  // code here
}
```
