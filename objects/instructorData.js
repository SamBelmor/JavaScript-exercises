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

instructorData.name;
instructorData.additionalData.instructor; 
instructorData.additionalData.favoriteHobbies[2]; 
instructorData.additionalData.moreDetails.favoriteBasketballTeam;
instructorData.additionalData.moreDetails.hometown.state; 
instructorData.additionalData.moreDetails.citiesLivedIn[1];