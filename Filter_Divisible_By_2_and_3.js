//9.Filter Numbers That Are Divisible by Both 2 and 3
//Create a new array of numbers from an array of integers,
//keeping only numbers divisible by both 2 and 3.
//Example: Input: [1, 6, 12, 15, 20, 30]
let arr = [1, 6, 12, 15, 20, 30];

//Filter method returns the value of true or false filter ku bs return sa matlab ha
let output = arr.filter(divisibleNum);
function divisibleNum(index) {
  if (index % 2 === 0 && index % 3 === 0) {
    return arr;
  } else {
    return undefined;
  }
}
console.log(output);

//Alternative Method:

let array = [1, 6, 12, 15, 20, 30];

let result = array.filter((index) => {
  return index % 2 === 0 && index % 3 === 0;
});
console.log(result);
