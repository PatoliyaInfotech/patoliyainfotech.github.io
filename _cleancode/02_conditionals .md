---
layout: cleancode
title: "Conditionals"
---
## Booleans
###### Compare Boolean Implicitly

```js
// Dirty
if (isValidEmail === true) {

}

// Clean
if (isValidEmail) {

}
}
```


###### Assign Booleans Implicitly
```js
// Dirty

let isCorporate = false;

if (accessType === 5) {
  isCorporate = true;
} else {
  isCorporate = false;
}

// Clean
const isCoporate = accessType === 5;

```


###### Don’t be anti-negative
```js
// Dirty
if (!isNotLoggedIn) {

}

// Clean
if (loggedIn) {

}
```

## Ternary
```js
// Dirty
let fieldLabel = '';

if (accessType === 5) {
  fieldLabel = 'Corporate User';
} else {
  fieldLabel = 'User';
}

// Clean
const fieldLabel = accessType === 5 ? 'Corporate User' : 'User';
```
## Complex Conditionals
##### Intermediate Variables
```js
// Dirty
if (ninjaLevel === NINJALEVEL.SENSEI && (yearsOfExperience > 5 && ninjaSkills.indexOf('Ninjutsu') !== -1) {

}

// Clean
const eligibleForMastery = ninjaLevel === NINJALEVEL.SENSEI && (yearsOfExperience > 5 && ninjaSkills.indexOf('Ninjutsu') !== -1;

if (eligibleForMaster) {

}
```
##### Encapsulate via Function
```js
// Dirty
if (ninjaLevel === NINJALEVEL.SENSEI && (yearsOfExperience > 5 && ninjaSkills.indexOf('Ninjutsu') !== -1) {

}

// Clean
const validForNinjaMastery = (ninjaLevel, yearsOfExperience, ninjaSkills) => {
    return ninjaLevel === NINJALEVEL.SENSEI && (yearsOfExperience > 5 && ninjaSkills.indexOf('Ninjutsu') !== -1
};

if (validForNinjaMastery('SENSEI', 10, ['Ninjutsu'])) {

}

```