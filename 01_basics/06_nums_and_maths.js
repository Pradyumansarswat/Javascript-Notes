// const score = 400
// console.log(score)  //400

// const balance = new Number(100) 
// console.log(balance)                    // [Number: 100]
// console.log(balance.toString())         // 100 
// console.log(typeof balance.toString())  // string
// console.log(balance.toFixed(2))         // 100.00

// const otherNumber  =123.8678

// console.log(otherNumber.toPrecision(4))

// const hundreds = 1000000

// console.log(hundreds.toLocaleString('en-US')); // 1,000,000 (US format)
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 (Indian format)



// ++++++++++++++++++  maths ++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4)) // 4 minus will became positive adn positive remian positive

// console.log(Math.round(4.3)) // 4  take rounded value
// console.log(Math.ceil(4.3)) // 5  take next value
// console.log(Math.floor(4.3)) // 4 take lowest value 

// console.log(Math.min(4,3,6,8))  //3
// console.log(Math.max(4,3,6,8))  //8

console.log(Math.random())  // value takes from 0 to 1 only 
console.log(Math.random() * 10 + 1)
console.log((Math.random() * 10) + 1)

const min = 10
const max = 20


console.log(Math.floor(Math.random() * (max - min + 1)) + min)