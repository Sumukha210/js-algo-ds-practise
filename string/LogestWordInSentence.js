//find the longest word in a sentence

const findLongest = str => {
  const arr = str.split(" ");
  let longest = "";

  arr.forEach(word => {
    if (word.length > longest.length) {
      longest = word;
    }
  });

  return longest;
};
//o(n) for time
//o(n) for space

console.log(findLongest("i went straightrrr into the beach"));
