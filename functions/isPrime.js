isPrime = num => {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return 'Is not a prime number';
    }
  }
  if (num !== 1) {
    return 'Is a prime number!!';
  }
}

console.log(isPrime(2));
