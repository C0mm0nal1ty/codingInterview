// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  //g is so it doesn't stop at the first match
  //i - case insensitive. will turn char to lower
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}

module.exports = vowels;


//pseudocode
/*
1. use the character map. map out each letter to the object
2. run a for loop checking for each time a vowel is found.
3. add the total count and return the sum.
*/
