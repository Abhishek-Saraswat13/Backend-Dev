function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = {
  capitalize,
  reverseString,
  countVowels,
};
const utils = require("./stringUtils");

console.log(utils.capitalize("hello"));      // Hello
console.log(utils.reverseString("hello"));   // olleh
console.log(utils.countVowels("hello")); 