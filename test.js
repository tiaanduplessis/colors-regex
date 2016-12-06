/* eslint-env mocha */
'use strict'

const cr = require('./index')
const assert = require('chai').assert

describe('Color regular expressions', () => {
  it('should be frozen', () => {
    assert.isFrozen(cr)
  })

  it('should be valid hex', () => {
    assert(cr.hex.strict.test('#fff'), '#fff is not valid')
    assert(cr.hex.strict.test('#000000'), '#000000 is not valid')
  })
})
