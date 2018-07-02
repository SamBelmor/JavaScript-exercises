let createCounter = () => {
  let counter = 0;
  return function newCounter() {
    return ++counter;
  }
}

let counte1 = createCounter();
console.log(counte1());
console.log(counte1());
console.log(counte1());


let counte2 = createCounter();
console.log(counte2());
console.log(counte2());
console.log(counte2());
