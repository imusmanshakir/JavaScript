// Definition
// Currying is the process of transforming a function that takes multiple arguments into a sequence 
// of functions that each take one argument at a time.

// How Currying Works:
// Instead of calling a function with all its arguments at once (e.g., sum(1, 2, 3)), a curried function is called step-by-step, with each call returning a new function that expects 
// the next argument (e.g., sum(1)(2)(3)). The final function in the sequence executes the original logic once all arguments have been provided.

function add(a) {
  return function(b) {
    return a + b;
  };
}

console.log(add(2)(3)); // 5

// Here:

// First call add(2) → returns a new function that remembers a=2.

// Then (3) provides the b.

// This works because of closure (the inner function remembers a).

// Why use currying?

// Reusability / partial application → Fix some arguments now, supply the rest later.

// Cleaner code when functions are reused in pipelines (common in React/functional style).\

// **************************Example*******************************************
function calculateTax(rate, amount) {
  return amount * rate;
}

console.log(calculateTax(0.1, 200)); // 20

// Curried way:
function calculateTaxCurried(rate) {
  return function(amount) {
    return amount * rate;
  };
}

const gst = calculateTaxCurried(0.1); // fix GST = 10%
const vat = calculateTaxCurried(0.2); // fix VAT = 20%

console.log(gst(200)); // 20
console.log(vat(200)); // 40
