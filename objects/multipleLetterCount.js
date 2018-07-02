/* This function takes in one parameter (a string) and returns an object with the keys being the letters 
and the values being the count of the letter.
*/

let multipleLetterCount = (str) => {
	let obj = {};
  
  for (let i in str) {
  	let num = str[i];
    obj[num] = (isNaN(obj[num]) ? 1: obj[num] + 1);
  }
  console.log(obj);
  
}

multipleLetterCount("samantha");