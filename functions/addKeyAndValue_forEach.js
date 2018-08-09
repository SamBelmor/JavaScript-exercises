/*Write a function which accepts three parameters, an array (of objects), a key and 
a value. This function should return the array of objects after each key and value have been added to each
object in the array.*/

let addKeyAndValue = (array,key,value) => {
  let newArray = [];
  array.forEach(element => {
    element[key] = value;
    newArray.push(element);    
  });
  // console.log(newArray);
  return newArray;
}

console.log(addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true));
