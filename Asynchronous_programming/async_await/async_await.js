// What is Async/Await?
// Async/await is syntactic sugar over Promises that makes asynchronous code look and behave more like synchronous code.

// Before Async/Await (Promise Hell):
function getUserData() {
  return fetch('/api/user')
    .then(response => response.json())
    .then(user => {
      return fetch(`/api/profile/${user.id}`)
        .then(response => response.json())
        .then(profile => {
          return fetch(`/api/posts/${profile.id}`)
            .then(response => response.json());
        });
    });
}

// After Async/Await:

async function getUserData() {
  const response = await fetch('/api/user');
  const user = await response.json();
  
  const profileResponse = await fetch(`/api/profile/${user.id}`);
  const profile = await profileResponse.json();
  
  const postsResponse = await fetch(`/api/posts/${profile.id}`);
  const posts = await postsResponse.json();
  
  return posts;
}

// 2. Basic Syntax & Rules
// async keyword
// Makes a function always return a Promise

// If function returns a value, it's wrapped in a resolved Promise

// If function throws an error, it's wrapped in a rejected Promise

// All these are equivalent:
async function hello() { return "Hello"; }
function hello() { return Promise.resolve("Hello"); }
console.log(hello()); // Promise {<fulfilled>: "Hello"}

// await keyword
// Pauses function execution until Promise settles

// Can only be used inside async functions

// Returns the resolved value of the Promise

// Throws an error if Promise is rejected

async function example() {
  const result = await Promise.resolve(42); // result = 42
  const error = await Promise.reject("Failed"); // Throws "Failed"
}