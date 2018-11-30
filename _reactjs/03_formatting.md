---
layout: reactjs
title: "Formatting"
---

##### Code comments and propTypes

Styleguidist will display your components’ JSDoc comment blocks. Also, it will pick up props from propTypes declarations and display them in a table.

```js
import React from 'react'
import PropTypes from 'prop-types'

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export default class Button extends React.Component {
  static propTypes = {
    /** Description of prop "foo". */
    foo: PropTypes.number,
    /** Description of prop "baz". */
    baz: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }
  static defaultProps = {
    foo: 42
  }

  render() {
    /* ... */
  }
}
```

##### Destructure your props
One of my favorite ES6 features is destructuring. It makes assigning object properties to variables feel like much less of a chore. Let's take a look at an example.

Say we have a dog that we want to display as a div with a class named after its breed. Inside the div is a sentence that notes the dog's color and tells us if it's a good dog or bad dog.


```js
class Dog extends Component {
  render () {
    return <div className={this.props.breed}>My {this.props.color} dog is {this.props.isGoodBoy ? "good" : "bad"}</div>;
  }
}
```

We can break it out by assigning all of the properties of props to local variables.

```js
let breed = this.props.breed;
let color = this.props.color;
let isGoodBoy = this.props.isGoodBoy;
```

Using ES6, we can put it in one clean statement like this:
```js
let { breed, color, isGoodBoy } = this.props;
```

To keep everything clean, we put our ternary operator.

```js
class Dog extends Component {
  render () {
    let { breed, color, isGoodBoy } = this.props;
    let identifier = isGoodBoy ? "good" : "bad";
    return <div className={breed}>My {color} dog is {identifier}</div>;
  }
}
```

##### The rule of 3's
If you have three or more properties, then put them on their own line both in the instance and in the render function.

Bad:
```js
class GalleryImage extends Component {
  render () {
    let { imgSrc, title, artist, clas, thumbnail, breakpoint } = this.props;
    return (
      <figure className={clas}>
        <picture>
          <source media={`(min-width: ${breakpoint})`} srcset={imgSrc} />
          <img src={thumbnail} alt={title} />
        </picture>
        <figcaption>
          <p>Title: {title}</p>
          <p>Artist: {artist}</p>
        </figcaption>
      </figure>
    );
  }
}
```

It can get to be too much of a codeblock to read. Drop each property to the next line for a clean, readable look:

Good:
```js
class GalleryImage extends Component {
  render () {
    let { imgSrc,
          title,
          artist,
          clas,
          thumbnail,
          breakpoint } = this.props;
    return (
      <figure className={clas}>
        <picture>
          <source media={`(min-width: ${breakpoint})`} srcset={imgSrc} />
          <img src={thumbnail} alt={title} />
        </picture>
        <figcaption>
          <p>Title: {title}</p>
          <p>Artist: {artist}</p>
        </figcaption>
      </figure>
    );
  }
}


```