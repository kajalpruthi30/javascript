const score = 400

const balance = new Number(100.89)
console.log(typeof balance)


console.log(balance.toString().length)
console.log(balance.toFixed(1))

const num = 1234.6789
console.log(num.toPrecision(4))

const hundreds = 10000000
console.log(hundreds.toLocaleString())



//                              MATHS
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.max(5, 10, -2))
console.log(Math.min(5, 10, -1))

// value of math.random() is in between 0 and 1
console.log(Math.random())
console.log((Math.random() * 10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)