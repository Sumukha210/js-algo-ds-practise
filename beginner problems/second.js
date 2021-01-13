/**
 * Write a javascript program to create a new string from a given string taking the first 3 char's and the last 3 cha's of string and adding them together.The string length must be 3 or more, if not, the original string is returned

 */
const newString = str =>
  str.length >= 3 ? `${str.slice(0, 3)}${str.slice(-3)}` : str;
// console.log(newString("abc"));
// console.log(newString("abcdef"));

/**
 * Write a JavaScript program to extract the first half of a string of even length.
 */
const firstHalf = (str = "") => {
  let mid = str.length / 2;
  return str.slice(0, mid);
};
// console.log(firstHalf("sumukha"));

/**
 * Write a JavaScript program to concatenate two strings except their first character.
 */
const concatenate = (str1 = "", str2 = "") =>
  `${str1.slice(1)}${str2.slice(1)}`;
// console.log(concatenate("abc", "def"));

/**
 * Given two values, write a JavaScript program to find out which one is nearest to 100
 */
const findNearest = (num1, num2) => {
  if (num1 < 100 && num2 < 100) {
    if (100 - num1 < 100 - num2) {
      return num1;
    } else {
      return num2;
    }
  } else if (num1 > 100 && num2 > 100) {
    if (num1 - 100 < num2 - 100) {
      return num1;
    } else {
      return num2;
    }
  }
};
// console.log(findNearest(99, 1));
// console.log(findNearest(110, 105));

/**
 * Write a JavaScript program to check a given string contains 2 to 4 occurrences of a specified
character.
 */
const checkOccurences = (str = "", char = "") => {
  let info = {};
  str
    .toLowerCase()
    .split("")
    .forEach(letter => (info[letter] ? info[letter]++ : (info[letter] = 1)));

  console.log(info);

  if (info[char] >= 2 && info[char] <= 4) {
    return true;
  }
  return false;
};

console.log(checkOccurences("ooh!", "o"));
