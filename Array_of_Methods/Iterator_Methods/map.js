// The map method in JavaScript is used to create a new array by applying a transformation function to every element in the original array.

// What it does:
// Iterates over each element in the array.

// Executes a callback function for each element.

// Returns a new array containing the results of applying the callback to each element.

// Does not modify the original array (immutable operation).

// What it returns:
// A new array with the same length as the original array.

// Each element in the new array is the result of the callback function.

// Syntax:

// const newArray = array.map(callback(currentValue, index, array));

// Basic Transformation

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]
console.log(numbers); // [1, 2, 3, 4] (original unchanged)

// Transforming Objects:

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];

const names = users.map(user => user.name);
console.log(names); // ["Alice", "Bob"]

// Complex Transformations:

const prices = [100, 200, 300];
const discounted = prices.map(price => ({
  original: price,
  discounted: price * 0.8,
  savings: price * 0.2
}));

console.log(discounted);
// [
//   {original: 100, discounted: 80, savings: 20},
//   {original: 200, discounted: 160, savings: 40},
//   {original: 300, discounted: 240, savings: 60}
// ]

//Comparison with forEach
// +------------------+-------------------+------------------+
// | Feature          | map               | forEach          |
// +------------------+-------------------+------------------+
// | Return Value     | New array         | undefined        |
// +------------------+-------------------+------------------+
// | Use Case         | Data transformation| Side effects    |
// +------------------+-------------------+------------------+
// | Chainable        | Yes (returns array)| No              |
// +------------------+-------------------+------------------+
// | Original Array   | Unchanged         | Can be modified  |
// +------------------+-------------------+------------------+
