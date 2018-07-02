let onlyCapitalLetters = (letters) => {
	let upper = "";
	for (let i in letters) {
  	if (letters[i] === letters[i].toUpperCase()) {
    	upper += letters[i];
    }
  }
  return upper;
}

console.log(onlyCapitalLetters("Sam BelmOr"));

