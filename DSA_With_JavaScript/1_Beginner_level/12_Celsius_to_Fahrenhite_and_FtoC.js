function celsiusToFah(cel) {
  let fah = (cel * 9) / 5 + 32;
  return fah;
}

function fahToCelsius(fah) {
  let cel = ((fah - 32) * 5) / 9;
  return cel;
}


console.log(`Celsius to Fahrenhite 100--> ${celsiusToFah(100)}`);
console.log(`Fahrenhite to Celsius 212--> ${fahToCelsius(212)}`);

