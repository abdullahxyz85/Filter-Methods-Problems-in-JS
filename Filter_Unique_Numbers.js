// let arr = [1, 2, 2, 3, 4, 4, 5]; //Agr string ma hu ga tu console ma string ma laga ga or agr array ma hu ga tu console ma only array type index.
// let index = arr.indexOf(4);
// console.log(index);

//Give the first occurance
//7.Filter Unique Numbers (Using filter and indexOf)
//Given an array with duplicate numbers,
//filter it to create an array with only unique numbers.
//Example: Input: [1, 2, 2, 3, 4, 4, 5]
//Set Method write in bracket

let array = [1, 2, 2, 3, 4, 4, 5, 4, 5, 2, 5, 6, 2];

let result = array.filter(removeDuplicates());

function removeDuplicates() {
  let uniqueValue = (value, index) => array.indexOf(value) === index;
  return uniqueValue;
}

console.log(result);

//Alternative Method://We take two parameter in this.

let arr = [1, 2, 2, 3, 4, 4, 5];

let output = arr.filter((value, index) => {
  return arr.indexOf(value) === index;
});
console.log(output);
