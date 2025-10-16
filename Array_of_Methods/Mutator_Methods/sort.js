// What is sort()?
// sort() is a built-in JavaScript array method that sorts the elements of an array in place.

// Is it a Mutator Method?
// Yes, sort() is a mutator method - it modifies the original array directly.

// Parameters
// sort() takes one optional parameter:
// array.sort([compareFunction])

// Return Value
// sort() returns the sorted array (the same array reference, now sorted).

let fruits = ['banana', 'apple', 'cherry', 'date'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'cherry', 'date']

let numbers = [40, 100, 1, 5, 25, 10];
numbers.sort();
console.log(numbers); // [1, 10, 100, 25, 40, 5] (lexicographical order)

// Ascending order
let numbers1 = [40, 100, 1, 5, 25, 10];
numbers1.sort((a, b) => a - b);
console.log(numbers1); // [1, 5, 10, 25, 40, 100]

// Descending order
numbers1.sort((a, b) => b - a);
console.log(numbers1); // [100, 40, 25, 10, 5, 1]

// Object Sorting

let people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 35 }
];

// Sort by age (ascending)
people.sort((a, b) => a.age - b.age);
console.log(people);
// [{name: 'Jane', age: 25}, {name: 'John', age: 30}, {name: 'Bob', age: 35}]

// Sort by name (alphabetical)
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
// [{name: 'Bob', age: 35}, {name: 'Jane', age: 25}, {name: 'John', age: 30}]