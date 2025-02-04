// Object Literal\

const user = {
    userName : "Hites",
    id : 12,
    salary : 7000,

    getUserDetails : function () {
        console.log(this.userName);
        console.log(this);
    }

}

console.log(user.getUserDetails());
