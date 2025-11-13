// What it does:
// Iterates over each element in the array.

// Executes a callback function for every element, passing the following arguments:

// Current Element: The value of the current element.

// Index (optional): The index of the current element.

// Array (optional): The original array being traversed.

// Does not mutate the original array (though the callback can modify it if elements are objects).

// What it returns:
// undefined. It does not return a new array or any value.

// array.forEach(callback(currentValue, index, array));

// Basic Usage:

const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2));
// Output: 2, 4, 6 (logs each result)
// Returns: undefined

["a", "b", "c"].forEach((letter, index, arr) => {
  console.log(`${letter} at index ${index} in [${arr}]`);
});
// Output: 
// "a at index 0 in [a,b,c]"
// "b at index 1 in [a,b,c]"
// "c at index 2 in [a,b,c]"

const users = [{name: "alice"}, {name: "bob"}];

users.forEach((user) => user.name = user.name.toUpperCase());
console.log(users);


// Key Points:
// Cannot break or continue: Unlike for loops, forEach iterates through all elements unconditionally. Use for...of or for for control over iteration flow.

// Async/Await: Does not work well with asynchronous operations inside the callback. Use for...of with await instead.

// Performance: Slightly slower than a traditional for loop in some cases, but generally optimized in modern engines.

// Comparison with map:
// map returns a new array with transformed elements.

// forEach is used for side effects (e.g., logging, updating variables).

// Comparison with Map

// +------------------+-------------------+------------------+
// | Feature          | map               | forEach          |
// +------------------+-------------------+------------------+
// | Return Value     | New array         | undefined        |
// +------------------+-------------------+------------------+
// | Use Case         | Data transformation| Side effects    |
// +------------------+-------------------+------------------+
// | Chainable        | Yes (returns array)| No              |
// +------------------+-------------------+------------------+
// | Original Array   | Unchanged         | Can be modified  |
// +------------------+-------------------+------------------+
