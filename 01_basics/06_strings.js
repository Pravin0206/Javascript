const name = "Pravin"
const count = 9

// console.log(name + count + "final");

// String Interpolation
// console.log(`Name: ${name} and Count:${count}`);

// Creating object of String

const game = new String("funny-game")
// console.log(game.__proto__);

// Methods of String

// console.log(game.length);
// console.log(game.toUpperCase());
// console.log(game.charAt(4));
// console.log(game.indexOf('u'));

// const newGame = game.substring(-8,4)
// console.log(newGame);

// const gameNew = game.slice(-4,4)
// console.log(gameNew);

// Game = "       Prin       "
// const nGame = Game.trim()
// console.log(nGame);

const mail = "hitesh%20sharma@gmail.com"
console.log(mail.replace('%20',"-"))

console.log(mail.includes("@"))

const game1 = "hitesh-hc-game"
console.log(game1.split('-'));
