//merge sorted array
//mergeSortedArrays([0,3,4,31], [3,4,6,30])=>[0,3,3,4,4,6,30,31]

const mergeSortedArrays = (arr1 = [], arr2 = []) => {
  //sort arr1
  const sortedArr1 = arr1.sort((a, b) => a - b);

  //sort arr2
  const sortedArr2 = arr2.sort((a, b) => a - b);

  //returns the sorted the arrays
  return [...sortedArr1, ...sortedArr2].sort((a, b) => a - b);
};

//for time, O(n+n+n)=>o(3n)=>o(n)

console.log(mergeSortedArrays([0, 4, 3, 4, 31], [3, 4, 6, 30]));
