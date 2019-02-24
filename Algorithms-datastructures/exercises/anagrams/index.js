// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  //Solution 1
  //  save the given strings as lowercase versions
  let charmapA = {};
  let charmapB = {};
  const str1 = stringA.toLowerCase();
  const str2 = stringB.toLowerCase();


  //  map all the characters given in each string to an object, and avoid spaces, or special characters using regular expressions
  //check each letter is an alphabet with a regex
  function charalpha(str) {
    let letters = /^[a-z]+$/;

    if (str.match(letters)) {
      return true;
    }
  }

  

  for (let char of str1) {
    if (charalpha(char)) {
      if (charmapA[char]) {
        charmapA[char]++;
      } else {
        charmapA[char] = 1;
      }
    }
  }

  for (let char of str2) {
    if (charalpha(char)) {
      if (charmapB[char]) {
        charmapB[char]++;
      } else {
        charmapB[char] = 1;
      }
    }
  }

  //  check to see that the total sum of values in one string is equal to the sum in the other string.

  function sumobj(obj) {
    let sum = 0;

    for (let elem in obj) {
      if (obj.hasOwnProperty(elem)) {
        sum += parseInt(obj[elem]);
      }
    }

    return sum;
  }

  if (sumobj(charmapA) != sumobj(charmapB)) {
    return false;
  }

  //  use a loop to check each single letter of the first string with each letter of the second string (comparing key pairs.)
  // count will tally matching char amounts
  //if there is char value of 2 or more, add that to count

  let count = 0;
  for (let chara in charmapA) {
    for (let charb in charmapB) {
      if (charmapA[chara] == charmapB[charb] && chara == charb) {
        count += charmapA[chara];
      }
    }
  }
  if(stringA == "hello"){
    console.log("current count" + count);
  }

  //check that the count is equal to the sum of string A
  // stringB is equal to string B so doesn't need to be checked
  if (count == sumobj(charmapA)) {
    return true;
  } else {
    return false
  }
}

module.exports = anagrams;

//Solution 2











//EOL
