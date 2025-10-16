// What is lastIndexOf()?
// lastIndexOf() is a built-in JavaScript array method that searches for an element in an array from the end to the beginning and returns its last occurrence index.

// Is it an Accessor Method?
// Yes, lastIndexOf() is an accessor method - it does NOT modify the original array, it only retrieves information from it.

// Parameters
// lastIndexOf() takes two parameters:

// array.lastIndexOf(searchElement, fromIndex)

// searchElement (required): Element to locate in the array

// fromIndex (optional): Index to start the search backwards from (default: array.length - 1)

// Negative values count from the end of the array

// Return Value
// lastIndexOf() returns:

// The last index where the element is found

// -1 if the element is not found

// basic usage
let fruits = ['apple', 'banana', 'cherry', 'banana', 'date'];

console.log(fruits.lastIndexOf('banana'));    // 3 (last occurrence)
console.log(fruits.lastIndexOf('cherry'));    // 2
console.log(fruits.lastIndexOf('grape'));     // -1 (not found)
console.log(fruits);                          // ['apple', 'banana', 'cherry', 'banana', 'date'] (unchanged)

// With fromIndex Parameter

let numbers = [1, 2, 3, 4, 5, 3, 6];

// Search from the end (default)
console.log(numbers.lastIndexOf(3));          // 5

// Search backwards from index 4
console.log(numbers.lastIndexOf(3, 4));       // 2

// Search backwards from index 1
console.log(numbers.lastIndexOf(3, 1));       // -1 (not found before index 1)

// Negative fromIndex (counts from end)
console.log(numbers.lastIndexOf(3, -2));      // 5 (search backwards from 2nd last position)