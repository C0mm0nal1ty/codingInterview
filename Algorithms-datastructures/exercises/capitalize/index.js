// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
//slice the array
//capitalize the first character
//combine the array back into a string

  let capitalstr = str.toLowerCase().split(' ');

  for(let i = 0; i < capitalstr.length; i++){
    capitalstr[i] = capitalstr[i].charAt(0).toUpperCase() + capitalstr[i].substring(1);
  }

return   capitalstr.join(' ');
}

module.exports = capitalize;
