function removeduplicate(array) {
  let unique = [];

  for (let i = 0; i < array.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < unique.length; j++) {
      if (array[i] === unique[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      unique.push(array[i]);
    }
  }

  return unique;
}

const result = removeduplicate([
  1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
]);
console.log(result);
