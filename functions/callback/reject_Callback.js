/*Write a function which accepts two parameters an array and a callback. The function should 
return a new array with all of the values that do not return true to the callback. */

let reject = (array, callback) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray; 
}


console.log(reject([1,2,3,4], function(val){
  return val > 2;
}));

console.log(reject([2,3,4,5], function(val){
  return val % 2 === 0;
}));