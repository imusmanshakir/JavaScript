// What is concat()?
// concat() is a built-in JavaScript array method that merges two or more arrays and returns a new array.

// Is it a Accessor Method or non-mutating method?
//Yes, concat() is an accessor method.It does not modify the original arrays but instead returns a new array.

// concat() takes any number of arguments:

// array.concat(value1, value2, ..., valueN)

// Return Value
// concat() returns a new array containing the elements from the original array followed by the elements from the provided arrays/values.

// Examples
// Basic Concatenation

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let result = array1.concat(array2);

console.log(result);    // [1, 2, 3, 4, 5, 6]
console.log(array1);    // [1, 2, 3] (unchanged)
console.log(array2);    // [4, 5, 6] (unchanged)

// Mixing Arrays and Values

let numbers = [1, 2, 3];
let result1 = numbers.concat(4, 5, [6, 7], 8);

console.log(result1); // [1, 2, 3, 4, 5, 6, 7, 8]

// With Different Data Types
let mixed = [1, 'hello'];
let result2 = mixed.concat(true, {name: 'John'}, [2, 3]);

console.log(result2); // [1, 'hello', true, {name: 'John'}, 2, 3]