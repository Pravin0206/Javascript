// async function allUsers(){
//     // fetch() returns value in promise type
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         // response.json() takes time to convert, so it needs to await....
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//        console.log("E:",error);
        
//     }
    
// }

// allUsers()

// Using .then() and catch()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));
