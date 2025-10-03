// A nested function (also known as an inner function) is a function that is declared within another function (known as the outer function). 
// The inner function has access to the variables of its outer function, forming a lexical scope chain.

function outer() {
    console.log('This is the outer function')
    function inner() {
        console.log("This is the inner function.")
    }
    inner();
}
outer();


// Inner Function Accessing Outer Variables
function outer(a, b) {
    function inner() {
        return a + b;
    }
    console.log(inner());
}
outer(2, 3)//5

// Returning an Inner Function (Closure)
// Nested functions can return inner functions, creating closures that "remember" the outer function’s scope.

function outer(x) {
    return function inner(y) {
        return x + y;
    };
}

const addFive = outer(5);
console.log(addFive(3));

// Nested Functions with Multiple Arguments
// You can create more complex nested functions that accept multiple arguments.
function outer(x, y) {
    function inner(a, b) {
        return a * b + x + y;
    }
    return inner(3, 4);
}

console.log(outer(2, 5));


// In this code
// The outer function is defined to take two parameters, x and y.
// Inside outer function, there’s an inner function that takes its own parameters a and b and performs a calculation using x and y from the outer function.
// Inside outer function, inner function is called, which multiplies 3 and 4, then adds x and y (which are 2 and 5).


// ***************END*********************
// How nested functions work in JavaScript?
// A nested function is a function defined inside another function in JavaScript.
// The inner function has access to the variables and parameters of the outer function.
// The inner function can be called only from within the outer function.
// Nested functions allow for better organization and code reuse.
// They enable closures, where the inner function can "remember" and access variables from the outer function even after the outer function has finished executing.