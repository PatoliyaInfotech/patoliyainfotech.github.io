---
layout: reactjs
title: "Properties"
---

##### Property management
Property management is tricky at any level, but with ES6 destructuring and React's state-based approach, there are quite a few ways to clean up the look of a lot of properties.

Let's say we're making a mapping application that has a list of saved addresses and a GPS coordinate for your current location.

The current user information of position and proximity to favorite address should be in the parent Component of App like this:

```js
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userLat: 0,
      userLon: 0,
      isNearFavoriteAddress: false
    };
  }
}
```

So, when we make an address and we want it to note how close you are to the address, we're passing at least two properties from App.

In App render ():
```js
<Address
  ... // Information about the address
  currentLat={this.state.userLat}
  currentLong={this.state.userLon} />
```

In the render function for Address Component:
```js
render () {
  let { houseNumber,
        streetName,
        streetDirection,
        city,
        state,
        zip,
        lat,
        lon,
        currentLat,
        currentLon } = this.props;
  return ( ... );
}
```

Already, you can see how this is getting unwieldy. If we take the two sets of information and break them out into their own objects, it becomes much more manageable.

In our App constructor ():

```js
this.state = {
  userPos: {
    lat: 0,
    lon: 0
  },
  isNearFavoriteAddress: false
};
```
At some point before App render ():

```js
let addressList = [];
addressList.push({
  houseNumber: "1234",
  streetName: "Street Rd",
  streetDirection: "N",
  city: "City",
  state: "ST",
  zip: "12345",
  lat: "019782309834",
  lon: "023845075757"
});
```

In App render ():
```js
<Address addressInfo={addressList[0]} userPos={this.state.userPos} />
```

In the render function for Address Component
```js
render () {
  let { addressInfo, userPos } = this.props;
  let { houseNumber,
        streetName,
        streetDirection,
        city,
        state,
        zip,
        lat,
        lon } = addressInfo;
  return ( ... );
}
```
