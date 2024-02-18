// ES6 - syntactical sugar

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const user = new User("kajal", "kajalpruthi@gmail.com", "123");
console.log(user.encryptPassword());
console.log(user.changeUserName());


// behind the scenes
function NewUser(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;

    NewUser.prototype.encryptPassword = function(){
        return `${this.password}abc`
    }

    NewUser.prototype.changeUserName = function(){
        return `${this.username.toUpperCase()}`
    }
}

const newUser = new User("kajal", "kajalpruthi@gmail.com", "123");
console.log(newUser.encryptPassword());
console.log(newUser.changeUserName());


