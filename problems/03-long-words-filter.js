/*

Write a function `longWords(words)` that takes in an array of words.
The function should return an array containing only the words that are longer
than 5 characters.

Solve this using Array's `filter()` method.

Examples:

console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]

*/

let longWords = function(words) {
  return words.filter(word => word.length > 5);
};

console.log(longWords(["apple", "banana", "orange", "grapefruit"])); // ["banana", "orange", "grapefruit"]
console.log(longWords(["cat", "dog", "elephant", "lion"])); // ["elephant"]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = longWords;
} catch (e) {
  module.exports = null;
}
