/* this function takes in one parameter (a number from 1-7) and returns the day of the week 
(1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, 
the function should return undefined;
*/

let weekDays = (number) => {
	let weekdays = {
  	1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday"
  };
  
  return weekdays[number]
}

console.log(weekDays(1));