// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let masterarr = [];
  let subarr = [];
  let count = 0;

  while(count < n){
    subarr = range(count*n+1,n);

    console.log(subarr);
    masterarr.push(subarr);
    count++;
  }

  return masterarr;
}

module.exports = matrix;


//EOF
//return a 2 dimensional array in the function
//create 2 variables masterarr and sub arr
//set a new var count = n
//loop
//make subarr with a range 1 - count
//push sub array into master arry
// increment count by n
//make new sub arr with range count to count + n
