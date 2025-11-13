let a = 0;

console.log(Number.isSafeInteger(a));



// function factorialBigInt(n) {
//   // Validation
//   if (!Number.isInteger(n) || n < 0) {
//     throw new Error("Factorial is undefined for negative numbers or non-integers");
//   }
  
//   let result = 1n; // BigInt literal
//   for (let i = 2; i <= n; i++) {
//     result *= BigInt(i);
//   }
//   return result;
// }

// // Example
// console.log(factorialBigInt(5).toString());  // "120"
// console.log(factorialBigInt(20).toString()); // "2432902008176640000"