/*this function should take in at most four parameters (an array, command, location, and value).
1. If the command is "remove" and the location is "end", the function should remove the last value in the 
  array and return the value removed. (In this case, the function only needs three arguments.)
2. If the command is "remove" and the location is "beginning", the function should remove the first value 
  in the array and return the value removed. (In this case, the function only needs three arguments.)
3. If the command is "add" and the location is "beginning", the function should add the value (fourth 
  parameter) to the beginning of the array and return the array.
4. If the command is "add" and the location is "end", the function should add the value (fourth parameter)
  to the end of the array and return the array.
*/

let arrayManipulation = (array, command, location, value) => {
	if (command === "remove" && location === "end") {
  	return array.pop();
  }
  else if (command === "remove" && location === "beginning") {
  	return array.shift();
  }
  else if (command == "add" && location === "beginning") {
  	array.unshift(value);
    return array;
  }
  else if (command === "add" && location === "end") {
  	array.push(value);
    return array;
  }
}


console.log(arrayManipulation([1,2,3], "remove", "end")); 
console.log(arrayManipulation([1,2,3], "remove", "beginning")); 
console.log(arrayManipulation([1,2,3], "add", "beginning", 20)); 
console.log(arrayManipulation([1,2,3], "add", "end", 30)); 