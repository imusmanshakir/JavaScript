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

