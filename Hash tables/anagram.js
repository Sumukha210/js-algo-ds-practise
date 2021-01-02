//given an array of strings, return string grouped by anagram

//anagram= when the two words have the same letters,but they can be in a diffrent order

//input=["eat","tea","art"]
//output=[["eat","tea"],["art"]]

const anagrams = strs => {
  let output = {};

  //loop through array
  //check if the string matches the reversed string,if does,then add that as key , where the value contains the str and the reversed string ,if not then add key which that str in an array
  strs.forEach(item => {
    if (output[item]) {
    } else {
      output[item] = [item];
    }
  });

  console.log(output);
};
console.log(anagrams(["eat", "tea", "art"]));
