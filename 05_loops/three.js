// for...of loop

// const arr = [1,2,3,4,5] 

// for (const val of arr) {
//     console.log(val);
        
// }

// For...of loop for Strings

// const naam = "Pravin"

// for (const val of naam) {
//     console.log(val);
    
// }

// Maps

const map = new Map()

map.set("IN","India")
map.set("FR","France")

// console.log(map);

// Print entire value
// for (const key of map) {
//     console.log(key);
    
// }

// For values separately
for (const [key,value] of map) {
    console.log(key + " :- " +value);
    
}

// Note: for..of loop is not used to iterate through objects.