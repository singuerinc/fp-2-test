const { randToWord } = require('./randToWord');

var assert = require('assert');

describe('randToWord', function() {
  describe('simple', function() {
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
  });
  describe('with spaces', function() {
    it('should return Yugo Nakamura', function() {
      assert.equal(randToWord('Yugo Nakamura', 13, 0), 'Yugo Nakamura');
    });

    it('should return with spaces 1', function() {
      assert.equal(randToWord('Yugo Nakamura', 3, 0), 'Yug0 00000000');
    });

    it('should return with spaces 2', function() {
      assert.equal(randToWord('Yugo Nakamura', 4, 0), 'Yugo 00000000');
    });

    it('should return with spaces 3', function() {
      assert.equal(randToWord('Yugo Nakamura', 5, 0), 'Yugo 00000000');
    });

    it('should return with spaces 4', function() {
      assert.equal(randToWord('Yugo Nakamura', 6, 0), 'Yugo N0000000');
    });
  });
});
