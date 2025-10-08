//  *****************************Push Method******************************

// The push() method adds one or more elements to the end of an array and returns the new length of the array.

// ⚠️ Important: push() MODIFIES the original array (mutates it)!

// array.push(element1, element2, ..., elementN)

// Parameters:
// element1, element2, ...: Elements to add to the end of the array

// Returns:
// New length of the array after adding elements

// 1. Adding Single Element

let fruits = ['apple', 'banana'];
let newLength = fruits.push('orange');

console.log(fruits);      // ['apple', 'banana', 'orange']
console.log(newLength);   // 3

// 2. Adding Multiple Elements

let numbers = [1, 2];
let newLength1 = numbers.push(3, 4, 5);

console.log(numbers);     // [1, 2, 3, 4, 5]
console.log(newLength1);   // 5

// 3. Adding Different Data Types

let mixed = ['hello'];
mixed.push(42, true, {name: 'John'}, [1, 2]);

console.log(mixed);
// ['hello', 42, true, {name: 'John'}, [1, 2]]

//  *****************************Pop Method******************************

// The pop() method removes the last element from an array and returns that removed element.

// ⚠️ Important: pop() MODIFIES the original array (mutates it)!

// Syntax: array.pop()
// Parameters: None
// Returns:
// The removed element from the end of the array

// undefined if the array is empty

let fruits1 = ['apple', 'banana', 'orange'];
let removed = fruits.pop();

console.log(fruits1);    // ['apple', 'banana']
console.log(removed);   // 'orange'

// 3. Multiple Pops

let numbers2 = [10, 20, 30, 40];
let last = numbers.pop();
let secondLast = numbers.pop();

console.log(numbers2);   // [10, 20]
console.log(last);      // 40
console.log(secondLast);// 30




