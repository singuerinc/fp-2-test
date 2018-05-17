const { __, addIndex, map, range, toUpper } = require('ramda');
const mapIndexed = addIndex(map);
const { randToWord } = require('./randToWord');

const doRandToWord = word => (__, idx) => toUpper(randToWord(word, idx, '/'));

const words = word => mapIndexed(doRandToWord(word), range(0, word.length + 1));

module.exports = {
  words
};

// map(console.log, words);
