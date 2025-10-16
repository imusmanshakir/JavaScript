// splice() is a built-in JavaScript array method that allows you to add, remove, or replace elements in an array at a specified position.
// Parameters
// splice() takes the following parameters:
// array.splice(start, deleteCount, item1, item2, ..., itemN)
// start (required): Index at which to start changing the array

// deleteCount (optional): Number of elements to remove (if 0, no elements removed)

// item1, item2, ..., itemN (optional): Elements to add to the array

// Return Value
// splice() returns an array containing the deleted elements:

// If elements were removed, returns array of removed elements

// If no elements were removed, returns empty array

// Original array
let fruits = ['apple', 'banana', 'cherry', 'date'];

// Remove 2 elements starting from index 1
let removed = fruits.splice(1, 2);
console.log(fruits); // ['apple', 'date']
console.log(removed); // ['banana', 'cherry']

// Add elements without removing any
fruits = ['apple', 'banana', 'cherry'];
removed = fruits.splice(1, 0, 'blueberry', 'cantaloupe');
console.log(fruits); // ['apple', 'blueberry', 'cantaloupe', 'banana', 'cherry']
console.log(removed); // [] (empty array)

// Replace elements
fruits = ['apple', 'banana', 'cherry'];
removed = fruits.splice(1, 1, 'orange');
console.log(fruits); // ['apple', 'orange', 'cherry']
console.log(removed); // ['banana']

// Remove from the end (negative index)
fruits = ['apple', 'banana', 'cherry', 'date'];
removed = fruits.splice(-2, 1);
console.log(fruits); // ['apple', 'banana', 'date']
console.log(removed); // ['cherry']

// Key Points
// Mutates the original array

// Returns removed elements as a new array

// Can handle addition, removal, and replacement in one operation

// Negative start index counts from the end of the array

// If deleteCount is omitted, removes all elements from start to end