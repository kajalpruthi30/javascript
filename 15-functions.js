function sayMyName(){
    console.log('K');
    console.log('A');
    console.log('J');
    console.log('A');
    console.log('L');
}

sayMyName    //function reference
sayMyName();   //function execution


// values passed in function definition - parameters
// values passed in function call - arguments



// *************      Function with objects       ***************

const user = {
    name : "Kajal",
    id : "12345"
}

function handleObject(obj){
    console.log(`I'm ${obj.name} with id as ${obj.id}`)
}

handleObject(user)


//  *************      Function with Array       ***************

const arr = [10, 20, 30]

function handleArray(arr){
    console.log(`Number is ${arr[1]}`)
}

handleArray(arr)