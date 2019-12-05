import * as chai from 'chai';

import addNumbers from './addNumbers';

const { expect } = chai

describe('Function tests', () => {
  it('Check sum of two numbers function addNumbers', () => {
    const sumTest = addNumbers(4, 6)
    expect(sumTest).to.equal(10)
  })
})
