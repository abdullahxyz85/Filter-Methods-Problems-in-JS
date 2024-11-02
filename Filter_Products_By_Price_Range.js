//6.Filter Products by Price Range
//Given an array of product objects,
//each with a name and price property, filter the array to
//include only products that cost between 100 and 300.
// Example: Input: [{name: "Book", price: 150},
// {name: "Laptop", price: 500}, {name: "Pen", price: 30}]

let array = [
  { name: "Book", price: 150 },
  { name: "Laptop", price: 500 },
  { name: "Pen", price: 30 },
];

let output = array.filter(priceProp);

function priceProp(val) {
  if (val.price >= 100 && val.price <= 300) {
    return val.price;
  }
}
console.log("output: ", output);

// Alternative Method
let arr = [
  { name: "Book", price: 150 },
  { name: "Laptop", price: 500 },
  { name: "Pen", price: 30 },
];

let result = arr.filter((val) => {
  if (val["price"] >= 100 && val["price"] <= 300) {
    return val; //return koi true ya false return krta ha value condition sa.
  }
});

console.log("result:", result);
