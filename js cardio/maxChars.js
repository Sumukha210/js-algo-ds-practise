//find the max chars in a string
//javascript, here a=2

const maxChars = str => {
  let result = {};
  //convert str to array and loop through array
  [...str].map(item => {
    if (result[item]) {
      result[item]++;
    } else {
      result[item] = 1;
    }
  });

  for (const key in result) {
    console.log(key);
  }
};

//for time, O(n)

console.log(maxChars("javaaaa"));
