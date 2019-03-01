// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const charMap = {};
  const vowels = /[aeiou]/;
  let sum = 0;
//  1. use the character map. map out each letter to the object

  for(let char of str){
    if(charMap[char]){
      charMap[char]++;
    }
    else{
      charMap[char] = 1;
    }
  }

//2. run a loop checking for each time a vowel is found.
  for(let char in charMap){
    if(char.toLowerCase().match(vowels)){
      sum += charMap[char];
    }
  }

  return sum;
}

module.exports = vowels;


//pseudocode
/*
1. use the character map. map out each letter to the object
2. run a for loop checking for each time a vowel is found.
3. add the total count and return the sum.


*/
