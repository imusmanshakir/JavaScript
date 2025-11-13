function countConsonants(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();

    if (
      char !== "a" &&  char !== "e" &&  char !== "i" &&  char !== "o" &&  char !== "u"
    ) {
      count++;
    }
  }
  return count;
}

const result = countConsonants("IamUsman");
console.log(result);
