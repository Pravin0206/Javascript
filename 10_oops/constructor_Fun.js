// Constructor function

function User(name,id,salary) {
    this.name = name;
    this.id = id;
    this.salary = salary

}

const userOne = new User("xyz",12,70000);
// If new keyword is not used,then userOne data is overwritten by userTwo data
const userTwo = new User("abc",11,10000);
console.log(userOne);
console.log(userTwo);

// Using .constructor => Tells data about constructor
console.log(userOne.constructor);

// instanceof => The return value is a boolean value. 
console.log(userOne instanceof User);
console.log(userOne instanceof Object);

