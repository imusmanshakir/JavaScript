// What is indexOf()?
// indexOf() is a built-in JavaScript array method that searches for an element in an array and returns its first occurrence index.

// Is it an Accessor Method?
// Yes, indexOf() is an accessor method - it does NOT modify the original array, it only retrieves information from it.

// Parameters

// indexOf() takes two parameters:

// array.indexOf(searchElement, fromIndex)
// searchElement (required): Element to locate in the array
// fromIndex (optional): Index to start the search from (default: 0)

// Negative values count from the end of the array

// Return Value
// indexOf() returns:

// The first index where the element is found

// -1 if the element is not found

// Examples:

let fruits = ['apple', 'banana', 'cherry', 'banana', 'date'];

console.log(fruits.indexOf('banana'));    // 1 (first occurrence)
console.log(fruits.indexOf('cherry'));    // 2
console.log(fruits.indexOf('grape'));     // -1 (not found)
console.log(fruits);                      // ['apple', 'banana', 'cherry', 'banana', 'date'] (unchanged)

// Strict Equality Check

let mixed = [1, '1', 2, true, false, null, undefined, NaN];

console.log(mixed.indexOf(1));           // 0
console.log(mixed.indexOf('1'));         // 1 (different type)
console.log(mixed.indexOf(true));        // 3
console.log(mixed.indexOf(null));        // 5
console.log(mixed.indexOf(undefined));   // 6
console.log(mixed.indexOf(NaN));         // -1 (NaN never equals NaN)

// Key Points
// Does NOT mutate the original array

// Uses strict equality (===) for comparison

// Returns first occurrence index

// Returns -1 if element not found

// Cannot find NaN (use includes() for NaN)

// Case sensitive for strings

// Reference sensitive for objects/arrays