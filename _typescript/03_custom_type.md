---
layout: typescript
title: "Creating custom types"
---

You can also create your own custom types in the following way.

```
const person1 = {
  first: 'Jon',
  last: 'Doe'
};
```

Now, let’s create a definition for this type of object, using interfaces.

```
interface Person {
  first: string,
    last: string
}
const person1: Person = {
  first: 'Jon',
  last: 'Doe'
};
```

Here, person is the definition of our data type and person1 is an object of that data type. But, what if you want to add a few additional properties to the person object? For example, you may also want to add age property to a person1 object but do not want to make it mandatory, that is, you should be able to add age if you want to but can skip it as well. To do that you can do this.

```
interface Person {
  first: string,
    last: string,
    [key: string]: any
}
const person1: Person = {
  first: 'Jon',
  last: 'Doe',
  age: 20
};
```

Now you can add any string as a key, but the first and last are compulsory.




