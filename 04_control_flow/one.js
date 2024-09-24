// if

// if (true) {
// code execute hoga condition true hone par
// }

// if (false) {
// code execute nhi hoga 
// }


// const isUserLoggedIn = true

// if (isUserLoggedIn) {

// }



// < , > , <=, ==, != , === , !== ,  


// if (2 == '2') {
//     console.log("excuted")

// } 
// excuted

// if (2 === '2') {
// console.log("first")    
// }

// this one is not excuted cause of strict checking of ===

// const temperature = 40

// if (temperature === 41) {
//     console.log("less than 50")
// } else {
//  console.log("temperature is greater than 50")   
// }
// console.log("excuted")




// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);




// const balance = 1000

// if (balance > 500)console.log("test") // implicit scope it excute olyin one line

// if (balance < 500) {
//     console.log("less than 500")
// } else if (balance < 750) {
//     console.log("less than 750")
// } else if (balance < 900) {
//     console.log("less than 900")
// } else {
//     console.log("less than 1200")
// }





const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// && me ek hi statement false honepar code run nhi hoga 

// if (userLoggedIn && debitCard &&  2==3) {
//     console.log("allow to buy cources");
    
// }

if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log("user logged in")
}

