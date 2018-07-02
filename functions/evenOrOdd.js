let evenOrOdd = number => {
  if (number % 2 === 0) {
    return `Number ${number} is even`;
  }
  return `Number ${number} is odd`
}

console.log(evenOrOdd(5));