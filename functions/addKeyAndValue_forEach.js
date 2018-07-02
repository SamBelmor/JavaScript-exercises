/*Write a function which accepts three parameters, an array (of objects), a key and 
a value. This function should return the array of objects after each key and value have been added to each
object in the array.*/

let addKeyAndValue = (array,key,value) => {
  array.forEach(element => {
    element[key] = value;
    console.log(element);
  });
}


addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true); 