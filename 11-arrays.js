const arr1 = ["kajal" ,"arora"]
const arr2 = ["sonali", 123]

arr1.push(arr2)
console.log(arr1)
console.log(arr1[2][0])

const concatedArr = arr1.concat(arr2)

const all = [...arr1, ...arr2]
console.log(all)

const multiArr = [1, 2, [1, 2, [3], [4, 6, 7]]]
console.log(multiArr.flat(Infinity))

console.log(Array.isArray(arr1))
console.log(Array.from("kajal"))
console.log(Array.from({name: "kajal"}))        //[], have not mentioned whether from values or from keys
console.log(Array.of("kajal"))
