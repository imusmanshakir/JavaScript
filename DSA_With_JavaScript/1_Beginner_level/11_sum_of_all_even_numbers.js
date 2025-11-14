function sumOfAllEvenNums(num) {
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      sum += num[i];
    }
  }
  return sum;
}

const result = sumOfAllEvenNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);
