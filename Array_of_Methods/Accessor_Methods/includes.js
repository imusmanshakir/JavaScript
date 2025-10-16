// What is includes()?
// includes() is a built-in JavaScript array method that determines whether an array includes a certain element, returning true or false.

// Is it an Accessor Method?
// Yes, includes() is an accessor method - it does NOT modify the original array, it only retrieves information from it.

// Parameters
// includes() takes two parameters:

// array.includes(searchElement, fromIndex)

// searchElement (required): The element to search for

// fromIndex (optional): Position to start searching from (default: 0)

// Negative values count from the end of the array

// Return Value
// includes() returns:

// true if the element is found in the array

// false if the element is not found

let fruits = ['apple', 'banana', 'cherry', 'date'];

console.log(fruits.includes('banana'));    // true
console.log(fruits.includes('grape'));     // false
console.log(fruits);                       // ['apple', 'banana', 'cherry', 'date'] (unchanged)

// Case sensitive for strings
console.log(fruits.includes('Apple'));     // false

// With fromIndex Parameter

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(3));          // true
console.log(numbers.includes(3, 3));       // false (search starts from index 3)
console.log(numbers.includes(3, 2));       // true (search starts from index 2)

// Negative fromIndex
console.log(numbers.includes(3, -3));      // true (search from 3rd last position)
console.log(numbers.includes(1, -1));      // false (search from last position)

// Special Values (NaN, null, undefined)

let specialValues = [NaN, null, undefined, 0, false, ''];

console.log(specialValues.includes(NaN));        // true (unlike indexOf!)
console.log(specialValues.includes(null));       // true
console.log(specialValues.includes(undefined));  // true
console.log(specialValues.includes(0));          // true
console.log(specialValues.includes(false));      // true
console.log(specialValues.includes(''));         // true