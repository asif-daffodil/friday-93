const myArr = `[
    {"name": "John", "age": 30},
    {"name": "Jane", "age": 25},
    {"name": "Bob", "age": 35}
]`;

// console.log(typeof myArr);
const parsedArr = JSON.parse(myArr);
// console.log(typeof parsedArr);
// console.log(parsedArr);

parsedArr.forEach(e => {
    console.log(`Name: ${e.name}, Age: ${e.age}`);
});