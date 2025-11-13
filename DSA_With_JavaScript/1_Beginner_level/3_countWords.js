function countWords(string) {
  let count = 0;
  const splitStr = string.split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    count++;
  }
  return count;
}

console.log(countWords("I am Learning JavaScript"));
