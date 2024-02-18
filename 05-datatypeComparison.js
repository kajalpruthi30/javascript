console.log("1" > 2)
console.log("3" > 2)

// unpredictable behaviour
console.log(null > 0)
console.log(null < 0)
console.log(null == 0)
console.log(null === 0)
console.log(null >= 0)
console.log(null <= 0)

console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined == 0)
console.log(undefined === 0)
console.log(undefined >= 0)
console.log(undefined <= 0)


// === ; also checks the datatype as well

console.log("10" == 10) //string automatically converted into number
console.log("10" === 10)