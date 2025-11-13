function countVowels(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
      str = arr[i];
      toLowerStr = str.toLowerCase();
      
      for(let j =0; j<toLowerStr.length; j++){
        const char = toLowerStr[i]
        if(char ==='a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
      }
        return count;

  }

}

let array = ["I", "am", "Usman"];
const result = countVowels(array);
console.log(result);
