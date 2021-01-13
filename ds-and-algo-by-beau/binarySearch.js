// const binarySearch = (arr = [], item) => {
//   let low = 0;
//   let high = arr.length - 1;

//   while (low <= high) {
//     let mid = (low + high) / 2;
//     let guess = arr[mid];

//     if (guess == item) {
//       return mid;
//     }

//     if (guess > item) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }

//     return "nothing found";
//   }
// };

// const myList = [1, 3, 5, 7, 9];
// console.log(binarySearch(myList, 3));
// console.log(binarySearch(myList, -1));

//BINARY SEARCH (bs)
//time, O(log n)

//binary search must takes array which consists sorted elements

//alternative to BS is linear search(Ls)
//ls check each item from the begining, until it founds the element, so time complexcity is O(n)

//now consider bs
// suppose,
//target=20
//BS makes two pointers,one at the start and another at the end, i.e.,
/**
 * target=20
 * start=0
 * end=arr.length -1
 *
 * next step,
 * check the number in the middle of the start and end
 * suppose middle number is 10,target > middle, then it moves the start pointer towards end
 *
 */

const binarySearch = (arr = [], target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return "not found=-1";
};
let arr1 = [-2, 3, 4, 7, 8, 9, 11, 13];
//  0   1  2  3  4  5   6   7
console.log(binarySearch(arr1, 11)); //o(log n)=2

/**
 * target=11
 * 1st time
 * l=0
 * r=arr.length-1=7
 *
 * while(0<=7)
 * {
 * true
 * mid=0+7/2= 3.5=>3
 * if(7===11)
 * {
 * false
 * }else if(7>11)
 * {
 * false
 * right=mid-1 7-1 = 6
 * }
 * }else {
 * left =mid +1= 3+1=4
 * }
 *
 *
 *
 * //at last
 * return not found
 * }
 *
 *
 */
