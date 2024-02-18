// Array -> Object -> null
// Function -> Object -> null
// String -> Object -> null

const heros = ["thor", "spiderman"];

const heroProperties = {
    thor : "hammer",
    spiderman : "sword",
}

const heroFunctions = function(){
    console.log("hero functions")
}

// This Object can be accessed by any array, function or string
Object.prototype.power = function(){
    console.log(`Super powers!`)
}

heros.power();
heroProperties.power();
heroFunctions.power();



// 2. For all the arrays specifically
Array.prototype.arrayPower = function(){
    console.log(`Array super powers!`)
}

heros.arrayPower();


//3. Wants to find the true length of a string

// Method - 1
let str1= "Kajal                ";
let str2= "Kajal Pruthi             ";

console.log(`The true length of a string: ${str1.trim().length}`);
console.log(`The true length of a string: ${str2.trim().length}`);


// Approach - 2
String.prototype.trueLength = function(){
    console.log(`The true length of a string via prototyping: ${this.trim().length}`);
}

str1.trueLength();
str2.trueLength();

