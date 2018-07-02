/*Write a function which accepts two parameters, an array of objects, and the name of a 
key and returns an array with just the values for that key:*/

let extractKey = (array,key) => {
  return array.map(element => {
    return element[key];
  });
}


console.log(extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name"));
