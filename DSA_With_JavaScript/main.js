function arraysHaveSameElements(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const freq = {}; // Plain object instead of Map

  // Count items in arr1
  for (const item of arr1) {
    const key = String(item); // Convert to string key
    freq[key] = (freq[key] || 0) + 1;
  }

  // Subtract count for items in arr2
  for (const item of arr2) {
    const key = String(item);
    if (!(key in freq)) return false; // Item not found or too many
    freq[key]--;
    if (freq[key] < 0) return false;
  }

  return true;
}

// Works perfectly:
arraysHaveSameElements([1, 2, 3], [3, 2, 1]); // true
arraysHaveSameElements([1, 2, 2], [2, 1, 2]); // true
arraysHaveSameElements([1, "1"], ["1", 1]); // true (string/number)
arraysHaveSameElements([true, false], [false, true]); // true
