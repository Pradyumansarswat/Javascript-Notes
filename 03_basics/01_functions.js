
// function sayMyName (){
//     console.log("P");
//     console.log("r");
//     console.log("a");
//     console.log("d");
//     console.log("y");
//     console.log("u");
//     console.log("m");
//     console.log("a");
//     console.log("n");
// }
// sayMyName()


// first approach to write function

// function addTwoNumers(number1, number2){
//     console.log(number1 + number2)
// }

// second approach to write function

// function addTwoNumers(number1, number2){
//     let result = number1 + number2
//     console.log("first") // yeh print ho skta he kyoki yeh result se phle likha hua he
//     return result  
//     // result ke baad kuch bhi likha hua print nhi hoga 
// }


// third approach to write function

// function addTwoNumers(number1, number2) {
//     return number1 + number2
// }


// addTwoNumers(3, "4") // 34

// addTwoNumers(3, "a")  //3a

// addTwoNumers(3, null)  //3

// const result = addTwoNumers(3, 8)

// console.log("result: ", result)




// function loginUserMessage(username = "acp") {
//     if (!username) {
//         console.log("please enter a username")
//         return
//     }
//     return `${username} just loggedIn`
// }

// console.log(loginUserMessage("Pradyuman"))

// console.log(loginUserMessage("Pradyuman"))






function calculateCartPrice(val1, val2, ...num1) {

    return num1
}

// console.log(calculateCartPrice(2))  // 2

// console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
    username: "Pradyuman",
    price: 199
}

function handleobject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// console.log(handleobject(user))

// if we change price to prices or think of ant typo error then clg will show undefined for that typo error 

// handleobject({
//     username: "ACP",
//     price: 399
// })

// for arrays

const myNewArray = [200, 400, 600]

function returnSecondValue(getarray) {
return getarray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 1000]))