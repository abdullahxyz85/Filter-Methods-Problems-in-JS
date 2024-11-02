// 2. Filter Names by Length
// Given an array of names, create a new array
// with names that have more than 4 characters.
// Example: Input: ["Anna", "Michael", "Tom", "Sophie"]
let names = ["Anna", "Michael", "Tom", "Sophie"];

let output = names.filter(charArr);

function charArr(char) {
  return char.length > 4;
}

console.log(output);

//Alternative Methods:
let array = ["Anna", "Michael", "Tom", "Sophie"];

let result = array.filter((char) => char.length > 4); //filter returns the new Array

console.log(result);
