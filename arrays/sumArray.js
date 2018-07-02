// returns the sum of all numbers in the array
let sumTotal = () => {
	let counter = 0;
	let nestedArr = [[[1,2],[3,4]],[[5,6]]];
  for (let g = 0; g < nestedArr.length; g++) {
  	for (let h = 0; h <nestedArr[g].length; h++) {
    	for (let i = 0; i < nestedArr[g][h][i]; i++) {
      	counter += nestedArr[g][h][i];
      }
    }
  }
  return counter;
}

console.log(sumTotal()); 