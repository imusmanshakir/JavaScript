// What is fill()?
// fill() is a built-in JavaScript array method that fills all or part of an array with a static value.

// Is it a Mutator Method?
// Yes, fill() is a mutator method - it modifies the original array directly.

// Parameters
// fill() takes the following parameters:

// array.fill(value, start, end)

// value (required): Value to fill the array with

// start (optional): Start index (default: 0)

// end (optional): End index (default: array.length) - exclusive

// Return Value
// fill() returns the modified array (the same array reference, now filled).

// Fill entire array
let numbers = [1, 2, 3, 4, 5];
numbers.fill(0);
console.log(numbers); // [0, 0, 0, 0, 0]

// Fill with different values
let empty = new Array(3);
empty.fill('hello');
console.log(empty); // ['hello', 'hello', 'hello']

// ---------------------With Start and End Index---------------------

let numbers1 = [1, 2, 3, 4, 5];

// Fill from index 1 to 3 (end index is exclusive)
numbers1.fill(0, 1, 3);
console.log(numbers1); // [1, 0, 0, 4, 5]

// Fill from index 2 to end
numbers1.fill(9, 2);
console.log(numbers1); // [1, 0, 9, 9, 9]

// Fill from beginning to index 3
let numbers2 = [1, 2, 3, 4, 5];
numbers2.fill(7, 0, 3);
console.log(numbers2); // [7, 7, 7, 4, 5]