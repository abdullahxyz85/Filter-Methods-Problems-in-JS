// 1. Filter Even Numbers
// Given an array of integers, use the filter method
// to create a new array containing only even numbers.
// Example: Input: [1, 2, 3, 4, 5, 6]
let arr = [1, 2, 3, 4, 5, 6];

let output = arr.filter(isEven);

function isEven(val) {
  return val % 2 === 0;
}
console.log(output);

//Alternative Method:

let arr1 = [1, 2, 3, 4, 5, 6];

//  Here x is used as an index and it checks the index at which value is placed.
let arr2 = arr1.filter((x) => x % 2 === 0);
console.log(arr2);
