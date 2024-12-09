// If statement

// == => Loose Equality(Value should be same to get true)
// if (2 == "2") {
//     console.log("Executed");
    
// }

// // === => Strict Equality(Value and datatype should be same to get true)
// if (2 === "2") {
//     console.log("Executed");
    
// }

// const temp = 450

// if (temp === 40) {
//     console.log("Temperature less than 50");
    
// } else {
//     console.log("Temperature greater than 50");
    
// }

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`Use power: ${power}`);
    
// }

// console.log(`Use power: ${power}`);


// Shorthand Notation

// const val = 100
// if (val > 50) console.log("Executed");

// Not good Practice
// if (val > 50) console.log("Executed"),console.log("Executed 2");

// Else if() Statement

// const balance = 900;

// if (balance < 300) {
//     console.log("Balance less than 300");
// }
// else if (balance < 600) {
//     console.log("Balance less than 600");
// }
// else if (balance < 900) {
//     console.log("Balance less than 900");
// }
// else{
//     console.log("Balance greater than 900");
// }

// Using logical operators

// let userLoggedIn = true
// let userDebitCard = true

// Logical AND(&&)

// if(userLoggedIn && userDebitCard){
//     console.log("Can access bank ATM..");
    
// }

// Logical OR(||)

let userLoggedIn = true
let userDebitCard = false

if(userLoggedIn || userDebitCard){
    console.log("Can access bank details..");
    
}