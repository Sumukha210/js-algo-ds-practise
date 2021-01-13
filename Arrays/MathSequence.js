//find the math sequence

const findMathSequence = (arr = []) => {
  for (let i = 0; i < arr.length; i++) {
    let a1 = arr[i];
    let a2 = arr[i + 1];
    let a3 = arr[i + 2];
    if (a1 + a2 === a3) {
      return "arithematic pattern";
    }
  }
  return -1;
};

console.log(findMathSequence([2, 4, 6, 9])); //arithematice sequence,i.e,. add
console.log(findMathSequence([10, 20, 30, 40])); //arithematice sequence,i.e,. add
