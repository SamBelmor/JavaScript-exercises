/*Write a function which accepts two parameters, an array of objects, and the name of a 
key and returns an array with just the values for that key:*/

let extractKey = (array, nameKey) => {
  array.reduce((result, value) => {
    let key = value[nameKey];
    result.push(key);
    console.log(result);
  }, []);
}

extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name");