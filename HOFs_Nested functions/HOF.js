console.log("****************Topic--> HOFs************************************")

// ****************What is a Higher-Order Function (HOF)?************************

// Definition: A function that takes one or more functions as arguments, returns a function, or both.

// Mnemonic: TAKE or RETURN → HOF takes functions or returns functions (or both).

// Why HOFs matter

// They let you abstract behavior, reuse logic, compose small functions into bigger ones, and write clearer asynchronous or functional-style code.

function callbackFunction(){
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction);

console.log("****************Topic--> Nested Functions************************************");
// **************************Nested Function**********************************************
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


// How nested functions work in JavaScript?
// A nested function is a function defined inside another function in JavaScript.
// The inner function has access to the variables and parameters of the outer function.
// The inner function can be called only from within the outer function.
// Nested functions allow for better organization and code reuse.
// They enable closures, where the inner function can "remember" and access variables from the outer function even after the outer function has finished executing.