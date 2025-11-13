function evenOdd(nums) {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < nums.length; i++) {
    let number = nums[i];
    if (number % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  return [evenCount, oddCount];
}

const result = evenOdd([1, 2, 3, 4, 5]);
console.log(result);

//Optimized approach

function oddEven(number) {
  let evenCount = 0;
  let oddCount = 0;

  for (const nums of number) n % 2 === 0 ? evenCount++ : oddCount++;

  return [evenCount, oddCount];
}
