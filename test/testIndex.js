var assert = require('assert');
var index = require('../index.js');
var sinon = require('sinon');

describe('.testString', function () {
  it('returns "my test string"', function () {
    assert.equal(index.testString, "my test string");
  });
});
describe('.init', function () {
  it('returns a helpful message about "git init" to the command line', function () {
    var consoleSpy = sinon.spy(console, "log");
    index.init();
    assert(consoleSpy.calledWith("Helpful message about how git works"));
    console.log.restore();
  });
});
