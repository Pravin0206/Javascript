const marvel = ["ironman","thor","spidey"]
const dc = ["superman","batman","flash"]

// When array is pushed inside an array, it creates nested array.
// marvel.push(dc)
// console.log(marvel);

// Concat method

// const allheros = marvel.concat(dc)
// console.log(allheros);

// Spread (...) operator
// const allheros = [...marvel,...dc]
// console.log(allheros);

// const arr = [1,2,[3,4,5],6,7,[8,9,10]]
// const n_arr = arr.flat(Infinity)
// console.log(n_arr);

// Is Array Operator => Checks whether is array or not
// console.log(Array.isArray(marvel));

// from() operator
// console.log(Array.from("Hitesh"));

// In case of object, from returns an empty array. We need to specify whether array should be made of keys or values.
// console.log(Array.from({name:"hitesh"}));

// of() operator

const val1 = 100
const val2 = 200
const val3 = 300

console.log(Array.of(val1,val2,val3));


