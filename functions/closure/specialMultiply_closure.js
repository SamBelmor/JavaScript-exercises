/*Write a function which accepts two parameters. If the function is passed both 
parameters, it should return the product of the two. If the function is only passed one parameter - it 
should return a function which can later be passed another parameter to return the product.*/

let specialMultiply = (a,b) => {
  if (a && b) {
    return a * b;
  }
  return function(c) {
    return a * c;
  }
}


console.log(specialMultiply(3,4)); 
console.log(specialMultiply(3)(4)); 
console.log(specialMultiply(3));
