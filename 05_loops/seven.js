// Map keyword

// const num = [1,2,3,4,5,6,7,8,9,10]

// const newNum = num.map( (num) => num + 10)
// console.log(newNum);

// Using Scope{ }
// const newNum = num.map( (num) => {return num + 10})
// console.log(newNum);

// Chaining => Using multiple methods at same time

const num = [1,2,3,4,5,6,7,8,9,10]

const newNum = num.map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)
console.log(newNum);

