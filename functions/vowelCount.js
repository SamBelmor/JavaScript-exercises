//Write a function that accepts a string and returns an object with each key being the vowel and the
//value being the number of times the vowel occurs in the string (the order of keys in the object does 
//not matter).

const vowelCount = (word) => {
  let result = {};
  let vowels = word.match(/[aeiou]/gi);
  
  for (i in vowels) {
    let vowel = vowels[i];
    result[vowel] = (isNaN(result[vowel]) ? 1 : result[vowel] + 1);
  
  }
  return result;
}
console.log(vowelCount('awesome'));