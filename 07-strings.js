// ***** METHOD - 1
let name = "kajal"
const age = 21

// string literals
console.log(`My name is ${name} and age is ${age}`);

console.log(name.length)
console.log(name.charAt(2))
console.log(name.indexOf('j'))
console.log(name.toUpperCase())      
console.log(name.substring(0,3))
console.log(name.slice(0,3))

name = "     kajal      "
console.log(name)
console.log(name.trim())

const url = "https://kajal.com/kajal%20pruthi"
console.log(url.replace('%20', '-'))
console.log(url.includes('kajal'))
console.log(url.split('/'))



// ******   METHOD - 2 ******
const newName = new String("Kajal Pruthi")
console.log(typeof newName)     //object


