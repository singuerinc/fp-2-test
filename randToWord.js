const { map, addIndex, lt, join } = require('ramda');
const mapIndexed = addIndex(map);

const randToWord = (word, index, rndChar) => {
  const char = (char, idx) => lt(idx, index) ? char : rndChar;
  return join('', mapIndexed(char, word));
};

module.exports = {
  randToWord
}