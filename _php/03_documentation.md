---
layout: php
title: "Code Documentation 
"
---

### Source Code Documentation
All code must be documented with inline comments. The syntax is similar to that known from the Java programming language (JavaDoc). This way code documentation can automatically be generated.

##### Class documentation
```js
/**
 * First sentence is short description. Then you can write more, just as you like
 *
 * Here may follow some detailed description about what the class is for.
 *
 * Paragraphs are separated by an empty line.
 */
class SomeClass {
 ...
}
```
Additional tags or annotations, such as @see or @Flow\Aspect, can be added as needed.

##### Documenting variables, constants, includes
```js
/**
 * A short description, very much recommended
 *
 * @var string
 */
protected $title = 'Untitled';
```
In general you should try to code in a way that the types can be derived (e.g. by using type hints and annotations). In some cases this is not possible, for example when iterating through an array of objects. In these cases it’s ok to add inline @var annotations to increase readability and to activate auto-completion and syntax-highlighting:
```js
protected function someMethod(array $products) {
   /** @var $product \Acme\SomePackage\Domain\Model\Product */
   foreach ($products as $product) {
       $product->getTitle();
   }
}

```

##### Method documentation
```js
/**
 * A description for this method
 *
 * Paragraphs are separated by an empty line.
 *
 * @param \Neos\Blog\Domain\Model\Post $post A post
 * @param string $someString This parameter should contain some string
 * @return void
 */
public function addStringToPost(\Neos\Blog\Domain\Model\Post $post, $someString) {
 ...
}
```