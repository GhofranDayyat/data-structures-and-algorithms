'use strict';

const reverse = require('../../../arrayReverse/array-reverse.js');
const inputArr = [1,2,3,4]
describe('Reverse', () => {
  it('works', () => {
    expect(reverse(inputArr)).toStrictEqual([4,3,2,1]);
  });
});
