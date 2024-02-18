const obj = {
    name: 'Jane',
    greet: () => {
        console.log("Arrow function :-");
        console.log(this);
        console.log(`Hello, ${this.name}!`);
        console.log("\n");
    },
    create: function(){
        console.log("Normal function :-");
        console.log(this);
        console.log(this.name);
    }
};
obj.greet();
obj.create();

console.log("\n\n");

class User{
    constructor(username, email){
        this.username = username;
        this.email = email;
    }
}

class Student extends User {
    constructor(username, email, course){
        super(username, email);
        this.course = course;
    }
    
    showEmail = () => {
        console.log(this);
        console.log("Email : " + this.email);
    }

    showName = () => {
        console.log(this);
        console.log("Name : " + this.username);
    }
   
    showCourse = () => {
        console.log(this);
        console.log("Course: " + this.course);
    }
}

const studentObj = new Student("kajal", "kajal@gmail.com", "english");
studentObj.showName();
studentObj.showCourse();


// In summary, the key difference is in how arrow functions are used and where they are defined.
// In the first example, the arrow function is defined within an object literal, where this refers to the global object.
// In the second example, the arrow functions are defined as class fields within a class, where this refers to the instance of the class

// Arrow functions doesn't have their own context, they just inherit :)
// In object literals, no such inheritance possible so arrow function inherit context from global object