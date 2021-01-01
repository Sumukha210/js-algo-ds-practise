//reverse a string
/**
 * input=hello then output is olleh
 *
 * commonly there are two appr,
 * 1)using for loop
 * 2)using built in methods for array
 * O(n) for time complexsity
 *
 */

//using for loop
const reverseString = str => {
  //since we can't loop through str,we have to convert this to array
  //this can be done by using split method or using spread operator
  //we have to create a [] to reversed string
  //loop through all elements
  //and then push this to arr

  const reversedString = [];

  //hell
  str.split("").forEach(ele => {
    reversedString.unshift(ele);
  });

  //we have to use join method to convert arr to string
  return reversedString.join("");
};

console.log(reverseString("hell"));
//time complexcity is O(n) and the space complexcity is also O(n)

//the second approach is more readable and space complexcity is O(1)
//but the time comp. is O(n) which is not bad either when compared to others
//if our function gets null or number or obj instead of string in that case our code breaks
//in order to avoid that we can do little test
const reverseString2 = str =>
  typeof str === "string" && str.length > 0
    ? [...str].reverse().join("")
    : "please provide only string as an argument and it must be greater then 0";

console.log(reverseString2("car"));
