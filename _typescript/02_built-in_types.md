---
layout: typescript
title: "Built-In Types in TypeScript"
---

Typescript comes built-in with all the primitive types in JavaScript like string, number, and boolean.

The types can then be assigned to variables to specify what data type should be assigned to the variable. This is called type annotation.


```
const myName: string = 'Developer';
const myAge: number = 22;
```

TypeScript annotations are not always necessary because TypeScript automatically infers the type of a variable based on its initial value or usage. Therefore the following would also be valid TypeScript code:

```
// myName is inferred type 'string'
 const myName = 'Jonathan';
```

### Arrays in TypeScript
To specify the type of an array you can use the syntax `string[]` or `number[]`. This effectively means 'array of strings or array of numbers'.

You'll also see people use the syntax `Array<number>` or `Array<string>` which means the same thing

- We can also declare our arrays to be of a certain type, although it is not necessary. If no type is defined then any type of value can be stored. Example,

const nums: number[] = [];
nums.push(5);
nums.push(4)

### Union Types in TypeScript

Union types allow us to define several types that may be assigned to a variable. For this, we use a pipe | to specify the various types.

```
const someValue: number | string = value; 

```

By default `null | undefined` can be assigned to any variable but TypeScript comes with the strictNullChecks compiler option which does not allow assigning both to a variable.

### Functions in TypeScript

Functions can also receive type annotations. However, with TypeScript functions, they can only receive the specified parameters. Nothing more nothing less.

```
function introduction(name: string, age: number): string {
    return `Hello, my name is ${name} and I'm {age} years old`
}
```

- Function parameters receive normal type annotation.

- TypeScript functions must also specify the return data type. In the case where a function returns nothing, we can use void type as the return data type.

- We can also use the `?` operator to specify parameters that are optional. In this case, Typescript won't complain if the parameter is not passed on the function call.

- We can also assign default values to parameters just like we would in normal JavaScript.

```
const introduction = (name: string, age: number, job?: string = 'developer'): string => `Hello, my name is ${name} and I'm ${age} years old. I work as a ${job}`

```

Notice that in this example I used the JavaScript arrow function syntax and specified that the job parameter is optional and assigned a default value 'developer' to it.

### The `any` type in TypeScript

In TypeScript, every variable whose type cannot be inferred becomes implicitly the type any

`Any` is typically a wild card type that literally means 'whatever type'. We can also explicitly assign the type any to a variable.

However, `any` typings are usually considered to be problematic.

