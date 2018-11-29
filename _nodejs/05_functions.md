---
layout: nodejs
title: "Functions"
---

###### Write small functions

Keep your functions short. A good function fits on a slide that the people in the last row of a big room can comfortably read. So don't count on them having perfect vision and limit yourself to ~15 lines of code per function.

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

###### No nested closures
Use closures, but don't nest them. Otherwise your code will become a mess.

Right:
```js
setTimeout(function() {
  client.connect(afterConnect);
}, 1000);

function afterConnect() {
  console.log('winning');
}
```
Wrong:
```js
setTimeout(function() {
  client.connect(function() {
    console.log('losing');
  });
}, 1000);
```

###### Method chaining

One method per line should be used if you want to chain methods.

You should also indent these methods so it's easier to tell they are part of the same chain.

Right:

```js
User
  .findOne({ name: 'foo' })
  .populate('bar')
  .exec(function(err, user) {
    return true;
  });
```
Wrong:

```js

User
.findOne({ name: 'foo' })
.populate('bar')
.exec(function(err, user) {
  return true;
});

User.findOne({ name: 'foo' })
  .populate('bar')
  .exec(function(err, user) {
    return true;
  });

User.findOne({ name: 'foo' }).populate('bar')
.exec(function(err, user) {
  return true;
});

User.findOne({ name: 'foo' }).populate('bar')
  .exec(function(err, user) {
    return true;
  });
```



