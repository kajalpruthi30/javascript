//  Without using promise but still promise is returned explicitly
// await - pause the execution of a function until the promise is resolved


// 1. Using async and await
async function getAllUsers(){
    try{
        const response = await fetch("https://api.github.com/users/kajalpruthi30");
        const data = await response.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

getAllUsers();


// 2. By then and catch
fetch("https://api.github.com/users/kajalpruthi30")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})