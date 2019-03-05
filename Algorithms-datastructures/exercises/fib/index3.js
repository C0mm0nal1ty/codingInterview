//ITERATIVE SOLUTION
// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
//time complexity is O(N) + O(N) = O(N)
//space complexity is O(1)


function fib(n) {
  let last2 = 0;
  let last1 = 1;
  let current = 0;
  if(n <=1){
    return n;
  }
  // if(n == 2){
  //   return 1;
  // }
  for(let i = 2; i <= n;i++){
      current = last2 + last1;
      last2 = last1;
      last1 = current;
    }

  return current;
}

module.exports = fib;
