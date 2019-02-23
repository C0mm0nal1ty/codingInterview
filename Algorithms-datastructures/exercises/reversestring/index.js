// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

  //Solution 1
  // const arr = str.split('');
  // arr.reverse();
  // return arr.join('');

  //Solution 2
  // let reversed = '';
  //
  // for(let character of str){
  //   reversed = character + reversed;
  // }
  //
  // return reversed;

  //Solution 3
  // debugger;
  return str.split('').reduce(
    (rev, cha) => cha + rev,'');

}

//used for debugger
// reverse('fad');

module.exports = reverse;
