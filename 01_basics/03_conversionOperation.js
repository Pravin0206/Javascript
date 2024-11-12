let num = null

let valInNumber = Number(num)
console.log(valInNumber);

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1 / false => 0

let isLoggedIn = undefined

let booleanisLoggedIn = Boolean(isLoggedIn)

console.log(booleanisLoggedIn);

// 1 => true / 0 => false
// "" => false
// "abc" => true
// null => false
// undefined => false

let score = undefined

let stringScore = String(score)

console.log(typeof stringScore);
console.log(stringScore);

