/*Write a function it should take in an array and a callback and return the index of
first value found in the array that matches the condition.*/

let findIndex = (array, callback) => {
  for (let h = 0; h < array.length; h++) {
    if (callback(array[h])) {
      return h;
    }
  }
}

console.log(findIndex([8,11,4,27],(val) => {return val >= 10})); 
console.log(findIndex([8,11,4,4,27,3],(val) => {return val <= 5})); 

