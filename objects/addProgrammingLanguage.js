let programmingLanguages = {
  java: {
      yearCreated: 1995,
      creator: "James Gosling"
  },
  javaScript: {
      yearCreated: 1995,
      creator: "Brendan Eich"
  }
}

let addProgrammingLanguage = (nameOfLanguage, yearLanguageCreated, creatorOfLanguage) => {
  programmingLanguages[nameOfLanguage] = {
    yearCreated: yearLanguageCreated,
    creator: creatorOfLanguage
  }
}


addProgrammingLanguage("ruby", 1995, "Yukihiro Matsumoto");
console.log(programmingLanguages);
