//RECURSIVE SOLUTION
// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
//time complexity is O(2^N), due to 2 operations at each level of the tree.
//space complexity is O(N), due to depth of the tree


function fib(n) {
  if(n < 2){
    return n;
  }
  else{
    return fib(n -1) + fib(n-2);
  }

}

module.exports = fib;
