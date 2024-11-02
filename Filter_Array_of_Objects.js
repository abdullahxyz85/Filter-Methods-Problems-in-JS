// 5. Filter Array of Objects by Property Value
// You have an array of objects representing people
// with properties name and age.
// Filter this array to include only people older than 18.
// Example: Input: [{name: "John", age: 17}, {name: "Jane", age: 21},
// {name: "Tom", age: 15}]
let students = [
  { name: "John", age: 17 },
  { name: "Jane", age: 21 },
  { name: "Tom", age: 15 },
];

let result = students.filter(propertyVal);

function propertyVal(val) {
  return val.age > 18;
}
console.log(result);

// //Alternative Method:
let people = [
  { name: "John", age: 17 },
  { name: "Jane", age: 21 },
  { name: "Tom", age: 15 },
];

let output = people.filter((val) => val.age > 18);
console.log(output);
