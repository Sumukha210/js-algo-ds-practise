/**
 * find the pair,sum of that pair is equal to 8,if there is no match then returns false
 * [1,2,4,4]=8, here ans is [4,4]
 * [1,3,6,4]=8,here ans is false
 */

const findSumInArr = arr => {
	return arr.map(first => {
		arr.map(second => {
			// if (first + second === 8) {

			// }
			console.log(first, second);
			console.log(first + second);
		});
	});
};

//O(n*n)=>O(n^2)

console.log(findSumInArr([1, 2, 6, 4]));
