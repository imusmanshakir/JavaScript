function binaryToDecimal(binary) {
  let decimal = 0;

  for (let i = 0; i < binary.length; i++) {
    const bit = Number(binary[i]);
    decimal = decimal * 2 + bit;
  }

  return decimal;
}
