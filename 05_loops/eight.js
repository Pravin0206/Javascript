// reduce method 

const num = [1,2,3,4,5,6,7,8,9,10]

// Using normal function
// const total = num.reduce(function(acc,curval){
//     console.log(`${acc}  ${curval}`);
    
//     return acc + curval
// },45)

// console.log(total);

// USing arrow function

const total = num.reduce( (acc,curval) => acc + curval,0)

console.log(total);
