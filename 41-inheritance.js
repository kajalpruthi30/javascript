
// 1. Classe user is declared here!
class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }

    static createId(){
        return '123'
    }
}


// 2. Teacher can access the properties of User Class using super 
// super is a keyword that allows a subclass to call methods or access properties from its parent class
class Teacher extends User{
    constructor(username, email, password, subject){
        super(username, email, password);
        this.subject = subject;
    }
    addCourse(){
        console.log(`A new course is added by ${this.username}`)
    }
}

const teach = new Teacher("kajal", "kajalpruthi@gmail.com", "123", "english");
teach.addCourse();
teach.logMe();

console.log(teach instanceof Teacher);
console.log(teach instanceof User);