---
layout: javascript
title: "Array"
---
#### These methods mutates data
###### `Avoid` [Array.prototype.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
```js
// AVOID THIS IMPLEMENTATION
const personList = ['John Petrucci', 'Mike Portnoy', 'John Myung', 'James LaBrie'];

personList.push('Jordan Rudess');

// personList = ['John Petrucci', 'Mike Portnoy', 'John Myung', 'James LaBrie', 'Jordan Rudess']

```
###### `Avoid` [Array.prototype.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
```js
// AVOID THIS IMPLEMENTATION
const personList = ['John Petrucci', 'Mike Portnoy', 'John Myung', 'James LaBrie'];

personList.splice(1, 0, 'Jordan Rudess');

// personList = ['John Petrucci', 'Mike Portnoy', 'John Myung']

```

###### `Avoid` [Array.prototype.pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
```js
// AVOID THIS IMPLEMENTATION
const personList = ['John Petrucci', 'Mike Portnoy', 'John Myung', 'James LaBrie'];

personList.pop();

// personList = ['John Petrucci', 'Mike Portnoy', 'John Myung']

```

###### `Avoid` [Array.prototype.unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
```js
// AVOID THIS IMPLEMENTATION
const personList = ['Mike Portnoy', 'John Myung', 'James LaBrie'];

personList.unshift('John Petrucci');

// personList = ['John Petrucci', 'Mike Portnoy', 'John Myung', 'James LaBrie']

```

###### `Avoid` [Array.prototype.shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
```js
// AVOID THIS IMPLEMENTATION
const personList = ['John Petrucci', 'Mike Portnoy', 'John Myung', 'James LaBrie'];

personList.shift();

// personList = ['Mike Portnoy', 'John Myung', 'James LaBrie']

```

#### These methods doesn't mutate data
###### `Use` [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
```js
// USE THIS INSTEAD
const personList = ['John Petrucci', 'Mike Portnoy', 'John Myung', 'James LaBrie']

const newPersonList = personList.filter(name => name !== 'James LaBrie');

// personList = ['John Petrucci', 'Mike Portnoy', 'John Myung', 'James LaBrie']
// newPersonList = ['John Petrucci', 'Mike Portnoy', 'John Myung']
```

###### `Use` [Spread Operator (ES6)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
```js
// USE THIS INSTEAD
const personList = ['John Petrucci', 'Mike Portnoy', 'John Myung', 'James LaBrie']

const newPersonList = [...personList, 'Jordan Rudess'];

// personList = ['John Petrucci', 'Mike Portnoy', 'John Myung', 'James LaBrie']
// newPersonList = ['John Petrucci', 'Mike Portnoy', 'John Myung', 'James LaBrie', 'Jordan Rudess']
```

###### `Use` [Array.prototype.concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
```js
const personList = ['John Petrucci', 'Mike Portnoy', 'John Myung']

const newPersonList = personList.concat('James LaBrie');

// personList = ['John Petrucci', 'Mike Portnoy', 'John Myung']
// newPersonList = ['John Petrucci', 'Mike Portnoy', 'John Myung', 'James LaBrie']
```
###### `Use` [Array.prototype.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
```js
const personList = ['John Petrucci', 'Mike Portnoy', 'John Myung']

const newPersonList = personList.slice(0, 2);

// personList = ['John Petrucci', 'Mike Portnoy']
// newPersonList = ['John Petrucci', 'Mike Portnoy', 'John Myung']
```

## Removing elements from an array
###### Array.prototype.slice & Array.prototype.concat
```js
const personList = ['John Petrucci', 'Mike Portnoy', 'John Myung', 'James LaBrie', 'Jordan Rudess'];
const newPersonList = personList
  .slice(0, 2)
  .concat(personList.slice(3));

// personList = ['John Petrucci', 'Mike Portnoy', 'John Myung', 'James LaBrie', 'Jordan Rudess']
// newPersonList = ['John Petrucci', 'Mike Portnoy', 'James LaBrie', 'Jordan Rudess']
```

###### Array.prototype.slice & the ES6 Spread Operator
```js
const personList = ['John Petrucci', 'Mike Portnoy', 'John Myung', 'James LaBrie', 'Jordan Rudess'];
const newPersonList = [
    ...personList.slice(0, 2),
    ...personList.slice(3)
];

// personList = ['John Petrucci', 'Mike Portnoy', 'John Myung', 'James LaBrie', 'Jordan Rudess']
// newPersonList = ['John Petrucci', 'Mike Portnoy', 'James LaBrie', 'Jordan Rudess']
```

###### Array.prototype.filter
```js
const personList = ['John Petrucci', 'Mike Portnoy', 'John Myung', 'James LaBrie', 'Jordan Rudess'];
const newPersonList = personList.filter((value, index) => index !== 2);

// personList = ['John Petrucci', 'Mike Portnoy', 'John Myung', 'James LaBrie', 'Jordan Rudess']
// newPersonList = ['John Petrucci', 'Mike Portnoy', 'James LaBrie', 'Jordan Rudess']
```

## Array Loop
#### `Avoid` the use of for, while and do while loop
#### Don't make `forEach` as first option when looping elements - [resource](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)
#### Try to work with `reduce`, `map`, `filter`
```js
const personList = ['John Petrucci', 'Mike Portnoy', 'John Myung', 'James LaBrie', 'Jordan Rudess'];

const personReduced = personList.reduce((accum, value) => {
  // code here
}, []);

const personMapped = personList.map((value, index) => {
  // code here
});

const personFiltered = personList.filter((value, index) => {
  // code here
});
```

#### Prefer native implementation over third-party implementation