const { __, always, map, equals, addIndex, lt, join, ifElse } = require('ramda');
const mapIndexed = addIndex(map);

const randToWord = (word, index, rndChar) => {
  const space = always(' ');
  const isSpace = equals(__, space());
  const char = (char, idx) => (lt(idx, index) ? char : ifElse(isSpace, space, () => rndChar)(char));
  return join('', mapIndexed(char, word));
};

module.exports = {
  randToWord
};
