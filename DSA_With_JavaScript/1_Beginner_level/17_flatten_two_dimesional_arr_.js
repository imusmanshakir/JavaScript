function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let inner = arr[i];
    console.log("inside inner-->", inner);
    for (let j = 0; j < inner.length; j++) {
      result.push(inner[j]);
    }
  }
  return result;
}

const result = flattenArray([
  [1, 2],
  [3, 4],
  [5, 6],
]);
console.log(result);
