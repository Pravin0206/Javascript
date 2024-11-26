// function name() {
//     console.log("P");
//     console.log("R");
//     console.log("A");
//     console.log("V");
//     console.log("I");
//     console.log("N");
// }

// name()

// Function
// function add(num1,num2){

//     console.log(num1+num2)
// }

// add(3,5)

// Function with return keyword

// function add(num1,num2){

//     return num1 + num2
// }

// const result = add(3,5)
// console.log(result);

// function userJustLoggedIn(username){

//     return `${username} just logged in...`

// }

// console.log(userJustLoggedIn("Pravin"));

// Passing Default values
function userJustLoggedIn(username = "xyz"){

    return `${username} just logged in...`

}

console.log(userJustLoggedIn());