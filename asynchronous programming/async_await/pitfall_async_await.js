//why first one works and second one doesn't?


const url = 'https://dummyjson.com/quotes';
async function fetchData(url) {
  const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
  const data = await response.json();
  console.log(data);
}

fetchData(url);

// Async functions ALWAYS return Promises immediately, even before their internal code finishes!

// async function fetchData() {
//   const data = await fetch(url); // This takes time
//   return data;                   // But function returns IMMEDIATELY
// }

console.log(fetchData()); // → Promise {<pending>} ⚠️

const url1 = 'https://dummyjson.com/quotes';
async function fetchData1(url1) {
  const response = await fetch(url1);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
  const data = await response.json();
  return data;
}

console.log(fetchData1(url));

// in this example fetchData(url) returns a Promise that resolves to the fetched data, but since we are logging it immediately,
//  we see the Promise object itself, not the resolved data. To access the actual data, we need to use .then() or await it in another async function.
// In other words async is returning a promise immediately, and the actual data is available only after the promise resolves.
