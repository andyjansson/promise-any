# Promise.any() [![Build Status][ci-img]][ci]

[ci-img]:  https://travis-ci.org/andyjansson/promise-any.svg
[ci]:      https://travis-ci.org/andyjansson/promise-any

## Installation

```js
npm install promise-any-ext
```

## Usage
```js
var Promise = global.Promise || require("es6-promise").Promise;
Promise.any = require('promise-any-ext');

var promises = [Promise.reject('a'), Promise.resolve('b')];

Promise.any(promises).then(function (value) {
	// value is b
});
```