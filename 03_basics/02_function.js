// // REST operator

// function itemsInCart(...items) {

//     return items
    
// }

// console.log(itemsInCart(10,20,20,30))

// // Pass object inside a function

// const obj = {

//     name:"abc",
//     age:15
// }

// function handleObject(anyobj) {

//     console.log(`My name is ${anyobj.name} and I am ${anyobj.age} years old.`);
        
// }

// // handleObject(obj)
// handleObject({
//         name:"abc",
//         age:15
//     })

// //   Passing array inside a function

// const arr = [10,20,30,40,50]

function returnArr(Arr) {
    return Arr[1]
}

// console.log(returnArr(arr));
console.log(returnArr([10,20,30,40,50]))
