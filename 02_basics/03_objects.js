// Object Literals

// Symbol datatype
const mySum = Symbol("key1")

const JSUser ={
    name:"Pavava",
    "fullname":"paavana nnanans",
    age:29,
    location:"Pune",
    email:"xyz@gmail.com",
    // Using symbol as a key in object
    [mySum]: "keys1"
}

// console.log(JSUser.name);
// console.log(JSUser.fullname);
// console.log(JSUser[mySum]);

// Change value from objects
// JSUser.email = "yz@gmail.com"
// console.log(JSUser);

// Avoid changes in object
// Object.freeze(JSUser)
// JSUser.email = "zxyz@gmail.com"
// console.log(JSUser);

// Add function to the object

JSUser.greetings = function(){
    console.log(`Hello ${JSUser.name}`);
}

console.log(JSUser.greetings());


