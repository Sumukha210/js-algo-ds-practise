// Return Largest Numbers in Arrays
//largestOfFour fun returns an arr
// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001]
const largestOfFour = (arr = []) => {
  //loop through arr

  //   let maxNum = Math.max(...item);
  //   let result = {};
  let max = 0; //O(1)

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (Math.max(...element) > max) {
      max = Math.max(...element);
    }
  }
  //o(n)

  console.log("maximun num", max);
  return arr.filter(item => Math.max(...item) === max);
  //o(n)
};

//for time,o(n)
//for space,o(n)

console.log(
  largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
