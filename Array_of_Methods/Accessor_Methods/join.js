// What is join()?
// join() is a built-in JavaScript array method that creates and returns a new string by concatenating all elements in an array, separated by a specified separator.

// Is it an Accessor Method?
// Yes, join() is an accessor method - it does NOT modify the original array, it creates and returns a new string.

// Parameters
// join() takes one optional parameter:
// array.join(separator)

// Return Value
// join() returns a string containing all array elements joined together.

// Examples

let fruits = ['apple', 'banana', 'cherry'];

// Default separator (comma)
console.log(fruits.join());        // "apple,banana,cherry"
console.log(fruits);               // ['apple', 'banana', 'cherry'] (unchanged)

// Custom separator
console.log(fruits.join(' - '));   // "apple - banana - cherry"
console.log(fruits.join(''));      // "applebananacherry"
console.log(fruits.join(' '));     // "apple banana cherry"
console.log(fruits.join('\n'));    // "apple\nbanana\ncherry"

// Different Data Types

let mixed = [1, 'hello', true, null, undefined, {name: 'John'}];

console.log(mixed.join());         // "1,hello,true,,,[object Object]"
console.log(mixed.join(' | '));    // "1 | hello | true |  |  | [object Object]"

// Practical Examples
// CSV Generation

let data = ['John Doe', '30', 'New York', 'Engineer'];
let csvLine = data.join(',');
console.log(csvLine); // "John Doe,30,New York,Engineer"
