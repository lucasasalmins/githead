var assert = require('assert');
var index = require('../index.js');

describe('.testString', function () {
  it('returns "my test string"', function () {
    assert.equal(index.testString, "my test string");
  });
});
