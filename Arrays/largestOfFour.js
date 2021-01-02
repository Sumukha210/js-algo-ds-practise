// Return Largest Numbers in Arrays
/**
 * largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.

   largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].
 * 
 */

const allArr = [
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];

// const largestOfFour = (arr = []) => {
//   //loop arr
//   //find the largest number in each arr
//   //return an arr which contains the all the largest num of that particular arr
//   let largestOfArr = [];

//   arr.forEach(ele => {
//     largestOfArr.push(Math.max(...ele));
//   });

//   return largestOfArr;
// };
//for space o(n)
//for time, o(n)

//clean syntax
const largestOfFour = arr => arr.map(ele => Math.max(...ele));

console.log(largestOfFour(allArr));
