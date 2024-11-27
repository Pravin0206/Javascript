// // Global Scope

// let num = 10

// // Local Scope

// if (num>10) {
    
// }

// // Nested Scope


// function one() {

//     const name ="xyz"

//     function two(){

//         const website = "youtube"
//         console.log(name);
        
//     }

//     // console.log(website);
    
//     two()
    
// }

// one()

// Hoisting

console.log(addOne(5));
function addOne(num){
    return num+1;
}


// It will give error for expression when function is called before declaration.

// console.log(addTwo(5));
const addTwo = function(num){
    return num+2;
}
console.log(addTwo(5));