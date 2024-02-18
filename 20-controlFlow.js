//  = assignment operator
//  == comparison operator
//  === comparison operator with type check

if(2 == '2'){
    // Yes
    console.log("Yes")
}

if(2 === '2'){
    // No
    console.log("No")
}

const userEmail = "";

if(userEmail){
    console.log("Email exist")
}
else{
    console.log("Email not exist")
}

// falsy values
false, 0, -0, BigInt, 0n, "", null, undefined, NaN;

// truthy values
"0", 'false', " ", [], {}, function(){}

// To find that array is empty - use its length
// To find that object is empty - Object.keys(givenObj).length


// Nullish Coalescing Operator (??): null undefined
let val1 = 1 ?? 10;
let val2 = null ?? 5;
let val3 = undefined ?? 5;
let val4 = undefined ?? null;

console.log(val1, val2, val3, val4)
// ?? this will take first value is there's neither null nor undefined