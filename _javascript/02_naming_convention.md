---
layout: javascript
title: "Naming Convention"
---
###### Class name should be PascalCase

```js
class UserInfo {
  // code here
}
```


###### Variables, class methods and class properties should be camelCase
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


###### Constants are declared using uppercase with underscore
```js
const API_URL = 'http:///api.url/endpoint';
```
