// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
//Solution 1
//pseudocode
//create a super array to house subarrays
//for each element in given array
//retrieve the last element in superarray
//if element doesnt exist or its length is equal to chunk size
//push new subarray into superarray with current element
//else push current element into subarrays

  // const superarr = [];
  //
  //
  // for(let element of array){
  //   const last = superarr[superarr.length -1];
  //
  //   if(!last || last.length === size){
  //     superarr.push([element]);
  //   }
  //   else{
  //     last.push(element);
  //   }
  //
  // }
  //
  // return superarr;

//Solution 2
// create empty superarray
// create index at 0
// while index  less than array.length
// -> push slice of length size from array into superarray
// -> add size to index
  const superarray = [];
  let index = 0;

  // chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

  while(index < array.length){
    superarray.push(array.slice(index,index + size));
    index += size;
  }

  return superarray;




}

module.exports = chunk;
