// 10. Filter Boolean Values:
// Given an array containing different
//data types (numbers, strings, booleans),
// filter out only the boolean values.
// Example: Input: [true, 1, "hello", false, 2, "world", true]

let arr = [true, 1, "hello", false, 2, "world", true];

let output = arr.filter(booleanVal);
//filter return the value of true or false.
function booleanVal(i) {
  if (i === true || i === false) {
    return arr;
  } else {
    return undefined;
  }
}
console.log(output);

//Alternative Method:
let array = [true, 1, "hello", false, 2, "world", true];

let result = array.filter((i) => {
  return i === true || i === false;
});

console.log(result);
