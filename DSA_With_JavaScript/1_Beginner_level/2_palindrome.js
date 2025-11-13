var isPalindrome = function (s) {
  let string = s.toLowerCase();
  let splitStr = string.split("");
  let left = 0;
  let right = splitStr.length - 1;

  while (left < right) {
    if (/[^a-z0-9]/i.test(splitStr[left])) {
      left++;
      continue;
    }
    if (/[^a-z0-9]/i.test(splitStr[right])) {
      right--;
      continue;
    }

    if (splitStr[left] !== splitStr[right]) {
      return false;
    }

    left++;
    right--;
  }
  return true;
};

const result = isPalindrome("c#dc");
console.log(result);
