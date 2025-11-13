function findFreq(array) {
  let frequency = {};

  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element in frequency) {
      frequency[element]++;
    } else {
      frequency[element] = 1;
    }
  }
  return frequency;
}

const result = findFreq([1, 2, 3,3,3]);
console.log(result);
