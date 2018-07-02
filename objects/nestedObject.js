var nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
}



/* Write a function to add a speaker to the array of speakers. The speaker you add must be an 
object with a key of name and a value of whatever you'd like.
*/
let addSpeaker = (speaker) => {
    let newSpeaker =  nestedObject.speakers;
    newSpeaker.push({name: speaker});
    for (let i in newSpeaker) {
    	console.log(newSpeaker[i]);
    }
}
addSpeaker("Dzoara");


/* Write a function that adds a language to the languages object. The language object you add 
should have a key with the name of the language and the value of another object with a key of "hello" and 
a value of however you spell "hello" in the language you add.
*/
let addLanguage = (language, hello) => {
	let newLanguage =  nestedObject.data.languages;
  newLanguage[language] = {
  	hello: hello
  }
  console.log(newLanguage);
}
addLanguage("Italian", "Ciao");



/*Write a function addCountry that adds a European country to the countries object (inside of the 
continents object, inside of the countries object). The country you add should be an object with the key
as name of the country and the value as an object with the keys of "capital" and "population" and their 
respective values.
*/
let addCountry = (country, capital, population) => {
	let countries = nestedObject.data.continents.europe.countries;
  countries[country] = {
  	capital: capital,
    population: population
  }
  console.log(countries);
}
addCountry("México", "Ciudad de México", "32483972");