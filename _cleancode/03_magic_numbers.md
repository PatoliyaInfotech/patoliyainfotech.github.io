---
layout: cleancode
title: "Magic Numbers"
---
```js
// Dirty
if (accessType === 5) {

}


// Clean

const CORPORATE = 5;

if (accessType === CORPORATE) {

}

```