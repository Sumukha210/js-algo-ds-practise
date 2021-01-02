//capitalize the first letter in a word
//input="i love you" output="I Love you"

// const capitalizeFirstLetterInAWord = str => {
//   //split string by emplty space
//   const result = str
//     .split(" ")
//     .map(word => word.replace(word[0], word[0].toUpperCase()));
//   console.log(result);
// };

//for time, O(n)
//for space, O(1)

//clean code
const capitalize = str =>
  str.length &&
  str
    .trim()
    .split(" ")
    .map(word => word.replace(word[0], word[0].toUpperCase()))
    .join(" ");

console.log(capitalize("hello darling I love You"));
