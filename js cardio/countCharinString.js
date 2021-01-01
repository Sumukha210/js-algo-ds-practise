//count each char in word and return that count

const countCharloop = word => {
	//create an object to hold key and values

	const countResult = {};
	/*

 loop over the word
  and check if char is already present or not
     ,if it is presene then increment the value of the key
      if it is not presene then add key and value
   */

	[...word].map(char => (countResult[char] ? (countResult[char] += 1) : (countResult[char] = 1)));

	console.log(countResult);

	//return that object
};

countCharloop('hello'); //{h:1,e:1,l:2}
