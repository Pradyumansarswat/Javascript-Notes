// { }// scope curly braces // block scope
// var global scope
// let or const block scope



// var c = 300

// let a = 300

// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
//     // console.log("inner ", a)
// }


// console.log(a);
// console.log(b);
// console.log(c);

// function one() {
//     const username = "Pradyuman"

//     function two() {
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);

//     two()
// }
// one()



// using if else 

if (true) {
    const username = "Pradyuman"
    if (username === "Pradyuman") {
        const website = "youtube"
        // console.log(username + website)
    }
    // console.log(website)
    // console.log(username)
}

// console.log(username)


//++++++++++++++++++++++intersting +++++++++++++++++++++
// we can declare this type of function before initialization 
console.log(addone(5))

function addone (num){
return num +1

}

// we can not declare this type of function before initialization

console.log(addTwo(5))
const addTwo= function(num){
return num + 2
}
