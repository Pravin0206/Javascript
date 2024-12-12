// For Each loop


const arr = ["js","python","java","cpp"]

// Normal function format

// arr.forEach( function (val){

//     console.log(val);
    

// })

// Using arrow function

// arr.forEach((item) => {

//     console.log(item);
    

// })

// Give reference of external function to callback function

// function print(item){
//     console.log(item);
    
// }

// arr.forEach(print)

// Some more parameters

// arr.forEach((item,index,arr) => {

//     console.log(item,index,arr);
            
// })

// When we have array of objects

const array =[
    {
        languageName:"Python",
        languageFileName:"py"
    },
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"C++",
        languageFileName:"cpp"
    }
    
]

array.forEach( (item) => {

    console.log(item.languageName);
    
})