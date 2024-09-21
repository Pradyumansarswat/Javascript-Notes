// const user = {
//     username: "Pradyuman",
//     price: 999,

//     welcomeMessage: function () {
//         console.log(`${this.username} , wecome to website`)
//         console.log(this)
//     }
// }

// user.welcomeMessage()
// user.username = "sarswat"
// user.welcomeMessage()


// console.log(this);

// function coffee(){
//     let username = "pradyuman"
//     console.log(this.username);
// }
// coffee()




// const coffee = function (){
//     let username = "pradyuman"
//     console.log(this.username);
// }

// const coffee = () => {
//     let username = "pradyuman"
//     console.log(this);
// }

// coffee()




//  basic syntex of arrow function
// const functionname =(parameters)=>{
//    }

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))



// implicit return  one line 

// const addTwo = (num1, num2) =>  num1 + num2
 // if we use curly braces {} then we have to use return statement otherwise we can use () so that we don't have to use curly braces

// const addTwo = (num1, num2) =>  (num1 + num2)

// const addTwo = (num1, num2) => {username: "pradyuman"} // undefined
 // object ko return karne ke liye usko paranthesis(  ) me rap karna ki parega

const addTwo = (num1, num2) =>  ({username: "pradyuman"}) // { username: 'pradyuman' }z


console.log(addTwo(3,4))



const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()