// What is reverse()?
// reverse() is a built-in JavaScript array method that reverses the order of elements in an array.

// Is it a Mutator Method?
// Yes, reverse() is a mutator method - it modifies the original array directly.

// Parameters
// reverse() takes no parameters.

// Return Value
// reverse() returns the reversed array (the same array reference, now reversed).

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1]

let fruits = ['apple', 'banana', 'cherry'];
fruits.reverse();
console.log(fruits); // ['cherry', 'banana', 'apple']


let word = 'hello';
let letters = word.split(''); // Convert to array
letters.reverse();
console.log(letters); // ['o', 'l', 'l', 'e', 'h']
console.log(letters.join('')); // 'olleh'

// With Mixed Data Types
let mixed = [1, 'apple', true, {name: 'John'}, 3.14];
mixed.reverse();
console.log(mixed); // [3.14, {name: 'John'}, true, 'apple', 1]