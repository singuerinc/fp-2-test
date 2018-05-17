const { randToWord } = require('./index');

var assert = require('assert');

describe('randToWord', function() {
  it('should return 00000', function() {
    assert.equal(randToWord('ABCDE', 0, 0), '00000');
  });

  it('should return A0000', function() {
    assert.equal(randToWord('ABCDE', 1, 0), 'A0000');
  });

  it('should return AB000', function() {
    assert.equal(randToWord('ABCDE', 2, 0), 'AB000');
  });

  it('should return ABC00', function() {
    assert.equal(randToWord('ABCDE', 3, 0), 'ABC00');
  });

  it('should return ABCD0', function() {
    assert.equal(randToWord('ABCDE', 4, 0), 'ABCD0');
  });

  it('should return ABCDE', function() {
    assert.equal(randToWord('ABCDE', 5, 0), 'ABCDE');
  });

  it('should return ABCD1', function() {
    assert.equal(randToWord('ABCD1', 4, 1), 'ABCD1');
  });

  it('should return ABCDE', function() {
    assert.equal(randToWord('ABCDE', 5, 1), 'ABCDE');
  });
});