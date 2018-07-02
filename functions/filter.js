/*Write a function which accepts an array of letters and returns the number of 
occurrences of a specific letter. This function should be case insensitive*/

let filterLetters = (array,letter) => {
  let counterLetters = 0;
  array.filter(value => {
    if (value.toLowerCase() === letter.toLowerCase()) {
      counterLetters += 1;
    }    
  });
  console.log(counterLetters);
}


filterLetters(["a","a","b","c","A"], "a"); 
filterLetters(["a","a","b","c","A"], "z");
filterLetters(["a","a","b","c","A"], "B");

//_________________________________________________________________________________________________________


/*Write a function which accepts two parameters, an array of objects, and the name of a 
key and returns an array with only those objects which have truthy values for that key:*/

let filterKey = (array, nameKey) => {
  array.filter(value => {
    if (value[nameKey]) {
      console.log(value);
    }
  });
}

filterKey([{name: "Elie", isInstructor:true, isHilarious: false},{name: "Tim", isInstructor:true, isHilarious: true},{name: "Matt", isInstructor:true}], "isHilarious");