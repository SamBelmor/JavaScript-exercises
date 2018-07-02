let createCalculator = () => {
  return {
    add: function(a,b) {
      return a + b;
    },
    susbtract: function(a,b) {
      return a - b;
    },
    multiply: function(a,b) {
      return a * b;
    },
    divine: function(a,b) {
      return a / b
    }
  }
}

let calc = createCalculator();
console.log(calc.add(20,20)); 
console.log(calc.susbtract(2,2));
console.log(calc.multiply(2,2));
console.log(calc.divine(12,2)); 
