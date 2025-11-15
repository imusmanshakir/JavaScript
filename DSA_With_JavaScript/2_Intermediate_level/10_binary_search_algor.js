function binarySearch(arr, tar) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (tar === arr[mid]) {
      return mid;
    } else if (tar > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const result = binarySearch([1, 2, 3], 3);
console.log(result);
