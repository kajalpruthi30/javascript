"use strict" // treat all JS code as newer version

// alert(3 + 3) // We are using nodejs, not browser


// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value/ holds no value
// undefined => variable is defined but value is not assigned
// symbol => unique

const id = Symbol('123')
const anotherId = Symbol('123')
console.table([id, anotherId])

const bigNum = 1234567890987654321n

// object

// typeof
console.table([typeof null, typeof undefined])