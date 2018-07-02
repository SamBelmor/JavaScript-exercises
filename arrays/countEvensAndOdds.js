let countEvensAndOdds = (array) => {
	let evensAndOdds = {};
	let counterEvens = 0;
	let counterOdds = 0;
  
	for (let i in array) {
  	if (array[i] % 2 === 0) {
    	counterEvens += 1;
      evensAndOdds.evenCount = counterEvens;      
    }  
    
    else {
      counterOdds += 1;
      evensAndOdds.oddCount = counterOdds;
    }
  }
  return evensAndOdds;
}

console.log(countEvensAndOdds([1,2,3,4,5,6,7]));
