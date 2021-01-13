/**
 *challenge:= Confirm the Ending

 Check if a string (first argument, str) ends with the given target string (second argument, target).

 confirmEnding("Bastian", "n") should return true.

 confirmEnding("Congratulation", "on") should return true.

 confirmEnding("Connor", "n") should return false.
 * 
 */
const confirmEnding = (str = "", target = "") => str.endsWith(target);

console.log(confirmEnding("Bastian", "n"));
