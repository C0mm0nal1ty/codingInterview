// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};

  if(str.length <= 1) {
    return str.length == 1 ? str : 'No value';
  }
  else {
      for(let char of str){
        chars[char] = chars[char] + 1 || 1;
        }

        const list_values = Object.values(chars);
      }

      const maxchar = Math.max(... list_values);

      return chars[maxchar];
}

module.exports = maxChar;
