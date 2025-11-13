function secondLargest(nums) {
  let largest = -Infinity
  let secondLargest = -Infinity

  for(const num of nums){
    if(num > largest){
        secondLargest = largest;
        largest = num;
    } else if(num > secondLargest && num !== largest){
        secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

const result = secondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(result);
