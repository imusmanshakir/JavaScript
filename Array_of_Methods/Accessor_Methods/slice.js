// What is slice()?
// slice() is a built-in JavaScript array method that returns a shallow copy of a portion of an array into a new array.

// Is it an Accessor Method?
// Yes, slice() is an accessor method - it does NOT modify the original array, it creates and returns a new array.

// Parameters
// slice() takes two optional parameters:

// array.slice(start, end)

// start (optional): Zero-based index to start extraction (default: 0)

// Negative index counts from the end

// end (optional): Zero-based index to end extraction (default: array.length) - exclusive

// Return Value
// slice() returns a new array containing the extracted elements.

// Examples

let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Extract from index 1 to 3 (end is exclusive)
let result = fruits.slice(1, 3);
console.log(result);    // ['banana', 'cherry']
console.log(fruits);    // ['apple', 'banana', 'cherry', 'date', 'elderberry'] (unchanged)

// Extract from index 2 to end
let fromIndex2 = fruits.slice(2);
console.log(fromIndex2); // ['cherry', 'date', 'elderberry']

// Copy Entire Array

let original = [1, 2, 3, 4, 5];
let copy = original.slice();

console.log(copy);    // [1, 2, 3, 4, 5]
console.log(original === copy); // false (different references)