// Promise chaining in JavaScript is a mechanism for executing a sequence of asynchronous operations in a specific order, where each subsequent operation depends on the successful completion of the previous one.
// This is achieved by returning a promise from within a .then() callback, allowing the next .then() in the chain to wait for that returned promise to resolve before executing its own callback.

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 100);
});

promise
  .then((result) => {
    console.log(result); // 10
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 20
    return result * 3;
  })
  .then((result) => {
    console.log(result); // 60
    return result * 4;
  })
  .then((result) => {
    console.log(result); //240
  })
  .finally(() => {
    console.log("Promise Either resolved or rejected");
  });

// The way we call the then() method like this is often referred to as a promise chain.

// Here's how promise chaining works:
// Returning a Promise from then(): The key to promise chaining lies in the fact that the .then() method of a Promise object itself returns a new Promise. This allows you to chain multiple .then() calls together.
// Sequential Execution: When you return a promise from within a .then() handler, the next .then() handler in the chain will only execute after the returned promise resolves. This ensures that asynchronous operations are performed in a specific order.
// Data Flow: The resolved value of a promise is passed as an argument to the success handler of the next .then() in the chain. This enables data to flow through the chain, with each step potentially transforming or using the data from the previous step.
// Error Handling: A single .catch() block at the end of a promise chain can handle errors that occur at any point in the chain. If a promise is rejected at any stage, the chain will skip any subsequent .then() blocks and proceed directly to the nearest .catch() block.

// Returning a Promise
// When you return a value in the then() method, the then() method returns a new Promise that immediately resolves to the return value.
// Also, you can return a new promise in the then() method, like this:

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 100);
});

promise1
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 2);
      }, 3 * 1000);
    });
  })
  .then((result) => {
   // console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 3);
      }, 3 * 1000);
    });
  })
  .then((result) => console.log(result));

setTimeout(() => {
  promise1.finally(() => {
    console.log("Promise1 Either resolved or rejected");
  });
}, 9 * 1000);

// This example shows 10, 20, and 60 after every 3 seconds. This code pattern allows you to execute some tasks in sequence.
// The following modified the above example:

function generateNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, 3 * 1000);
  });
}

generateNumber(10)
  .then((result) => {
    console.log(result);
    return generateNumber(result * 2);
  })
  .then((result) => {
    console.log(result);
    return generateNumber(result * 3);
  })
  .then((result) => console.log(result))

  .finally(()=>{
    console.log(generateNumber,'Either resolved or rejected');
  })

