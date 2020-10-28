'use strict';

// Complete this algo
const binarySearch = (array, target) => {
  //base case: if array is zero, return false
  //if array length is one, see if the element is target, return true/fase
  //if neither split the array, array.length/2
  //split the array left if less than middle, right if greater than middle
  //run binarySearch again on split array

  if (array.length === 0) return false;
  if (array.length === 1) {
    if (array[0] === target) {
      return true;
    } else {
      return false;
    }
    // console.log(result);
  } else {
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    if (target <= left[left.length - 1]) {
      return binarySearch(left, target);
    } else if (target >= right[0]) {
      return binarySearch(right, target);
    } else return false;
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
