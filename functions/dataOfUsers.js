const users = [
  {
    username: 'yasser',
    email: 'yasser@gmail.com',
    yearsExperience: 22.1,
    favoriteLanguages: ['Pearl', 'Java', 'C++'],
    favoriteEditor: 'Vim',
    hobbies: ['Fishing', 'Sailing', 'Hiking'],
    hometown: {
      city: 'San Francisco',
      state: 'CA'
    }
  },
  {
    username: 'jane',
    email: 'jane@test.com',
    yearsExperience: 33.9,
    favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
    favoriteEditor: 'Emacs',
    hobbies: ['Swimming', 'Biking', 'Hiking'],
    hometown: {
      city: 'New York',
      state: 'NY'
    }
  },
  {
    username: 'sam',
    email: 'sam@test.com',
    yearsExperience: 34,
    favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
    favoriteEditor: 'Atom',
    hobbies: ['Biking', 'Read', 'Cooking'],
    hometown: {
      city: 'Fargo',
      state: 'SD'
    }
  },
  {
    username: 'anne',
    email: 'anne@gmail.com',
    yearsExperience: 4,
    favoriteLanguages: ['C#', 'C++', 'F#'],
    favoriteEditor: 'Visual Studio Code',
    hobbies: ['Tennis', 'Biking', 'Archery'],
    hometown: {
      city: 'Albany',
      state: 'NY'
    }
  },
  {
    username: 'david',
    email: 'david@test.com',
    yearsExperience: 12.5,
    favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
    favoriteEditor: 'VS Code',
    hobbies: ['Volunteering', 'Biking', 'Coding'],
    hometown: {
      city: 'Los Angeles',
      state: 'CA'
    }
  }
];


//Write a function which console.log's each email for the users.
const printEmails = () => {
  users.forEach(user => {
    console.log(user.email);
  });  
}
printEmails();



//Write a function which console.log's each hobby for each user.
const printHobbies = () => {
  users.forEach(user => {
    for (let i = 0; i < user.hobbies.length; i++) {
      console.log(user.hobbies[i]);
    }
  });
}
printHobbies();



//Write a function which returns the first user which has a hometown of the state that is passed in
const findHometownByState = (state) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].hometown.state === state) {
      return users[i];
      break;
    }
  }
}
console.log(findHometownByState('CA'));



//Write a function which returns an array of all of the unique values of languages
const allLanguages = () => {
  let languages = [];
  users.forEach(user => {
    user.favoriteLanguages.forEach(language => {
      if (languages.indexOf(language) === -1) {
        languages.push(language);
      }      
    });
  });
  return languages;
}
console.log(allLanguages());



//Write a function which returns a boolean if any of the users have the editor passed in
const hasFavoriteEditor = (editor) => {
  for (user in users) {
    if (users[user].favoriteEditor === editor) {
      return true;
    }
  }
  return false;
}
const result = hasFavoriteEditor('VS Code');
console.log(result);



//Write a function which takes in a string and returns an object in the users array that has that username
const findByUsername = (userName) => {
  for (user in users) {
    if (users[user].username === userName) {
      return users[user];
    }
  }
}
const resultName = findByUsername('sam');
console.log(resultName);