/* This function takes in two parameters (two strings). The first parameter should be a word and the
second should be a letter. The function returns the number of times that letter appears in the word. 
The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the 
letter is not found in the word, the function should return 0.
*/

let singleLetterCount = (word, letter) => {
  let counter = 0;
  
  for (let a in word) {
  	if (word[a].toLowerCase() === letter.toLowerCase()) {
    	counter += 1;
    } 
	}
  console.log(counter);
}

singleLetterCount("Mi mama me mimaAa", "A");