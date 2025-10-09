// ********************Use Browser for better understanding**************************************

// JavaScript Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. 
// They provide a structured way to handle asynchronous code, improving readability and maintainability compared to traditional callback-based approaches. 

// A promise has three states:

// Pending — not finished yet.
// Fulfilled (resolved) — finished successfully, with a value.
// Rejected — finished with an error/reason.

// Why we need Promises?

// Avoid callback hell / pyramid of doom. Promises let you chain operations instead of nesting many callbacks.

// Better error handling. .catch() catches errors from anywhere in the chain.

// Composability. Utilities like Promise.all, Promise.race, Promise.allSettled let you run or combine multiple async tasks easily.

// Cleaner syntax with async/await. Promises are the foundation for async/await, which makes asynchronous code look synchronous and easier to reason about.

// ************************JavaScript Promise Control flow***********************
// A promise is said to be settled or resolved when it is either fulfilled or rejected. Once a promise is settled, it becomes immutable, and its state cannot change. 
// The then() and catch() methods of a promise can be used to attach callbacks that execute when it is settled. These callbacks are called with the fulfillment value and rejection reason, respectively.


let operationSuccessful = true;
let result = new Promise(function(resolved, rejected){
    if(operationSuccessful){
        resolved("Operation was successful");
    } else {
        rejected("Operation was unsuccessful");
    }
});
console.log(result);

// Consuming the Promise in JavaScript
// We can consume the Promise by calling then(), catch(), and finally() methods of promise object.

// ***********************The then() method*****************************************
// The then() method is used to attach fulfillment callback to promise when the promise is resolved.

// Syntax of then(): promiseObject.then(onFulfilled, onRejected);

// The then() method takes two parameters

// The onFullfilled callback is called if the promise is fulfilled.
// The onRejected callback is called if the promise is rejected.

// function doPromise(passexam) {
//             return new Promise(function (resolve, reject) {
//                 setTimeout(() => {
//                     if (passexam) {
//                         resolve("Dad gifted the new mobile.");
//                     } else {
//                         reject("Dad has not gifted the mobile.");
//                    }
//                 }, 5 * 1000);
//             });
//         }
//         let passexam = doPromise(true);
//         passexam.then(
//             success => console.log(success),
//             err => console.log(err)
//         );

// *******************************The catch() method******************************************
// The catch() method is used to attach rejection callback to promise when the promise is rejected. The function passed as the second parameter to .then() method of a promise object

// passexam.catch(
//        error => console.log(error)
// );

// Internally, the catch() method invokes the then(undefined, onRejected) method.

const res = new Promise((resolve, reject) => {
            const passexam = false;
            // An asynchronous operation.
            setTimeout(() => {
                if (passexam) {
                    resolve("Dad gifted the new mobile.");
                } else {
                    reject("Dad has not gifted the mobile.");
                }
            }, 5 * 1000)
        });
        res.then(result => console.log(result),
            err => alert(err));

// **********************************The finally() method*************************************
// The finally() method is the same as try catch finally block we studied in exception chapter where the finally block always executed whether the error has occurred or not. 
// Here the finally() method is also the same. Sometimes, we want to execute the same piece of code whether the promise is fulfilled or rejected.

// Here's a breakdown of finally():
// Purpose: To execute code when a promise is settled, whether it's fulfilled or rejected. This is ideal for tasks like hiding loading spinners, closing resources, or performing other cleanup operations.
// Syntax: promise.finally(onFinally) where onFinally is a function to be called when the promise settles.
// Return Value: finally() returns a new Promise object, allowing for chaining with other promise methods like then() or catch().
// Arguments: The onFinally callback function does not receive any arguments, as it's intended for actions independent of the promise's resolved value or rejection reason.

function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 1000);
  });
}

console.log("Fetching data...");

fetchData()
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Data fetching process completed (finally block).");
    // This code will always run, regardless of success or failure
  });




  // why we use promises??

  // Example: Callback hell

  // let resultA, resultB, resultC, resultD;
  //       function sum(num1, num2, callback) {
  //           const cb = $.Callbacks();
  //           cb.add(callback);
  //           cb.fire(num1 + num2);
  //       };
  //       sum(1, 2, success => {
  //           //callback 1
  //           resultA = success; //you get result = 3
  //           sum(resultA, 3, success => {
  //               //callback 2
  //               resultB = success; //you get result = 6
  //               sum(resultB, 4, success => {
  //                   //callback 3
  //                   resultC = success; //you get result = 10
  //                   sum(resultC, 5, success => {
  //                       //callback 4
  //                       resultD = success; //you get result = 15
  //                       console.log('total: ' + resultD);
  //                       console.log(resultA, resultB, resultC, resultD);
  //                   });
  //               });
  //           });
  //       });

  // Look at the Promise version of above same example:

  let resultA, resultB, resultC, resultD;
        function sum(num1, num2) {
            return Promise.resolve(num1 + num2);
        };
        sum(1, 2)
            .then(success => {
                resultA = success;
                return resultA;
            })
            .then(success => sum(success, 3))
            .then(success => {
                resultB = success;
                return resultB;
            })
            .then(success => sum(success, 4))
            .then(success => {
                resultC = success;
                return resultC;
            })
            .then(success => sum(success, 5))
            .then(success => {
                resultD = success;
                return resultD;
            })
            .then(success => {
                console.log('total: ' + success)
                console.log(resultA, resultB, resultC,resultD)
            });



