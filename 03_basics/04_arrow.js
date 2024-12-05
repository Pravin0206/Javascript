// const user = {

//     username:'hitesh',
//     place: 'pune',

//     userData:function (){
//         console.log(`${this.username}`);

//      Returns all the data inside the object
//         console.log(this);
           
//     }
// }

// user.userData()

// Returns empty object
// console.log(this);


// function date (){

//     user variables returns undefined value 
//     let user = "hitesh"
//     console.log(this.user)
// }

// date()

// Arrow function

// const chai = () => {
//     let username = 'hitesh'
//     console.log(this);
        
// }

// chai()

// Implicit return

// const chai = (num1,num2) => {
//     return num1 + num2
// }

// console.log(chai(3,4))

// const chai = (num1,num2) =>  num1 + num2
// OR
// const chai = (num1,num2) =>  (num1 + num2)

// Return object using implicit return

const chai = (num1,num2) =>  ({username:"hitesh"})

console.log(chai(3,4))