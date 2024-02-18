const user = {
    username: "Kajal",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`)
    }
}

console.log(this) //check this out in console

const add = function(){
    // add
}

const sub = () => {
    // sum
    let name = "kajal";
    console.log(name)
    return {username: name}
}

console.log(sub())