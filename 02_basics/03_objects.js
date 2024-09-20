// singelton
// Object.create



// object literals

const mysym = Symbol("key1")

const jsUser = {
    name: "Pradyuman",
    "full name": "Pradyuman Sarswat",
    mysym: "mykey1",
    [mysym]: "mykey1",
    age: 23,
    location: "Jaipur",
    email: "Pradyuman@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.location)


// console.log(jsUser["email"])

// console.log(jsUser["full name"])

// console.log(typeof jsUser.mysym) //string

// console.log( jsUser.mysym)
// console.log( jsUser[mysym])



// jsUser.email = "PradyumanSarswat@gmail.com"

// Object.freeze(jsUser)

// jsUser.email = "Sarswat@gmail.com"
// console.log(jsUser)


jsUser.greeting = function () {
console.log("Hello javascript learner")
}

jsUser.greeting2 = function () {
console.log(`Hello javascript learner   __________ , ${jsUser.name}`)

}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
