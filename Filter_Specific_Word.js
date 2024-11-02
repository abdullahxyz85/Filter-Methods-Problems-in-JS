//4. Filter Words Containing a Specific Letter
//Given an array of words, use the filter method to keep
//only words that contain a specific letter (like "a").
//Example: Input: ["apple", "banana", "cherry", "kiwi"]s (filter by letter "a")
let array = [
  "apple",
  "banana",
  "cherry",
  "kiwi",
  "abdullah",
  "ahmad",
  "abdul_Quddos",
];

let output = array.filter(specificLetter);
function specificLetter(i) {
  if (i.includes("a")) {
    return true;
  } else {
    return undefined;
  }
}
console.log(output);

//Alternative Method:

let arr = ["apple", "banana", "cherry", "kiwi"];

let result = arr.filter((word) => {
  return word.includes("a");
});
console.log(result);
