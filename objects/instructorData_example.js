let instructorData = {
  name: "Elie",
  additionalData: {
      instructor: true,
      favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
      moreDetails: {
          favoriteBasketballTeam: "New York Knicks",
          numberOfSiblings: 3,
          isYoungest: true,
          hometown: {
              city: "West Orange",
              state: "NJ",
          },
          citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

//Hacer una funcion que imprima el valor de citiesLivedIn
let displayCities = () => {
  let array = instructorData.additionalData.moreDetails.citiesLivedIn;
  for (let i in array) {
    console.log(array[i]);
  }
}
displayCities();


//hacer una funcion que imprima los valores de hometown
let displayHometownData = () => {
	let hometown = instructorData.additionalData.moreDetails.hometown;
  for (let i in hometown) {
  	console.log(hometown[i]);
  }
}
displayHometownData(); 


//Hacer una funcion que acepte dos parametros, una clave y un valor y los agregue a moreDetails
let addDetail = (key, value) => {
	let moreDetails = instructorData.additionalData.moreDetails;
  moreDetails[key] = value;
  console.log(moreDetails);
}
addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]);


//hacer una funcion que borre el valor de un objeto y regrese el nuevo objeto
let removeDetail = (value) => {
	let moreDetails = instructorData.additionalData.moreDetails;
  delete moreDetails[value];
  console.log(moreDetails);
}
removeDetail('hometown');
