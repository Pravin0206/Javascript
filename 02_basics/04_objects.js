// Singleton Object

const user = new Object

user.name = "Xyz"
user.age = 38
user.location = "Pune"

const regularUser = {
    email : "zyz@gmail.com",
    fullname: {
        username:{
            firstname:"xyz",
            lastname:"abc"
        }
    }
}

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// It returns nested object and not combined object
// const obj3 = {obj1,obj2}
// console.log(obj3)

// Object.assign() operator

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)

// Using spread(...) operator

// const obj3 = {...obj1,...obj2}
// console.log(obj3)


console.log(user);

// Returns only key values from object
console.log(Object.keys(user));

// Returns only values from object
console.log(Object.values(user));

// Convert key-value pair of object in arrays
console.log(Object.entries(user));

// Check whether particular property is present or not
console.log(user.hasOwnProperty("nam"));
