//Write a function that accepts a string and returns an array of each character that is not a vowel 
//(y should not count as a vowel for this function).

const removeVowels = (word) => {
  let result = [];
  for (letter in word) {
    if (word[letter] !== 'a' && word[letter] !== 'e' && word[letter] !== 'i' && word[letter] !== 'o' && word[letter] !== 'u') {
      result.push(word[letter]);
    }
  }
  return result;
}

console.log(removeVowels('amazing'));