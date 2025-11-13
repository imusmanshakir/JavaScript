function checkArray(arr) {
  if (arr.length <= 1) {
    return true;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

const result = checkArray([1, 2, 3, 6, 7, 8]);
console.log(result);
