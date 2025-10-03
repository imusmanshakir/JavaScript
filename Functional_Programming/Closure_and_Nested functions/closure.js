// What are closures?
// Closures are functions that have access to the variables that are present in their scope chain even if the outer function ceases to exist.

// To understand this in more detail, let's understand what a scope chain is. Scope chain refers to the fact that parent scope does not have 
// access to the variables inside its children's scope, but the children's scope does have access to the variables present in its parent scopes.

function greet(name) {
  return function(message) {
    console.log(message + ", " + name + "!");
  };
}

const greetAli = greet("Ali");   // outer runs, saves name = "Ali"
const greetUsman = greet("Usman");

greetAli("Hello");   // Hello, Ali!
greetUsman("Hi");    // Hi, Usman!
greetAli("Good morning"); // Good morning, Ali!

// Why is this a closure?

// The inner function (function(message){...}) is returned.

// That inner function remembers the name variable from its outer scope.

// Even after greet() finished, each returned function still has access to its own name.

// So greetAli keeps name = "Ali", and greetUsman keeps name = "Usman". That’s closure.

// More JavaScript Closure examples
// The following example illustrates a more practical example of closure.

function greeting(message) {
   return function(name){
        return message + ' ' + name;
   }
}
let sayHi = greeting('Hi');
let sayHello = greeting('Hello');

console.log(sayHi('John')); // Hi John
console.log(sayHello('John')); // Hello John

// what is happening here

// The greeting() function takes one argument named message and returns a function that accepts a single argument called name.

// The return function returns a greeting message that is a combination of the message and name variables.

// The greeting() function behaves like a function factory. It creates sayHi() and sayHello() functions with the respective messages Hi and Hello.

// The sayHi() and sayHello() are closures. They share the same function body but store different scopes.

// In the sayHi() closure, the message is Hi, while in the sayHello() closure the message is Hello.

