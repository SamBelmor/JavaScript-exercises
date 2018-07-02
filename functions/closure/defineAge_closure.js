let defineAge = () => {
  let age = 25;
  return function growUp() {
    return ++age;
  }
}

let ageOnce = defineAge();
console.log(ageOnce()); 
console.log(ageOnce()); 
console.log(ageOnce()); 
console.log(ageOnce()); 
console.log(ageOnce());