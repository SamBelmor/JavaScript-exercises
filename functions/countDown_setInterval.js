/*Write a function that accepts a number as a parameter and every 1000 milliseconds
decrements the value and console.logs it. Once the value is 0 it should log "DONE!" and stop.*/

let countDown = (time) => {
  let timer = setInterval(() => {
    time--;
    if(time <= 0){
      clearInterval(timer);
      console.log('DONE!');
    }
    else {
      console.log(time);
    }

  },1000)
}

countDown(5);