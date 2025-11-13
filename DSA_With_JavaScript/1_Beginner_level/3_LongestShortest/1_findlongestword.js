let longest = "";
function longestWord(string) {
  for (let word of string.split(' ')) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

const result = longestWord("I am Learning JavaScript hjfbhbhdbfyhfbhfbcr");
console.log(result);
