// toString() is a built-in JavaScript array method that returns a string representing the array and its elements.

// Is it an Accessor Method?
// Yes, toString() is an accessor method - it does NOT modify the original array, it creates and returns a new string representation.

// Parameters
// toString() takes no parameters.

// Return Value
// toString() returns a string containing the array elements separated by commas.

// Examples

let fruits = ['apple', 'banana', 'cherry'];

console.log(fruits.toString());  // "apple,banana,cherry"
console.log(fruits);             // ['apple', 'banana', 'cherry'] (unchanged)

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString()); // "1,2,3,4,5"

let mixed = [1, 'hello', true, null, undefined, {name: 'John'}];
console.log(mixed.toString());   // "1,hello,true,,,[object Object]"
// Note: Objects are converted to strings using their toString() method

// Practical Examples

console.log(new Date().toString());
//               ----------------------------------------------------------

let cart = ['apple', 'banana', 'orange'];
console.log('Cart items: ' + cart.toString());
// "Cart items: apple,banana,orange"

let scores = [95, 87, 92, 78];
console.log('Scores: ' + scores);
// "Scores: 95,87,92,78" (implicit toString())



// Key Points
// Does NOT mutate the original array

// Returns a string with comma-separated elements

// No parameters accepted

// Flattens nested arrays in the string representation

// Empty elements become empty strings in result

// Equivalent to join() without parameters

// Automatically called during string concatenation