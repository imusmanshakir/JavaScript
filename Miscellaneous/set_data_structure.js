// A Set stores unique values (no duplicates allowed).

// It works like a mathematical set.

// Because arrays allow duplicates:

// [1, 1, 1, 2, 3];


// But Set gives only unique values:

// const s = new Set([1, 1, 2, 3]);
// console.log(s);      // Set { 1, 2, 3 }

// Create:
const set = new Set();

set.add(10);
set.add(10);   // won't add duplicate
set.add(20);

console.log(set.has(10)) // true;
set.delete(20);
for (const v of set) {
  console.log(v);
}

// Real Use-Cases of Set

// Remove duplicates from array:

const arr = [1,1,2,3,3,4];
const unique = [...new Set(arr)];

