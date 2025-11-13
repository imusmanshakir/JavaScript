function reverseString(str) {
    let chars = str.split(''); // Convert to array for manipulation
    let left = 0;
    let right = chars.length - 1;
    
    while (left < right) {
        // Swap characters
        let temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;
        
        // Move pointers towards center
        left++;
        right--;
    }
    
    return chars.join('');
}

const string = "Hello, World";
console.log(reverseString(string)); // "dlroW ,olleH"