const User1 = new Object();     //Singleton Object
const User2 = {}               //Non-singleton Object


User1.name  = "Kajal";
User1.email = "kajal@gmail.com";


// Result will be in array format - same for both user1 and user2
console.log(Object.keys(User1))
console.log(Object.values(User1))
console.log(Object.entries(User1))



const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = {obj1 , obj2}         ---> This will add two objects together

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

const obj4 = {...obj1, ...obj2};
console.log(obj4);


