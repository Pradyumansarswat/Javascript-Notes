//JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly


// # primitive

// 7 types : string : number : boolean : null : undefined : symbol : bigint (big intiger) 

// const score =100
// const scoreValue = 100.3

// const isLoggedIn =false
// const outsideTemp = null
// let userEmail ;

// const id  = Symbol("123")
// const anotherid = Symbol('123')

// console.log(id)
// console.log(anotherid)
// console.log(id === anotherid)


// const bigNumber = 490420957902456562698n
// console.log(bigNumber)

// Refrence (Non primitive) 

// Array : Objects : Functions

// const heros = ["shaktiman", "naagraj", "doga"]

// let myself ={
//     name: "pradyuman",
//     age: 23,

// }

// const myFunction =function(){
// console.log("hello world")
// }
// myFunction()


// console.log(typeof myFunction)  //function

// console.log(typeof bigNumber) // undefined

// console.log(typeof outsideTemp)
// console.log( typeof scoreValue)

// visit this website 

// https://262.ecma-international.org/5.1/#sec-11.4.3


// typeof Operator Results
// Type of val	                                            Result
// Undefined	                                          "undefined"
// Null	                                                    "object"
// Boolean	                                                "boolean"
// Number	                                                 "number"
// String	                                                "string"
// Object (native and does not implement [[Call]])	        "object"
// Object (native or host and does implement [[Call]])	   "function"
// Object (host and does not implement [[Call]])	===>>>       Implementation-defined except may not be "undefined",            "boolean","number", or "string".







// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// two types of memroy in js

//1  stack memory (primitive )
//2  head memory( non-primitive)

// let myname = "pradyumanSarswat"

// let anothername = myname

// anothername = "pradyuman"

// console.log(myname)
// console.log(anothername)

// let user1 = {
//     email: "pradyuman@gmail.com",
//     upi: "pradyuman@ybl"
// }

// let user2 = user1


// console.log(user1)
// console.log(user2)


// user2.email = "sarswat@gmail.com"

// console.log(user1.email)
// console.log(user2.email)


