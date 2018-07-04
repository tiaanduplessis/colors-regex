const assert = require('assert')
const colorRegex = require('colors-regex')

assert(colorRegex.hex.strict.test('#000000')) // Success
assert(colorRegex.hex.strict.test('#2')) // Failure
