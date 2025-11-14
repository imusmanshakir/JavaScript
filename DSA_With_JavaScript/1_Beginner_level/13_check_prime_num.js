function isPrimeNaive(n) {
  if (!Number.isInteger(n) || n <= 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrimeNaive(7)); // true
console.log(isPrimeNaive(10)); // false
