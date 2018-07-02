let numberFact = (number, callback) => {
  return callback(number);
}

let evenOrOdd = (number) => {
  if (number % 2 === 0) {
    return `Number ${number} is even`;
  }
  return `Number ${number} is odd`;
}

console.log(numberFact(59,evenOrOdd)); 
