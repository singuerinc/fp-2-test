# Random chars to text

Simple Yugo Nakamura effect's text using functional programming

## Usage

```js
import { randToWord } from './randToWord';

randToWord('ABCDE', 0, 0); // => '00000'
randToWord('ABCDE', 3, 0); // => 'ABC00'
randToWord('ABCDE', 5, 0); // => 'ABCDE'

randToWord('ABCDE', 3, 'X'); // => 'ABCXX'
```
