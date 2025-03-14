/*

Write a function `removeEWords(sentence)` that accepts a sentence string as an
arg. The function should return a new string, containing only the words that
don't have the letter "e" in them.

Solve this using Array's `filter()` method.
Examples:

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'

*/

let removeEWords = function(sentence) {
  let words = sentence.split(" ");
  let filteredWords = words.filter(word => !word.includes("e"));
  return filteredWords.join(" ");
    // Your code here
};
console.log(removeEWords("I love eating pizza")); // "I pizza"
console.log(removeEWords("The quick brown fox jumps over the lazy dog"));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = removeEWords;
} catch (e) {
  module.exports = null;
}
