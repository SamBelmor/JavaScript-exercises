//Write a function which accepts an array (of objects) and console.logs a new 
//string with the first character and the last character of each value.

let printFirstAndLast = (array) => {
	array.forEach(value => {
  	let firstLetter = value[0];
    let lastLetter = value[value.length-1];
    console.log(firstLetter + lastLetter);
  });
}

printFirstAndLast(['awesome','example','of','forEach']); 
