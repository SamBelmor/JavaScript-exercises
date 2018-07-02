let createStudent = (firstName, lastName) => {
  return {
    firstName: firstName,
    lastName: lastName
  }
}

let sam = createStudent("Sam", "Belmor");
let bat = createStudent("Yass", "Batas");
let logan = createStudent("Ayrton", "Bell");

let students = [sam, bat, logan];

let findStudentByFirstName = (name) => {
  let lowerCasedName = name.toLowerCase();
  for (let i in students) {
    if (students[i].firstName.toLowerCase() === lowerCasedName) {
      return true;
    }
  }
  return false;
}


findStudentByFirstName("sam");