//this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.

function lastElementArray(array) {
  if (array.length > 0) {
    return array.pop();
  }
}

console.log(lastElementArray([1,2,3,4,5,6,7,10]));