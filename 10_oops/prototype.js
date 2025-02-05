// Prototype

let myHero = ["thor","flash"]

let heroPower = {
    thor:"hammer",
    flash:"light speed",

    getThorPower: function () {
        console.log(`Thor power:${this.thor}`);
    }
}

// Whenever property is given to any object, then it gets applied to all objects.

// Object.prototype.hitesh = function () {
//     console.log(`Hitesh is present at all objects.`);
// }

// heroPower.hitesh()
// myHero.hitesh()

// Whenever it is given to specific datatype i.e array,function, then it cannot be accessed by all objects.

// Array.prototype.hitesh = function () {
//     console.log(`Hey hitesh`)
// }

// myHero.hitesh()
// heroPower.hitesh() Error has occured heroPower.hitesh is not a function

// Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// Adding new functionality(method)

let username = "Dadadon    "

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`Length: ${this.trim().length}`);
}

username.trueLength()
"Neymar  ".trueLength()