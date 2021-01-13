//1)que
const arr = [1, 2, 4, 5]; //how to this numbers and get sum?
//1)ans
const result = arr.reduce((acc, curr) => acc + curr, 0);

//2) que const arr=[1-100] //except 1 number is missing, how to check the is missing

//3)part(3)
const arr3 = [1, 2, 3, 4];
//find(return the arr with ) the max and min sum in this arr
//take 1 out, sum =2+3+4=9
//take 2 out, sum =1+3+4=8
const findMinMax = (array = []) => {
  const min = [];
  const max = [];

  for (let i = 0; i < array.length; i++) {
    const result = array.slice(array[i]);
    console.log(result);
  }

  return { min, max };
};
console.log(findMinMax(arr3));
