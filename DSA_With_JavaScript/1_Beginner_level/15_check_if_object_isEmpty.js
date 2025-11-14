function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// Usage:
console.log(isEmpty({})); // true
console.log(isEmpty({ name: "Kimi" })); // false

// Robust Version

function isEmpty(obj) {
  return (
    obj != null && typeof obj === "object" && Object.keys(obj).length === 0
  );
}

// Usage:
console.log(isEmpty({})); // true
console.log(isEmpty(null)); // false
console.log(isEmpty(undefined)); // false
console.log(isEmpty("string")); // false

// Traditional for...in Loop
// The old-school approach (pre-ES5):

function isEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

console.log(isEmpty({}));
