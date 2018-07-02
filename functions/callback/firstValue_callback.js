/*Write a function it should take in an array and a callback and return the first value found 
in the array that matches the condition.*/

let find = (array, callback) => {
  for (let h = 0; h < array.length; h++) {
    if (callback(array[h])) {
      return array[h];
    }
  }
}

console.log(find([8,11,4,27],(val) => {return val >= 10}));
console.log(find([8,11,4,4,27,3],(val) => {return val <= 5}));

