function decimalToBinary(decimal){
    if(decimal === "0") return 0;

    let num = decimal;
    let binary = "";

    while(num>0){
        let remainder = num%2;
        binary = binary+remainder;
        num = Math.floor(num/2)

    }
    return binary
};



const result = decimalToBinary(1100);
console.log(result);