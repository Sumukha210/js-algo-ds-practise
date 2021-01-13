/**
 * Write a JavaScript program to find the number of even digits in a an array of integers
 */

const findTotalEvenNums = arr => {
  //   let total = 0;
  //   arr.forEach(ele => {
  //     if (ele % 2 === 0) {
  //       total++;
  //     }
  //   });

  //   return total;

  return arr.filter(ele => ele % 2 === 0).length;
};
// console.log(findTotalEvenNums([1, 2, 3, 4, 5, 6, 7]));

/**
 * Write a JavaScript program to find the number of even values up to a given number
 */
const numsUptoEle = num => {
  let numbers = [];
  for (let index = 1; index <= num; index++) {
    numbers.push(index);
  }
  return numbers.filter(ele => ele % 2 === 0);
};
// console.log(numsUptoEle(5));

/**
 * Write a JavaScript program to check whether a given array of integers is sorted in ascending
order
 */
const checkOrder = arr => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      return false;
    }
  }
  return true;
};
// console.log(checkOrder([1, 2, 3, 10, 4, 5, 6]));

/**
 * Write a JavaScript program to get the largest even number from an array of integers.
 */

const largestEvenNum = arr => Math.max(...arr.filter(ele => ele % 2 === 0));
// console.log(largestEvenNum([1, 28, 3, 10, 4, 5, 6]));

/**
 * Write a JavaScript program to replace the first digit in a string (should contain at least one
digit) with a $ character
 */

const replaceNumWith$ = str => str.replace(/[0-9]/, "$");

console.log(replaceNumWith$("hell23 how 2"));
