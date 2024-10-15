// const user = {
//     username: "Pradyuman",
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function(){
//         // console.log("got user details from database")
//         console.log(`UserName: ${this.username}`)
//         console.log(this)
//     }

// }

// console.log(user.username)
// console.log(user.getUserDetails())

// console.log(this)





// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isloggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn

    this.greeting = function () {
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne = new User("pradyuman", 12, true)
const userTwo = new User("sarswat", 11, false)
// console.log(userOne);
console.log(userOne.constructor);

// console.log(userTwo);