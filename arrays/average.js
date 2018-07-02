let average = (array) => {
  let total = 0;
  for (let i in array) {
    total += array[i];
  }
  return total / array.length;
}

console.log(average([1,2,3,4,5])); 
console.log(average([1,2,3,4,5,6]));
console.log(average([10,20])); 