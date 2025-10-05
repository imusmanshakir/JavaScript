// In JavaScript, static methods on the Promise object are functions that are called directly on the Promise constructor itself, rather than on an instance of a Promise.
// These methods are designed to help manage and orchestrate multiple promises concurrently or to create promises in specific states.
// Here are the most common static methods available on the Promise object:

// -->Promise.all(iterable): This method takes an iterable (e.g., an array) of promises as input and returns a single Promise. This returned promise fulfills when all of the input promises fulfill, with an array of their fulfillment values.
// It rejects if any of the input promises reject, and the rejection reason is the reason of the first promise that rejected.

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = new Promise((resolve) => setTimeout(() => resolve(3), 100));

Promise.all([p1, p2, p3])
  .then((values) => console.log(values)) // Output: [1, 2, 3]
  .catch((error) => console.error(error));

//  -->The Promise.allSettled() method in JavaScript takes an iterable (e.g., an array) of promises as input and returns a single Promise.
//   This returned promise fulfills when all of the input promises have "settled," meaning they have either fulfilled (resolved successfully) or rejected (failed)
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "error")
);
const promise3 = Promise.resolve("foo");

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  console.log(results);
});


//Example comparing all


const p4 = Promise.resolve(10);
const p5 = Promise.reject("Error!");
const p6 = new Promise(res => setTimeout(() => res(30), 1000));

Promise.all([p4, p5])
  .then(console.log) // [10, 30]
  .catch(console.error);

Promise.allSettled([p4, p5, p6])
  .then(console.log); // [{status:'fulfilled', value:10}, {status:'rejected', reason:'Error!'}, {status:'fulfilled', value:30}]

Promise.race([p4, p6])
  .then(console.log); // 10 (p1 resolved first)

Promise.any([p5, p6])
  .then(console.log); // 30 (first fulfilled)



//  -------  Summary (easy to remember)  -------
// Method	Key word
// resolve()	"make a promise resolved now"
// reject()	"make a promise rejected now"
// all()	"wait for everyone or fail if one fails"
// allSettled()	"wait for everyone no matter what"
// race()	"first one wins (success or fail)"
// any()	"first successful one wins"