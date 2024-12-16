// With the help of for each loop, items cannot be returned one by one.

// const arr = ["js","python","java","cpp"]

// const out = arr.forEach( (items) => {

//     // console.log(items)
//     return items
// })

// console.log(out);


// To access each element in an array, we use .filter() method

// const num = [1,2,3,4,5,6,7,8,9,10]

// const newNums = num.filter( (items) => items > 4)
// console.log(newNums);

// When scope is given in arrow function, we need to use return keyword.

// const newNums = num.filter( (items) => {
    
//     return items > 4

// })
// console.log(newNums);

// Above code logic using for Each loop 

// const num = [1,2,3,4,5,6,7,8,9,10]

// const newNums = []

// num.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const book = books.filter( (bk) => bk.genre === "History")
  console.log(book);
  