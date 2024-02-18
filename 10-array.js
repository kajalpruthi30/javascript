const arr = [1, 2, 3, 4, 5, 6]

// Array Methods
arr.push(7)     //in end
arr.pop()        
arr.unshift(9)   //in beginning
arr.shift()      
console.log(arr)

console.log(arr.includes(arr))
console.log(arr.indexOf(arr))


const newArr = new Array(1, 2, 3, 4, 5)

const arrr = arr.join()
console.log(arrr)
console.log(typeof arrr)

// slice and splice
let originalArr = [1, 2, 3, 4, 5]

let sliceArr = originalArr.slice(1, 3)
console.log(`Array: ${originalArr} Slice Array: ${sliceArr}`)

let spliceArr = originalArr.splice(1, 3)
console.log(`Array: ${originalArr} Slice Array: ${spliceArr}`)