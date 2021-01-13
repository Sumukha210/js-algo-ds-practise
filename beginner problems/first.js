const alphabet = require("../config/index");

/**Write a JavaScript program to check two numbers and return true if one of the number is
100 or if the sum of the two numbers is 100
 */

//my solution
const checkTwoNums1 = (num1, num2) => {
  if (num1 === 100 || num2 === 100) {
    return true;
  } else if (num1 + num2 === 100) {
    return true;
  }
  return false;
};
console.log(checkTwoNums1(10, 90));

//author solution
const checkTwoNums2 = (a, b) => a === 100 || b === 100 || a + b === 100;
console.log(checkTwoNums2(10, 90));

/**
 * Write a JavaScript exercise to get the extension of a filename
 */
const checkExt = fileName => fileName.slice(fileName.lastIndexOf("."));

console.log(checkExt("filname hllo.img"));

/** * 
 * Write a JavaScript program to replace every character in a given string with the character
following it in the alphabet
 */
//author solution
const moveForWard1 = (str = "") =>
  str
    .toLowerCase()
    .split("")
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");
console.log(moveForWard1("ant"));

//my solution
const moveForward2 = (str = "") =>
  str
    .toLowerCase()
    .split("")
    .map(char => (char = alphabet[alphabet.indexOf(char) + 1]))
    .join("");

console.log(moveForward2("ant"));

/*
*Write a JavaScript program to get the current date.
Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*
*/
const formatDate = () => {
  const date = new Date();
  return date.toLocaleDateString();
};

console.log(formatDate());

/**
 * Write a JavaScript program to create a new string adding "New!" in front of a given string. If
the given string begins with "New!" already then return the original string.
 * 
 */
const newString = str =>
  str === "New!" || str === "new!" ? str : `New! ${str}`;
console.log(newString("office"));
