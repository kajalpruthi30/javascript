const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. filter - It returns a value

const newNums1 = nums.filter((num) => num > 5)
console.log(newNums1)

const newNums2 = nums.filter((num) =>{
    return num > 5
} )
console.log(newNums2)

// *** Doing the same with forEach, it do not returns a value ***
const forEachNums = []
nums.forEach((num) => {
    if (num > 5) {
        forEachNums.push(num)
    }
});
console.log(forEachNums)

// *** Doing the same with map, it returns a complete array in every case ***
const newNums3 = nums.map((num) => num > 5)
console.log(newNums3)


const books = [
    { title: "Book 1", genre: "Fiction", publish: 2005 },
    { title: "Book 2", genre: "Thriller", publish: 1998 },
    { title: "Book 3", genre: "Science Fiction", publish: 2012 },
    { title: "Book 4", genre: "Fantasy", publish: 2001 },
    { title: "Book 5", genre: "Romance", publish: 1995 },
    { title: "Book 6", genre: "Mystery", publish: 2019 },
    { title: "Book 7", genre: "Horror", publish: 2008 },
    { title: "Book 8", genre: "Non-fiction", publish: 2015 },
    { title: "Book 9", genre: "Thriller", publish: 1992 },
    { title: "Book 10", genre: "Fantasy", publish: 2003 }
];
const userBooks = books.filter(book => book.genre === "Fantasy" && book.publish === 2001);
console.log(userBooks);


// 2. MAP
// map chaining
const numsMap = nums.map(num => num * 10).map(num => num + 1).filter(num => num > 40)
console.log(numsMap);



// 3. Reduce

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((acc, curr) => {
    console.log("Accumulator: " + acc + "  Current Value: " + curr);
    return acc + curr;
}, 0);
console.log("Sum of elements using reduce: ", sum);

const shoppingCart = [
    { name: "Milk", price: 2.99 },
    { name: "Bread", price: 1.99 },
    { name: "Eggs", price: 3.49 },
    { name: "Apples", price: 0.99 },
    { name: "Bananas", price: 1.49 }
];

const bill = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(bill)