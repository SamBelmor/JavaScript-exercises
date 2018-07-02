let printEvens = () => {
	let nestedArr = [[1,2,3],[4,5,6],[7,8],[9,10,11,12]];
  
  for (let x = 0; x < nestedArr.length; x++) {
  	for (let y = 0; y < nestedArr[x].length; y++) {
    	if (nestedArr[x][y] % 2 === 0) {
      	return nestedArr[x][y];
      }
    }
  }
}

console.log(printEvens());