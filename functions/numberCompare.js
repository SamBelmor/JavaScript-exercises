let numberCompare = (a,b) => {
	if (a > b) {
  	return "First is greater";
  }
  else if (a < b) {
  	return "Second is greater";
  }
  return "Numbers are equal";
}

console.log(numberCompare(38,38));
console.log(numberCompare(19,38));
console.log(numberCompare(382,38));
