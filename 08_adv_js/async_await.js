// Promise 5

const prom5 = new Promise(function (resolve,reject){

    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Javascript",pass:"123"})
        }
        else{
            reject("JS error ocuured...")
        }
    },1000)

})

// Here instead of .then(), async await is used to consume promise

async function consumeProm5() {
    
    try {
        const resp = await prom5;
        console.log(resp);
    } catch (error) {
        console.log(error);
    }
}

consumeProm5()