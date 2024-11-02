// 8. Filter Strings by Length and Vowels
// Given an array of strings,
//filter out those that are longer than 5 characters and start with a vowel.
// Example: Input: ["apple", "banana", "orange", "kiwi", "apricot"] → Output: ["orange", "apricot"]
let array = ["apple", "banana", "orange", "kiwi", "apricot"];

let output = array.filter(filterStrLen);

function filterStrLen(str) {
  if (
    (str.length > 5 && str.indexOf("a") === 0) ||
    str.indexOf("i") === 0 ||
    str.indexOf("o") === 0 ||
    str.indexOf("u") === 0 ||
    str.indexOf("e") === 0
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(output);

//Alternative Method:
let arr = ["apple", "banana", "orange", "kiwi", "apricot"];

let result = arr.filter((str) => {
  if (
    (str.length > 5 && str.indexOf("a") === 0) ||
    str.indexOf("i") === 0 ||
    str.indexOf("o") === 0 ||
    str.indexOf("u") === 0 ||
    str.indexOf("e") === 0
  ) {
    return arr;
  } else {
    return false;
  }
});

console.log(result);
