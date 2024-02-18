// Javascript is a dynamically typed language

// PRIMITIVE
// 7 types : string, number, boolean, null, undefined, symbol, bigint
// Memory :- stack

let oldEmail = "kajalpruthi30@gmail.com"
let newEmail = oldEmail
newEmail = "kajalpruthi7817@gmail.com"
console.table([oldEmail, newEmail])



// REFERENCE / NON-PRIMITIVE
// Array, Objects, Functions
// Memory :- heap

let user1 = {
    email : "kajalpruthi30@gmail.com",
    password : "<PASSWORD>"
}

let user2 = user1
user2.email = "kajalpruthi7817@gmail.com"

console.table([user1.email, user2.email])