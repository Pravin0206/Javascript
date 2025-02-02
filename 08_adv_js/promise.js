// Promise 1

const prom1 = new Promise(function (resolve,reject){

    setTimeout(function () {
        console.log("Async task 1");
        resolve()
    },1000)
})

prom1.then(function(){
    console.log("Promise consumed");
    
})
