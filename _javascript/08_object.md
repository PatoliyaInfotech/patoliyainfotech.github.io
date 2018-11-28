---
layout: javascript
title: "Object"
---
#### Adding new properties to an object
###### `Avoid` direct addition
```js
// AVOID THIS IMPLEMENTATION
const person = {
  name: 'John Myung'
};

person.skill = 'Bass Player';

// person = { name: 'John Myung', skill: 'Bass Player' }
```

###### `Use` Object.assign (ES6) or Object spread operator
```js
// USE THIS IMPLEMENTATION
const person = {
  name: 'John Myung'
};

// Using Object.assign
const newPerson = Object.assign({}, person, { skill: 'Bass Player' });

const newPersonCopy = {...person, skill: 'Bass Player'}

// person = { name: 'John Myung' }
// newPerson = { name: 'John Myung', skill: 'Bass Player' }
// newPersonCopy = { name: 'John Myung', skill: 'Bass Player' }
```

#### Removing properties from an object
###### `Avoid` using delete operator on object
```js
// AVOID THIS IMPLEMENTATION
const person = {
  name: 'John Petrucci',
  skill: 'Guitar',
  band: 'Dream Theater'
};

delete person.band
// person = { name: 'John Petrucci', skill: 'Guitar' }
```

###### `Use` Object destructuring
```js
// USE THIS IMPLEMENTATION
const person = {
  name: 'John Petrucci',
  skill: 'Guitar',
  band: 'Dream Theater'
};

const { band, ...newPerson } = person;

// newPerson = { name: 'John Petrucci', skill: 'Guitar' }
```

###### Using lodash [pick](https://lodash.com/docs/4.17.10#pick) and [omit](https://lodash.com/docs/4.17.10#omit)
```js
import { pick, omit } from 'lodash';
const person = {
  name: 'John Petrucci',
  skill: 'Guitar',
  band: 'Dream Theater'
}

const personWithPick = pick(person, ['name', 'skill']);
// personWithPick = { name: 'John Petrucci', skill: 'Guitar' }

const personWithOmit = omit(person, ['band']);
// personWithOmit = { name: 'John Petrucci', skill: 'Guitar' }
```
