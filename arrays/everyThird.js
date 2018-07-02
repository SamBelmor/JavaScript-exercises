let extractEveryThird = (array) => {
  let numThird = [];  
  for (let i = 0; i < array.length; i++) {
    if ((i+1) % 3 === 0) {
        numThird.push(array[i]);
    } 
  }
  return numThird;
}

console.log(extractEveryThird(["first value", "second value", "third value"]));