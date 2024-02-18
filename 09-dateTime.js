let date = new Date()
console.log(date)
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toLocaleString())
console.log(typeof date)

let createdDate = new Date(2023, 8, 30)
console.log(createdDate.toString())

let newDate = new Date("09-30-2023")
console.log(newDate.toString())


//              TIME
console.log(date.getTime())
console.log(Date.now())    //in milliseconds
console.log(Date.now() / 1000)  //in seconds
console.log(Math.floor(Date.now() / 1000))  //in seconds


console.log(date.getDay())
console.log(date.getMonth() + 1)


console.log(date.toLocaleString('default', {
    weekday: "long"
}))