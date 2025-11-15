function isLeapYear(year) {
  if (year.toString().length !== 4 || year <= 0) {
    throw new Error("Please Enter correct year with 4 digits");
  }
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

const result = isLeapYear(-2028);
console.log(result);
