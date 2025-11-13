function hyphen(string) {
  let result = "";
  strLen = string.length;
  for (let i = 0; i < strLen; i++) {
    let strInd = string[i];
    for (let j = 0; j < strInd.length; j++) {
      if (strInd[j] === " ") {
        result = result.concat("-");
      } else {
        result = result.concat(strInd[j]);
      }
    }
  }
  return result;
}

const result = hyphen([
  "a great and glorious empire has vanished",
  " it will rise again",
]);
console.log(result);
