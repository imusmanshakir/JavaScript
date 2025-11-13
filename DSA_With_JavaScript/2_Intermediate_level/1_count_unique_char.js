//Exampl 1
function countUniqueChars(str) {
  const seen = [];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!seen[char]) {
      seen[char] = true;
      count++;
    }
  }
  return count;
}

//Exampl 2
function countUniqueChars(str) {
  const seen = {};
  let count = 0;

  for (const char of str) {
    if (!seen[char]) {
      seen[char] = true;
      count++;
    }
  }
  return count;
}

const result = countUniqueChars("i am am  am usman shakir");
console.log(result);
