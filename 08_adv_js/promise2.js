// Promise 2

// new Promise(function (resolve,reject){

//     setTimeout(function (){
//         console.log("Async 2 of promise 2");
//         resolve()
//     },1000)

// }).then(function (){
//     console.log("Promise 2 Consumed");
    
// })


// Taking data from promise to then keyword

const prom3 = new Promise(function(resolve,reject){
    setTimeout(function () {
        resolve("Pravin")
    },1000)
})

prom3.then(function (user){
    console.log(user);
})

