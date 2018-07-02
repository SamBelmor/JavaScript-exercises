let nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
}


//Using a for loop, console.log all of the numbers in the primeNumbers array.
let primeNumbers = nestedData.innerData.numberData.primeNumbers;
for (let i = 0; i < primeNumbers.length; i++) {
    console.log(primeNumbers[i]);
}


//Using a for loop, console.log all of the even Fibonnaci numbers.
let fibonnaci =  nestedData.innerData.numberData.fibonnaci;
let even = [];
for (let i = 0; i < fibonnaci.length; i++) {	
	if (fibonnaci[i] % 2 === 0) {
  	even.push(fibonnaci[i]);
  }
}
console.log(even);


//Console.log the value "second" inside the order array.
console.log(nestedData.innerData.order[1]);


//Invoke the addSnack function and add the snack "chocolate".
console.log(nestedData.innerData.addSnack("chocolate"));



