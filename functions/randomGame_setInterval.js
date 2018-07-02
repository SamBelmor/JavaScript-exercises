/*Write a function that selects a random number between 0 and 1 every 1000 milliseconds 
and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop 
the timer and return the number of tries it took before we found a number greater than .75.*/

let randomGame = () => {
  let counter = 0;
  let timer = setInterval(() => {
    let random = Math.random();         
    if (random > 0.75) {
      counter += 1;
      clearInterval(timer);      
      console.log(`The random number is --> ${random}. You tried ${counter} times`);
    }
    else {
      counter += 1;
    }
  },1000)
}

randomGame();
