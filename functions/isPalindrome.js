let isPalindrome = (word) => {
	let reverseWord = word.split("").reverse().join(""); 
	if (word.toLowerCase().replace(/ /g,'') === reverseWord.toLowerCase().replace(/ /g,'')) {  
  	return true;
  }
  return false
}

console.log(isPalindrome('Somos o no somos'));
console.log(isPalindrome('anita lava la tina'));
console.log(isPalindrome('ligar es ser agil'));
console.log(isPalindrome('a man a plan a canal Panama')); 
