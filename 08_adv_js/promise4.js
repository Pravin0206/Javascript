// Promise 4

const prom4 = new Promise(function (resolve,reject){

    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Pravin",pass:"123"})
        }
        else{
            reject("Error ocuured...")
        }
    },1000)

})

prom4
.then((user) => {
    console.log(user);
    return user.username;
    // When we retunr any value from then it is catched by another then...
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Promise is either resolved or rejected...");
})


