function countVowels(arr){
  let count = 0;
  
  
  for(let i =0; i<arr.length; i++){
    const string = arr[i]
    const str = string.toLowerCase();
    
    for(let j =0; j<str.length; j++){
      const char = str[j]
      if(char === 'a' || char === 'e' ||char === 'i' ||char === 'o' ||char === 'u' ){
        count++;
      }
    };
    
  };
  return count;
};


const array = ["appleeeeeee", "bee", "ice"];
const result = countVowels(array);
console.log(result);