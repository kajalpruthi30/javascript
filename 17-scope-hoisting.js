function one() {

    const username = "Kajal";

    function two() {
        const website = "netflix.com";
        console.log(username);
    }
        // console.log(website);

    two();
}

one();


if (true) {
    const username = "Kajal";
    if(username === "Kajal"){
        const website = "netflix.com";
        console.log(username);
    }
    // console.log(website);
}

// console.log(username);



// this will work
console.log(addOne(5));
function addOne(num){
    return num + 1;
}

// this will not work
console.log(addTwo(5));
const addTwo = function(num){
    return num + 2;
}