let add = (a,b) => {
  return a + b;
}

let substract = (a,b) => {
  return a - b;
}

let math = (a,b, callback) => { 
  return callback(a,b);
}

console.log(math(1,4,substract));