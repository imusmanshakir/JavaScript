function findLongShort(array) {
  let longest = array[0];
  let shortest = array[0];

  if (array.length === 0) {
    return [0, 0];
  } else if (array.length === 1) {
    return [0, longest];
  }

  for (let i = 1; i < array.length; i++) {
    if (array[i] > longest) {
      longest = array[i];
    } else if (array[i] < shortest) {
      shortest = array[i];
    }
  }

  return [shortest, longest];
}

const result = findLongShort([2]);
console.log(result);
