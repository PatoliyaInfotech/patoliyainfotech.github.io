---
layout: cleancode
title: "Functions"
---
## Function V.S. Method
- Both functions and methods are pieces of code, called by name
- Core difference: Methods are associated with an object

## When to create function
### 1 - Duplication
- Don’t repeat yourself (DRY)
- Code is liability
- Less is more
- Look for Patterns

```js

const emailCurrentUser = () => {
  // code here
}

class StoreTransaction {

    emailUser() {
        emailCurrentUser();
    }

}

class UpdateUserInfo {

    emailUser() {
      emailCurrentUser();
    }
}
```

### 2 - Excessive Indentation: Arrow Code
```js
// Dirty
if (firstLevel) {
   if (secondLevel) {
     if (thirdLevel) {
        if (fourthLevel) {
            person.foreach(personObj => {
                // complicated code here
            });
        }
     }
   }
}
}
```
##### Solutions
```js
// I - EXTRACT METHOD
const validatePerson = (thirdLevel, fourthLevel) => {
     if (!thirdLevel) return;
     if(!fourthLevel) return;

     person.foreach(personObj => {
         // complicated code here
     });
}

if (firstLevel) {
   if (secondLevel) {
     validatePerson(thirdLevel, fourthLevel);
   }
}
```


```js
// II - RETURN EARLY
if (!firstLevel) return;
if (!secondLevel) return;

validatePerson(thirdLevel, fourthLevel);
```

```js
// III - FAIL FAST
// Dirty
const registerUser = (username, password) => {
  if (username) {
    if (password) {
      // do registration here
    } else {
       throw new Error('Password is required');
    }
  } else {
     throw new Error('Username is required');
  }
}

const registerUser = (username, password) => {
  if (!username) throw new Error('Username is required');
  if (!password) throw new Error('Password is required');

  // do something here
}
```

### 3 - More than 1 task