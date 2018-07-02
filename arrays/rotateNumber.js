let rotateNumber = (array, number) => {
  let amount = number % array.length;
  for (let i = 0; i < amount; i++) {
    array.unshift(array.pop());
  }
  return array;
}

console.log(rotateNumber([1,2,3], 2)); 
