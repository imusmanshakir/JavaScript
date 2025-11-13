//Method-->1
function countVowels(vowel) {
  let count = 0;

  for (let i = 0; i < vowel.length; i++) {
    if ( vowel[i] === "a" ||vowel[i] === "e" ||vowel[i] === "i" || vowel[i] === "o" || vowel[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

const result = countVowels("Hello, World");
console.log("Total number of vowels are:" ,result);

// Method-->2

function countVowels1(vowel1){
    let count = 0;
   
    for(let i =0; i<vowel1.length; i++){
         const char = vowel1[i].toLowerCase()
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' ||char === 'u'){
            count++;
        }
    }
    return count;
}

const result1= countVowels1("HELLo, world, abc");
console.log("Total number of vowels are:", result1);
