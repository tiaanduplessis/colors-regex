/* eslint-env mocha */
'use strict'

const cr = require('./index')
const assert = require('chai').assert

describe('Color regular expressions', () => {
  it('should be valid hex', () => {
    assert(cr.hex.strict.test('#fff'))
    assert(cr.hex.strict.test('#000000'))
  })

  it('should be a vaild hexa', () => {
    assert(cr.hexa.strict.test('#56ff0077'))
  })

  it('should be a valid rgb', () => {
    assert(cr.rgb.strict.test('rgb(0,0,0)'))
    assert(cr.rgb.strict.test('rgb(0, 0, 0)'))
  })

  it('should be a valid rgba', () => {
    assert(cr.rgba.strict.test('rgba(0,0,0, 1.0)'))
    assert(cr.rgba.strict.test('rgba(0,0,0, 0.6)'))
    assert(cr.rgba.strict.test('rgba(255,255,255, .9)'))
  })

  it('should be a valid hsl', () => {
    assert(cr.hsl.strict.test('hsl(0, 0%, 1%)'))
    assert(cr.hsl.strict.test('hsl(0,5%,1%)'))
  })

  it('should be a valid hsla', () => {
    assert(cr.hsla.strict.test('hsla(0, 0%, 1%, .9)'))
    assert(cr.hsla.strict.test('hsla(0,5%,1%, 1.0)'))
  })
})
