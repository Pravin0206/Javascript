// Falsy Values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values => Rest all are truthy values

// some surprising Truthy values => "0", "false", " ", [], {}, function () {}

// Some IMP values to remember

// false == 0 => true
// false == '' => true
// 0 == '' => true

// const email = "hit@email.com" => Email entered
// const email = "" => Email not entered.
// const email = [] => Email entered.


// if(email){
//     console.log("Email entered.");
// }
// else{
//     console.log("Email not entered.");
// }

// Check whether array is empty or not

const arr = []

if(arr.length === 0){
    console.log("It is empty array.");
    
}

const obj = {}

if(Object.keys(obj).length === 0){
    console.log("It is empty object."); 
}


