// 2 ways of declaring objects :- Object literals and singleton


// Object literals
const user = {
    name: "Kajal",
    age: 21,
    "city": "Hisar",
    email: "kajal@gmail.com",
    lastlogin: ["saturday", "sunday"],
    fullName : {
        name: "Kajal",
        surname: "Pruthi"
    },
    greeting: function(){
        console.log(`Hello ${this.name}!`)
    }
    // by default keys are strings
}

console.log(user.name);
console.log(user["name"]);
console.log(user.greeting());


// console.log(user.city);     --> This will not work
console.log(user["city"]);

Object.freeze(user);          //changes will not implement
user.email = "kk";

console.log(user.email);