# colors-regex
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![Build Status](https://travis-ci.org/tiaanduplessis/colors-regex.svg?branch=master)](https://travis-ci.org/tiaanduplessis/colors-regex)

> Regular expressions for rgb, rgba, hex, hexa, hsl &amp; hsla colors

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Contribute](#contribute)
- [License](#license)


## Install

```sh
$ npm install --save colors-regex
```

```sh
$ yarn add colors-regex
```

## Usage

```js
const assert = require('assert')
const colorsRegex = require('colors-regex');

assert(colorRegex.hex.strict.test('#000000')) // Success
assert(colorRegex.hex.strict.test('#2')) // Failure

```

## API
The module exports a single object with the different color types as properties. Each color type has a strict & global regex.
```js
const colorRegex = require('./index')
console.log(colorRegex)
// { hex:
//    { strict: ...
//      global: ...},
//   hexa:
//    { strict: ...,
//      global: ... },
//   rgb:
//    { strict: ...,
//      global: ... },
//   rgba:
//    { strict: ...,
//      global: ... },
//   hsl:
//    { strict: ...,
//      global: ...},
//   hsla:
//    { strict: ...,
//      global: ... } }

```



## Contribute

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

Note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

Created with ♥ by [Tiaan](http://tiaanduplessis.co.za). Licensed under the MIT License.
