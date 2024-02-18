class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toLowerCase()
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value;
    }
}

const user1 = new User("Kajal", "kAJalpruthi7817@gmail.com", "abc");
console.log(user1.password);
console.log(user1.email);

// name of getters and setters are same as that of property in constructor


// Earlier before class how to use getters and setters

function Users(username , email, password){
    this._username = username;
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'username', {
        get: function(){
            return this._username.toUpperCase();
        },
        set: function(value){
            this._username = value;
        }
    })
}

const userOld = new Users("Kajal", "kajalpruthi@gmail.com", "231");
console.log(userOld.username);