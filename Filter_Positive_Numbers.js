// 3. Filter Out Negative Numbers
// From an array of numbers, create a new array
// that includes only positive numbers.
// Example: Input: [-3, 4, -1, 5, -6, 7]

let arr = [-3, 4, -1, 5, -6, 7];

let output = arr.filter(positiveNum);

function positiveNum(val) {
  //Val parameter is used to check the index.
  return val > 0;
}
console.log(output);

//Alternnative Method:

let array = [-3, 4, -1, 5, -6, 7];

let result = array.filter((val) => val > 0);
console.log(result);
