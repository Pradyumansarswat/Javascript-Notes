
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

function addTwoNumers(number1, number2) {
   return number1 + number2
}


// addTwoNumers(3, "4") // 34

// addTwoNumers(3, "a")  //3a

// addTwoNumers(3, null)  //3

const result = addTwoNumers(3, 8)

// console.log("result: ", result)




function loginUserMessage (username = "acp"){
    if(!username){
        console.log("please enter a username")
        return
    }
 return `${username} just loggedIn`
}

// console.log(loginUserMessage("Pradyuman"))

console.log(loginUserMessage("Pradyuman"))

