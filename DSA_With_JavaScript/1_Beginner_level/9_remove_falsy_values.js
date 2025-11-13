const messyArray = [0, 1, false, 2, "", 3, null, 4, undefined, 5, NaN];

const cleanArray = [];

for (let i = 0; i < messyArray.length; i++) {
  if (messyArray[i]) {
    cleanArray.push(messyArray[i]);
  } 
}

console.log(cleanArray); // [1, 2, 3, 4, 5]
