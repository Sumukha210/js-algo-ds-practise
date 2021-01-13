/**
 * Given a year, report if it is a leap year
 * num/4
 */

const checkLeapYear = num => num % 4 === 0;
// console.log(checkLeapYear(2016));

/**
 * Write a JavaScript program to compare two objects to determine if the first one contains
the same properties as the second one (which may also have additional properties). For
example, objA and objB are equal (but not equal to objC).
 */

const checkObjprops = (objA, objB) =>
  Object.keys(objA).every(ele => objB.hasOwnProperty(ele));

const objA = { a: 1, b: 1, c: 1 };
const objB = { a: 1, b: 1, c: 1, d: 3 };
const objC = { a: 1, b: 1, d: 1 };

// console.log(checkObjprops(objA, objB));
// console.log(checkObjprops(objA, objC));
// console.log(checkObjprops(objB, objC));

/**
 * Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array.
A new line indicates a new row in the array. Example input:
abc,def,ghi
jkl,mno,pqr
stu,vwx,yza

 */

const convertCSVtoARR = str => str.split("\n").map(ele => ele.split(","));

let string = `abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`;
// console.log(convertCSVtoARR(string));

/**
 * Write a JavaScript program to generate a random hexadecimal color code.
 */
let hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const generateRandomNum = () =>
  hexCode[Math.floor(Math.random() * hexCode.length)];
//#ff0011
//my solution
// const generateHexCode = () =>
//   `#${generateRandomNum()}${generateRandomNum()}${generateRandomNum()}${generateRandomNum()}${generateRandomNum()}${generateRandomNum()}`;

//author solution
const generateHexCode = () =>
  `#${Array.from({ length: 6 }).map(generateRandomNum).join("")}`;

console.log(generateHexCode());
