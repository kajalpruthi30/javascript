/* Promise is an object representing the eventual completion or failure of an asynchronous operation - 3 states of promise 
1. pending 
2. fulfilled 
3. rejected  */


// 1. Promise Syntax - 1
const promise1 = new Promise(function (resolve, reject) {
    // do an async task or database call
    setTimeout(function () {
        console.log("Hello World");
        resolve();
    }, 2000);
})
promise1.then(function (){
    console.log("Promise 1 fulfilled");
})


// 2. Promise Syntax - 2
new Promise(function (resolve, reject) {
    // do an async task or database call
    setTimeout(function () {
        console.log("Hello World");
        resolve();
    }, 2000);
}).then(function (){
    console.log("Promise 2 fulfilled");
})


// 3. Promise Syntax - 3
const promise3 = new Promise(function (resolve, reject) {
    // do an async task or database call
    setTimeout(function () {
        resolve({username: "Kajal", email: "kajal@gmail.com"});
    }, 2000);
})
promise3.then(function (user){
    console.log(user);
})


// 4. Promise Syntax - 4
const promise4 = new Promise(function (resolve, reject) {
    // do an async task or database call
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({username: "Kajal", email: "kajal@gmail.com"}); 
        }else{
            reject("Something went wrong");
        }
    }, 2000);
})
promise4.then(function (user){
    console.log(user);
    return user.username;
})              //then chaining if value is returned
.then(function (username){
    console.log(username);
})
.catch(function (error){
    console.log(error);
})
.finally(function(){
    console.log("The promise is either resolved or rejected");
});



// 5. Promise Syntax - 5
const promise5 = new Promise(function (resolve, reject) {
    // do an async task or database call
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({username: "Kajal Pruthi", email: "kajalpruthi@gmail.com"}); 
        }else{
            reject("Error: Something went wrong");
        }
    }, 2000);
})
async function consumePromise5(){
    try{
        const response = await promise5;
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
}

consumePromise5();
