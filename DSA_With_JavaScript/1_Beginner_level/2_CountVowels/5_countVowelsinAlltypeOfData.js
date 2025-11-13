const vowels = /[aeiou]/i;

function countVowels(input) {
  let count = 0;

  if (typeof input === "string") {
    for (let i = 0; i < input.length; i++) {
      let chars = input[i];
      if (vowels.test(chars)) {
        count++;
      }
    }
  } else if (Array.isArray(input)) {
    for (let i = 0; i < input.length; i++) {
      let word = input[i];
      for (let j = 0; j < word.length; j++) {
        let chars = word[j];
        if (vowels.test(chars)) {
          count++;
        }
      }
    }
  } else if (typeof input === "object") {
    for (let key in input) {
      let value = input[key];
      for (let i = 0; i < value.length; i++) {
        let chars = value[i];
        if (vowels.test(chars)) {
          count++;
        }
      }
    }
  } else {
    return "Please type valid data type and try again";
  }

  return count;
}

const result = countVowels("apple, bee, ice");
const result1 = countVowels(["apple", "bee", "ice"]);
const result2 = countVowels({ a: "apple", b: "bee", c: "ice" });
const result4 = countVowels(1, 2, 3, 4);
console.log(result);
console.log(result1);
console.log(result2);
console.log(result4);
