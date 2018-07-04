
# colors-regex
[![package version](https://img.shields.io/npm/v/colors-regex.svg?style=flat-square)](https://npmjs.org/package/colors-regex)
[![package downloads](https://img.shields.io/npm/dm/colors-regex.svg?style=flat-square)](https://npmjs.org/package/colors-regex)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/colors-regex.svg?style=flat-square)](https://npmjs.org/package/colors-regex)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Regular expressions for rgb, rgba, hex, hexa, hsl &amp; hsla colors

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install colors-regex
$ # OR
$ yarn add colors-regex
```

## Usage

```js
const assert = require('assert')
const colorRegex = require('colors-regex')

assert(colorRegex.hex.strict.test('#000000')) // Success
assert(colorRegex.hex.strict.test('#2')) // Failure

```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    