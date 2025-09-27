function multiplyBy5 (num){
    return num*5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser (username, score){
    this.username = username;
    this.score = score
}

createUser.prototype.increment = function () {
    score++;
};

const chai = createUser("Chai", 25);
const tea = createUser("Tea", 250);