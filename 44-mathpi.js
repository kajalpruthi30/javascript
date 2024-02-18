// Math.PI = 123;
// console.log(Math.PI);
// Not able to update the value of Math.pi

const descripter =  Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);
// writable is false here


Object.defineProperty(Math, "PI", {
    writable: true,
    enumerable: true,
    configurable: true
})
console.log(descripter);

// However, since Math.PI is a constant, this change won't have any effect. 
// Constants in JavaScript, like Math.PI, are non-configurable properties by default, can't change their descriptors.


const obj = {
    name: 'Jane',
    email: 'kajalpruthi7817@gmail.com'
};

console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

Object.defineProperty(obj, 'name', {
    writable: false,
    enumerable: false
})
// Not able to change the name as writable is false here
obj.name = 'Kajal';
console.log(obj.name)