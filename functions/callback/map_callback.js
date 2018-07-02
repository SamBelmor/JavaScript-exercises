/*Write a function which accepts two parameters: an array and a callback. The map function 
should return a new array with the result of each value being passed to the callback function. */

let map = (array, callback) => {
  let map = array.map(x => callback(x));
  console.log(map);
}

map([1,2,3,4], function(val){
  return val * 2;
});