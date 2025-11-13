// The reduce() method in JavaScript executes a reducer function on each element of an array, resulting in a single output value. It's one of the most powerful and versatile array methods.

// What it does:
// Iterates through an array and accumulates values.

// Applies a reducer function to each element to combine them into a final result.

// Does not modify the original array.

// What it returns:
// A single value (can be any type: number, string, object, array, etc.).

// Syntax:
// const result = array.reduce(callback(accumulator, currentValue, index, array), initialValue);
// accumulator: Accumulates the callback's return values

// currentValue: Current element being processed

// index (optional): Index of current element

// array (optional): Original array

// initialValue (optional): Initial value for accumulator

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr,0);
console.log(sum); // 15

const numbers1 = [10, 5, 25, 8, 30];
const max = numbers1.reduce((acc, curr) => Math.max(acc, curr));
console.log(max); // 30


const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 3, banana: 2, orange: 1 }\



const numbers2 = [1, 2, 3];
const sum1 = numbers2.reduce((acc, curr) => acc + curr);
console.log(sum1);
// First iteration: acc = 1, curr = 2
// Second iteration: acc = 3, curr = 3
// Result: 6

const numbers3 = [1, 2, 3];
const sum2 = numbers3.reduce((acc, curr) => acc + curr, 10);
console.log(sum2);
// First iteration: acc = 10, curr = 1
// Second iteration: acc = 11, curr = 2
// Third iteration: acc = 13, curr = 3
// Result: 16