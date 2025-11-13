// What it does:
// Iterates over each element in an array.

// Applies a callback function to each element.

// Includes elements in the new array only if the callback returns true (or a truthy value).

// Does not modify the original array (non-mutating).

// What it returns:
// A new array containing elements that passed the test.

// Returns an empty array if no elements pass the test.

//Basic Example
const numbers = [1, 2, 3, 4, 5];

const filtered = numbers.filter((num) => num > 2);
console.log("original-->", numbers);
console.log("modified array-->", filtered);

const words = ["apple", "cat", "banana", "hi"];

const longWord = words.filter((word) => word.length > 3);
console.log(longWord);

const users = [
  { name: "Usman", active: true },
  { name: "Ali", active: false },
  { name: "Haseeb", active: true },
];

const activeUser = users.filter((user) => user.active);
console.log(activeUser);

// Key Points:
// Always returns a new array (never modifies the original).

// The callback must return a boolean (or a value coerced to boolean).

// Skips empty slots in sparse arrays.
