// High Order Array Loops

// 1. for of - array(values) & maps
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`) 
}


// Map is same as objects but it contains unique values
// Maps are iterable using for of but objects using for if

const map = new Map()
map.set('city', 'Hisar');
map.set('State', 'Haryana');
map.set('Country', 'India');
map.set('city', 'Hisar');

console.log(map);

for(const val of map){
    console.log(val);
}

// Map can be iterable using for of
for(const [key, val] of map){
    console.log(`${key} = ${val}`);
}



// 2. for in   - array(keys) & object

for (const num of arr) {
    console.log(num[arr]);
}

const obj = {
    id: "1234",
    name: "Kajal"
}

for (const key in obj) {
    console.log(`${key} - ${obj[key]}`);
}


// 3. forEach - It nevers returns a value

const coding = ['js', 'python', 'C++', 'java'];

coding.forEach(function(lang){
    console.log(lang);
});

coding.forEach((lang) => {
    console.log(lang);
});

coding.forEach((item, index, coding) => {
    console.log(item, index, arr);
});

const data = [
    {
        id: 1,
        name: "Kajal"
    },
    {
        id: 2,
        name: "Komal"
    },
    {
        id: 3,
        name: "Sonali"
    }
]

data.forEach((item) => {
    console.log(`${item.id} - ${item.name}`);
});
