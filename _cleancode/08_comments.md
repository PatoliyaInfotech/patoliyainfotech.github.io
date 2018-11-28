---
layout: cleancode
title: "Comments"
---
### `Avoid` Redundant
```js
// Calculate Total Charges

const calculateTotalCharges = () => {
  // code here
}
```
### `Avoid` Intent
- Improve function naming
- Intermediate variable
- Constant
- Extract conditional to function

```js
// Dirty

// Assure user's account is deactivated
if (user.status === 2) {

}

// Clean
if (user.status === STATUS.INACTIVE) {

}
```

### `Avoid` Apology
- Fix before commit / merge
- Add a `TODO` marker comment if you must

```js
const getUserInfo = () => {
  // will revisit this function again
}
```

### `Avoid` Warning
- To avoid warning, do refactor

```js
const emailCurrentUser = () => {
  // this was added because of the data issue will refactor later
}
```

### `Avoid` Zombie Code
```js
//const emailCurrentUser = () => {
//
//}

const newEmailCurrentUser = () => {

}
```
### `Avoid` Brace Tracker Comments
```js
const authenticateUser = () => {
  if (validLogin) {
    // Lots of
    // code comment
    // related to
    // how the user
    // will be able to login
    loginUser();
  }
}

// Clean
const authenticateUser = () => {
  if (validLogin) {
    loginUser();
  }
}
```

### `Avoid` Bloated Header
```js
// ****************************************
// Filename: httpClient.js                *
//                                        *
// Author: John Doe                       *
// Created: 12/12/17                      *
//                                        *
// Description: API request using angular *
// ****************************************
```

### `Use` Todo
- May be an apology or warning comment in disguise
- Often ignored

```js
// TODO: will rename method

const pdfName = () => {

}
```

### `Use` Summary
- Describes intent at general level higher than the code
- Often useful to provide high level overview of classes
- Don’t use to simply augment poor naming / code level intent

```js
// Handles email sending and email template for client
class ClientEmail {


}
```
### `Use` Documentation
- Only when it can’t be expressed in code

```js
// see www.facebook.com/api for documentation
const getFacebookInfo = () => {

}
```
### About to write comment?
### Ask Yourself
 - Could I express what I’m about to type in code?
    - Intermediate variable, eliminate magic number, utilize constant?
    - Refactor to a well-named method
      - Separate scope
      - More likely to stay updated
      - Better testability
- Am I explaining bad code i’ve written instead of refactoring?
- Should this simply be a message in a source control commit?