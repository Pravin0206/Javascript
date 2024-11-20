const arr = [1,2,3,4,5,6,7,8]
// console.log(arr);

// Methods of array

// Adds element to the array
// arr.push(6)
// console.log(arr);

// Removes last element from array
// arr.pop()
// console.log(arr);

// Adds element at index 0 and shifts to the right side by 1 index value
// arr.unshift(9)
// console.log(arr)

// Removes element at index 0 and shifts to the left side by 1 index value
// arr.shift()
// console.log(arr);

// Converts array into string value separated by comma(,)
// const newArr = arr.join()
// console.log(arr);
// console.log(newArr);


// Slice operation

console.log("A:- " + arr)

const newArr = arr.slice(1,3)
console.log(newArr);
console.log("B:- " + arr)

// Splice Operation

const newArr1 = arr.splice(1,3)
console.log(newArr1);
console.log("c:- " + arr)

