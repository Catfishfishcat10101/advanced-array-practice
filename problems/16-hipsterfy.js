/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function(word) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let reversedWord = word.split('').reverse().join('');

  for (let i = 0; i < reversedWord.length; i++) {
    if (vowels.includes(reversedWord[i])) {
      return word.slice(0, word.length - i - 1) + word.slice(word.length - i);
    }
  }

  return word;
}

let hipsterfy = function(sentence) {
  let words = sentence.split(' ');

  words.forEach((word, index) => {
    words[index] = removeLastVowel(word);
  });

  return words.join(' ');
}

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
