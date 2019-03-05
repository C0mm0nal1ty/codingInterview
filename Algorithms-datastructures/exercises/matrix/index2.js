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
  const results = [];
  let count = 1;
  let startcol = 0;
  let endcol = n-1;
  let startrow = 0;
  let endrow = n-1;

  for(let i = 0; i < n;i++){
    results.push([]);
  }


  while(startcol<=endcol && startrow<= endrow){
    //top row
    for(let i = startcol; i <= endcol;i++){
      results[startrow][i] = count;
      count++;
    }

    startrow++;

    //right column
    for(let i = startrow; i <= endrow;i++){
      results[i][endcol] = count;
      count++;
    }

    endcol--;

    //bottom row
    for(let i = endcol; i >= startcol;i--){
      results[endrow][i] = count;
      count++;
    }

    //left column
    endrow--;
    for(let i = endrow; i >= startrow;i--){
      results[i][startcol] = count;
      count++;
    }

    startcol++;
  }

  return results;
}

module.exports = matrix;


//EOF
/*
Pseudocode
create an empty superarray called results
create counter variable,set to 1
create startcol = 0, end col = n-1, startrow = 0,endrow = n-1
loop(startcol <= endcol and startrow <= endrow)
->loop from startcol to endcol
-->at results[startcol][i] = count
--> count++
->startrow++
->loop from startrow to endrow
-->at results[i][endcol]= count
-->count++
->endcol--;
->repeat

*/
