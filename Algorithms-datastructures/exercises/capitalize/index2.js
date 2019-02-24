// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
//split the array
//capitalize the first character
//combine the array back into a string

  let capitalstr = str.toLowerCase().split(' ');

  for(let i = 0; i < capitalstr.length; i++){
    capitalstr[i] = capitalstr[i].charAt(0).toUpperCase() + capitalstr[i].substring(1);
  }

return capitalstr.join(' ');
}

module.exports = capitalize;


//Solution 2
/*
const words = [];

for (let word of str.split(' ')) {
  words.push(word[0].toUpperCase() + word.slice(1))
}

return words.join(' ');

*/

//Solution3
/*
create an empty string called 'result'
for each char in string.
if char left has a space, capitalize it
else add it to result

let result = str[0].toUpperCase();

for(let i = 1; i < str.length; i++){
  if(str.charAt(i - 1) == ' '){
      result = result + str[i].toUpperCase();
  }
  else{
    result = result + str[i];
  }
}

return result;
*/
