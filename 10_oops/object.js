function multiply(num){
    return num * 5;
}

multiply.power = 2

// console.log(multiply(10));
// Being a function, it can also be treated as object.

// console.log(multiply.power);
// console.log(multiply.prototype);


function userDetails(name,cost){
    this.name = name;
    this.cost = cost;
}

// Creating own function inside functions

userDetails.prototype.increment = function () {
    this.cost++;
}

userDetails.prototype.print = function () {
    console.log(`Cost:${this.cost}`);
}

const chai = new userDetails("chai",25)
const coffee = new userDetails("coffee",100)

chai.print()