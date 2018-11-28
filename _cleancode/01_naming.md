---
layout: cleancode
title: "Naming"
---
###### Class Naming
- Noun
- Be Specific
- Single Responsibility
- Avoid Generic Suffixes

```js
// Avoid
class HpRequest {}
class CommonUserInfo {}
class PersonClass {}

// Clean
class HttpClient {}
class CorporateUserInfo {}
class UserEmail {}

```
###### Class Method
The method name should say it all
```js
class UserEmail {
  constructor(user) {
    this.user = user;
  }

  isEmailValid() {
    return this.user ? /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/.test(this.user.email) : false;
  }
}

const userEmail = new UserEmail({ email: 'sample@gmail.com' });
console.log(userEmail.isEmailValid());

```
###### Boolean Variables
Boolean names should sound like true/false questions
```js
const isOpen = false;
const done = false;
const isActive = false;
const isLoggedIn = true;


```