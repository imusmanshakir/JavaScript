function sumLastDigits(num) {
  let n = num < 0 ? -num : num;//for handling negative numbers
  let sum = 0;

  while (n > 0) {
    let lastDigit = n % 10;
    sum = sum + lastDigit;
    n = Math.floor(n / 10);
  }

  return sum;
}

const result = sumLastDigits(12);
console.log(result);
