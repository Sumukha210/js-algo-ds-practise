//Find the first unique chars in the string, if you find unique chars=1 else return =-1
//aabbcd=here first unique chars is c, return 1
//aabbdd=here we dont find any unique chars so we return -1
//assume our input always a string,also it should not empty

//solution 1
const findFirstUniqueChars = str => {
  let output = {};
  //Big O for space is constant, i.e,BigO(1)
  //because the letter from a-z=32 and A-Z=32, total is 64

  //in order to check chars we have to loop through string
  //convert str to array

  [...str].forEach(item1 => {
    if (output[item1]) {
      output[item1]++;
    } else {
      output[item1] = 1;
    }
  });

  //   console.log(output);

  for (let i = 0; i < str.length; i++) {
    if (output[str[i]] > 1) {
      console.log(str[i]);
      return 1;
    }
  }

  return -1;
};

//Big O for time is Big(n+n)=>Big(2n)=>Big(n)

console.log(findFirstUniqueChars("abcc"));

//solution 2
const findFirstUniqueChars2 = (str = "") => {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return 1;
    }
  }
  return -1;
};

console.log(findFirstUniqueChars2("abbc"));
