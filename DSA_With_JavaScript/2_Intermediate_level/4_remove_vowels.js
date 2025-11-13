function removeVowels(string) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let result = "";

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    let isVowel = false;

    for (let j = 0; j < vowels.length; j++) {
      if (char === vowels[j]) {
        isVowel = true;
        break;
      }
    }
    if (!isVowel) {
      result = result + char;
    }
  }
  return result;
}

const result = removeVowels("hello, world");
console.log(result);
