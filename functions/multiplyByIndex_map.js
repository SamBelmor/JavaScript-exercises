/*Write a function which accepts an array of numbers and returns a new array with 
each value multiplied by the index it is at in the array:*/

let multiplyByIndex = (array) => {
  return array.map((element,index) => {
    return element * index;
  });
}

console.log(multiplyByIndex([1,2,3]));
console.log(multiplyByIndex([5,10,15]));