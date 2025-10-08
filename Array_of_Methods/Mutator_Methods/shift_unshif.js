    // ************************************shift() Method ************************************
// The shift() method removes the first element from an array and returns that removed element.

// ⚠️ Important: shift() MODIFIES the original array (mutates it) and shifts all other elements to lower indices!

// Syntax: array.shift()
// Parameters: None
// Returns:
// The removed element from the start of the array
// 1. Removing First Element
let fruits = ['apple', 'banana', 'orange'];
let removed = fruits.shift();

console.log(fruits);    // ['banana', 'orange']
console.log(removed);   // 'apple'

// 3. Multiple Shifts
let numbers = [10, 20, 30, 40];
let first = numbers.shift();
let second = numbers.shift();

console.log(numbers);   // [30, 40]
console.log(first);     // 10
console.log(second);    // 20

// Common Use Cases
// 1. Queue Implementation (FIFO)

// Queue - First In First Out
let queue = [];

// Enqueue (add to end)
queue.push('customer1');
queue.push('customer2');
queue.push('customer3');

// Dequeue (remove from front)
let served = queue.shift(); // 'customer1'
let nextServed = queue.shift(); // 'customer2'

console.log(queue); // ['customer3']

// *************************************unshift() Method ************************************

// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

// ⚠️ Important: unshift() MODIFIES the original array (mutates it) and shifts all existing elements to higher indices!

// Syntax: array.unshift(element1, element2, ..., elementN)

// Parameters:  element1, element2, ...: Elements to add to the beginning of the array

// Returns:  New length of the array after adding elements

//     Basic Examples
// 1. Adding Single Element
let fruits4 = ['banana', 'orange'];
let newLength = fruits4.unshift('apple');

console.log(fruits4);      // ['apple', 'banana', 'orange']
console.log(newLength);   // 3

// 2. Adding Multiple Elements
let numbers5 = [3, 4];
let newLength2 = numbers5.unshift(1, 2);

console.log(numbers5);     // [1, 2, 3, 4]
console.log(newLength2);   // 4

// 3. Adding Different Data Types

let arr = [2, 3];
arr.unshift(0, 1, 'hello', true);

console.log(arr); // [0, 1, 'hello', true, 2, 3]