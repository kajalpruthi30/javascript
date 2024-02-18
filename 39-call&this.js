// browser -> this -> window
// node -> this -> {}

function setUserName(username){
    this.username = username;
}

// call -> hold the reference
function createUser(username, password, email){
    setUserName.call(this, username);
    this.email = email;
    this.password = password;
}

const user = new createUser("Kajal", "123", "kajal@gmail.com");
console.log(user);


// Explanation :-
// 0. When setUserName is invoked, its execution context gets deleted along with the variables declared, one need to hold the same by holding its reference.
// 1. By passing this as the first argument to call(), you're setting the context (this) for the setUserName function to be the same as the context (this) in the createUser constructor. This ensures that any properties or methods assigned within setUserName are attached to the same object being constructed by createUser.
// 2. Without explicitly setting the context for the setUserName function call, this inside setUserName would refer to the global object (window in browsers, or {} in Node.js) instead of the user object being created by createUser.
// As a result, the username property would be assigned to the global object rather than the user object