---
layout: nodejs
title: "Naming Convention"
---
###### Use lowerCamelCase for variables, properties and function names
Variables, properties and function names should use lowerCamelCase. They should also be descriptive. Single character variables and uncommon abbreviations should generally be avoided.

```js
// Variables
const personList = [];

// Class method and property
class UserInfo {
   constructor() {
      // class property
      this.user = {
        name: 'John Doe',
        skill: 'Javascript'
      };
   }

   // class method
   getUserInfo() {
     return this.user;
   }
}

```


###### Use UPPERCASE for Constants
Constants should be declared as regular variables or static class properties, using all uppercase letters.

Right:

```js
var SECOND = 1 * 1000;

function File() {
}
File.FULL_PERMISSIONS = 0777;
```

Wrong:

```js
const SECOND = 1 * 1000;

function File() {
}
File.fullPermissions = 0777;
```