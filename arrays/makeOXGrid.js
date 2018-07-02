let makeXOGrid = (rows, columns) => {
  let finalArray = [];
  let startWithX = true;

  for (let i = 0; i < rows; i ++) {
    let newRow = [];
    for (let j = 0; j < columns; j++) {
      if (startWithX) {
        newRow.push("X");
      }
      else {
        newRow.push("O");
      }
      startWithX = !startWithX;
    }
    finalArray.push(newRow);
  }
  return finalArray;
}

console.log(makeXOGrid(4,3));




