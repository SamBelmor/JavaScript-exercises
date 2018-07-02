function outer(a){
  return function inner(b){
    return a + b;
  }
}

console.log(outer(5)); 
console.log(outer(5)(2)); 
var laterAdd = outer(10)
console.log(laterAdd(15)); 