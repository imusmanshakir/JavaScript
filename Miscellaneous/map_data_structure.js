// A Map is a special data structure that stores key–value pairs, similar to objects — but with more power and flexibility.

// How a Map behaves
// Create a Map:

const map = new Map();

map.set("name", "Usman");
map.set(10, "Age");
map.set(true, "flag");
map.set({ key: 1 }, "object");

//Access Values

console.log(map.get("name")); // "Usman"
console.log(map.has(10)); // true
console.log(map.size); // number of entries
map.delete(true);
for (const [key, value] of map) {
  console.log(key, value);
}
map.clear();
