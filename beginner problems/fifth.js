/**
 * Write a JavaScript function that returns a passed string with letters in alphabetical order
 */

const alphabeticalOrder = (str = "") => {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str[i].charCodeAt());
  }

  return result
    .sort((a, b) => a - b)
    .map(ele => (ele = String.fromCharCode(ele)))
    .join("");
};

// console.log(alphabeticalOrder1("hello"));

const alphabeticalOrder2 = (str = "") =>
  str
    .split("")
    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .join("");

// console.log(alphabeticalOrder2("hello"));

/**
 * Write a JavaScript function that accepts a string as a parameter and counts the number of
vowels within the string.
 */

const countVowels = (str = "") => {
  let total = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  str.split("").forEach(char => vowels.indexOf(char) != -1 && total++);

  return total;
};
// console.log(countVowels("ant"));

/**
 * Write a JavaScript function to extract unique characters from a string
 */
const findUniqueValue1 = (str = "") => {
  let letters = {};
  str
    .split("")
    .forEach(char => (letters[char] ? letters[char]++ : (letters[char] = 1)));

  return Object.keys(letters).filter(ele => letters[ele] === 1);
};

// console.log(findUniqueValue1("hello"));

/**
 * Write a JavaScript function to find the first not repeated character
Example string: 'abacddbec'
Expected output: 'e'
 */
const findNotRepeatedChar = (str = "") => {
  let letters = {};
  str
    .split("")
    .forEach(char => (letters[char] ? letters[char]++ : (letters[char] = 1)));

  return Object.keys(letters).find(ele => letters[ele] === 1);
};

console.log(findNotRepeatedChar("abacddbec"));
