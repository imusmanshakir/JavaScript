// Math.floor() is a built-in JavaScript function used to round a number down to the nearest whole integer.

// Think of it like this:
// If a number has any decimal part — no matter how small — Math.floor() always goes to the next lowest integer.

// How it Works (Simple Idea)

// It does not care about normal rounding rules.

// It always rounds toward negative infinity.

// It keeps the integer part and throws away everything after the decimal — but always rounds down.

console.log(Math.floor(5.9));
console.log(Math.floor(5.00001));//Even if the decimal is extremely small, it still goes down.

//Important: For Negative Numbers
//This is where many beginners get confused.
console.log(Math.floor(-5.1));
console.log(Math.floor(-2.00001));
//Why?, Because "down" means towards negative infinity, not towards zero.

// Table 
// +----------------+-----------------------------------------+
// | Function       | Meaning                                 |
// +----------------+-----------------------------------------+
// | Math.floor()   | Always round down                       |
// | Math.ceil()    | Always round up                         |
// | Math.round()   | Normal rounding                         |
// | Math.trunc()   | Remove decimal (towards zero)           |
// +----------------+-----------------------------------------+

