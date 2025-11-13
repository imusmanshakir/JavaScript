function capitalize(str) {
  if (typeof str === "string") {
    return str[0].toUpperCase() + str.slice(1);
  } else if (typeof str === "object") {
    for (let key in str) {
      let value = str[key];

      value = value[0].toUpperCase() + value.slice(1);
      str[key] = value;
    }

    return str;
  }
}

const result = capitalize("i am learning javascript");
console.log(result);

const result1 = capitalize({ a: "apple", b: "bee", c: "ice" });
console.log(result1);
