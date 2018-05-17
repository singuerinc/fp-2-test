const { __, addIndex, map, range } = require('ramda');
const mapIndexed = addIndex(map);
const { randToWord } = require('./randToWord');

const iterations = range(0, 6);
const doRandToWord = word => (__, idx) => randToWord(word, idx, 0);
const words = mapIndexed(doRandToWord("ABCDE"), iterations);

map(console.log, words); // => 00000 A0000 AB000 ABC00 ABCD0 ABCDE