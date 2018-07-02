let isPrime = number => {
  for (let f = 2; f < number; f++) {
    if (number % f === 0) {
      return `${number} isn't a prime number`;
    }
    else{
      return `${number} is a primer number!`;
    } 
  }
  if (number === 1) {
    return `${number} isn't a prime number`;
  }
}

console.log(isPrime(17));
