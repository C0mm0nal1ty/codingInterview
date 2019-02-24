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
  //  map all the characters given in each string to an object, and avoid spaces, or special characters using regular expressions
  //check each letter is an alphabet with a regex
  //change string to lowercase
  function buildCharMap(str){
    const charMap = {};

    //replace any nonword character
    for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
      charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
  }

  let charmapA = buildCharMap(stringA);
  let charmapB = buildCharMap(stringB);

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
/*
function anagrams(stringA, stringB){
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if(Object.keys(aCharMap).length !== bCharMap[char]){
    return false;
  }

  for(let char in aCharMap) {
    if(aCharMap[char] !== bCharMap[char]){
      return false;
    }
  }
}

function buildCharMap(str){
  const charMap = {};

  //replace any nonword character
  for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

*/

/*
//Solution 3
//use an array to solve this one
return cleanString(stringA) === cleanString(stringB);

}

function cleanString(str){
  return str.replace(/[^\w]/g,'').toLowerCase()
  .split('').sort().join('');
}

*/



//EOL
