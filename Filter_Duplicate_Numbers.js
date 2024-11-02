//Filter the duplicates number from the array that I give the input.
let array = [1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 9, 9, 10];
//filter returns the true or false value.
let output = array.filter(getDuplicateNum());

function getDuplicateNum() {
  let dNum = (value, index) => array.indexOf(value) !== index;
  return dNum;
}
console.log(output);
//Alternative Method:
let arr = [1, 2, 2, 3, 4, 4, 5];

let result = arr.filter((value, index) => arr.indexOf(value) !== index);
console.log(result);
