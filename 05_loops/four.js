// For-in lopp for objects

// const myObj = {

//     js:"javascript",
//     py:"python",
//     cpp:"C++"
// }

// for (const key in myObj) {
//     // Value of key only
//     // console.log(key);

//     // Gives only value
//     // console.log(myObj[key]);

//     console.log(`${key} is shortcut for ${myObj[key]}`);
    
    
// }


// for-in loop for arrays

const arr = ["python","cpp","java"]

for (const key in arr) {
    // Prints index of array values
    // console.log(key)

    // Prints value from array
    // console.log(arr[key])
}

const map = new Map()

map.set("IN","India")
map.set("FR","France")

for(const key in map){
    console.log(key)
}