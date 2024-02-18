// 1. Javascript is a prototype based langugage
// Classes are primarily syntactic sugar over existing prototype based inheritance mechanisms

// 2. OOPS - programming paradigm (structure) - 4 pillars
// * Abstraction - hide details, ex- fetch
// * Encapsulation - wrapper
// * Inheritance
// * Polymorphism - many forms

// 3. Object - collections of properties and methods

// 4. Why use OOP's?
// Ans- to deal with messy code

// 5. Parts of OOP's in javscript?
// Ans - Object literal

// - Constructor functions
// - Prototypes
// - Instances (new, this)


// Object Literal
const username = "kajal arora";
const user = {
    username: "Kajal pruthi",
    age: 21,
    email: "kajal@gmail.com",
    show: function(){
        console.log(`${username}, Welcome to website`)
    }
}
console.log(user.show());
// without using "this.username" output will be the one present globally not the one present within the context


// Instances - Specific occurrence of an object created from a class or constructor function.
// new keyword - Constructor Function - multiple copies of same instances of a function

function users(username, loginCount, userLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.userLoggedIn = userLoggedIn;

    return this

    // This will work fine
    // return {
    //     username: username,
    //     loginCount: loginCount,
    //     userLoggedIn: userLoggedIn
    // };
}

const user1 = users("Kajal", 2, true);
const user2 = users("Komal", 6, false);

console.log(user1);
console.log(user2);

// Problem using this keyword, without creating a new instance, will override values; - SOLUTION - use new keyword
const user1solution = new users("Kajal", 2, true);
const user2solution = new users("Komal", 6, false);