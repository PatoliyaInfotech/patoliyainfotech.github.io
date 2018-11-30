---
layout: reactjs
title: "Dynamic renders"
---

##### Mapping out arrays
React uses the .map() function to lay out arrays in order, using one parameter from the arrays as a key.

```js
render () {
  let pokemon = [ "Pikachu", "Squirtle", "Bulbasaur", "Charizard" ];
  return (
    <ul>
      {pokemon.map(name => <li key={name}>{name}</li>)}
    </ul>
  );
}
```

You can even use our handy-dandy spread functions to throw a whole list of parameters in by an object using Object.keys() (keeping in mind that we still need a key).
```js
render () {
  let pokemon = {
    "Pikachu": {
      type: "Electric",
      level: 10
    },
    "Squirtle": {
      type: "Water",
      level: 10
    },
    "Bulbasaur": {
      type: "Grass",
      level: 10
    },
    "Charizard": {
      type: "Fire",
      level: 10
    }
  };
  return (
    <ul>
      {Object.keys(pokemon).map(name => <Pokemon key={name} {... pokemon[name]} />)}
    </ul>
  );
}
```


##### React ternary operators
In React, you can use operators to do a conditional render just like a variable declaration. In Rule #1, we looked at this for stating whether our dog was good or bad. It's not entirely necessary to create an entire line of code to decide a one-word difference in a sentence, but when it gets to be large code blocks, it's difficult to find those little ?'s and :'s.

```js
class SearchResult extends Component {
  render () {
    let { results } = this.props;
    return (
      <section className="search-results">
        {results.length > 0 &&
          results.map(index => <Result key={index} {... results[index] />)
        }
        {results.length === 0 &&
          <div className="no-results">No results</div>
        }
      </section>
    );
  }
}
```
Or, in true ternary fashion
```js
class SearchResult extends Component {
  render () {
    let { results } = this.props;
    return (
      <section className="search-results">
        {results.length > 0
          ? results.map(index => <Result key={index} {... results[index] />)
          : <div className="no-results">No results</div>
        }
      </section>
    );
  }
}
```

Even with our tidy result mapping, you can see how the brackets are already nesting quite densely. Now, imagine if our render had more than just one line. It can pretty quickly get unreadable. Consider an alternative:
```js
class SearchResult extends Component {
  render () {
    let { results } = this.props;
    let outputJSX;
    if (results.length > 0) {
      outputJSX = (
        <Fragment>
          {results.map(index => <Result key={index} {... results[index] />)}
        </Fragment>
      );
    } else {
      outputJSX = <div className="no-results">No results</div>;
    }
    return <section className="search-results">{outputJSX}</section>;
  }
}
```