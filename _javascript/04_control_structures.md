---
layout: javascript
title: "Control Structures"
---
###### Prefer to use strict equality comparison
```js
if (user.accessType === USER.CORPORATE) {
  // code here
}

if (user.accessType !== USER.ADVISER) {
  // code here
}
```


###### Prefer ternary operator for simple statement
```js
// AVOID THIS IMPLEMENTATION
let userInfo = '';

if (user.accessType === USER.CORPORATE) {
     userInfo = 'Corporate';
} else {
     userInfo = 'Adviser';
}

// USE THIS INSTEAD
const userInfo = user.accessType === USER.CORPORATE ? 'Corporate' : 'Adviser';

```


###### To avoid long nested if statement return early
```js
// AVOID THIS IMPLEMENTATION
if (user.accessType === CORPORATE) {

   if (user.countryCode === 'AU') {
      // code here
   }
}

// USE THIS INSTEAD
if (user.accessType !== CORPORATE && user.countryCode !== 'AU') return;

// code here


```


###### Always check for falsy or truthy over checking for just undefined or null
```js
// AVOID THIS IMPLEMENTATION
if (isCoporateUser === true) {
  // code here
}

// USE THIS INSTEAD
if (isCorporate) {

}
```


###### You can use || to fall for a default value or && to execute something on true statement
```js
// if user.accessType will be falsy then the value of userAccessType will be 'Corporate'
const userAccessType = user.accessType || 'Corporate';

// getClientList() will not execute if user.accessType is falsy
user.accessType && getClientList();

```