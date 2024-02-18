// In javascript everything is an object

// Function is a function itself as well as it is an object
// Array is a array itself as well as it is an object
// String is a string itself as well as it is an object


// 1. Setting a property to a function, as it is an object on higher level
function multiplyBy5(num){
    return num * 5;
}

multiplyBy5.property = 2;

console.log(multiplyBy5(6));
console.log(multiplyBy5.property);
console.log(multiplyBy5.prototype);



// 2. Reflecting the use of prototype
function createUser(username, score){
    this.username = username;
    this.score = score;
    this.incrementScore = function(){
        this.score++;
    }
}

createUser.prototype.decrementScore = function(){
    this.score--;
}

const user1 = new createUser("Kajal", 10);
user1.incrementScore();
user1.decrementScore();
console.log(user1);
