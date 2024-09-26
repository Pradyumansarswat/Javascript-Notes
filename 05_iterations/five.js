const coding = ["js", "ruby", "java", "python", "cpp"]


// coding.forEach( function (Val){
//     console.log(Val)
// })


// coding.forEach(e => {
//     console.log(e)
// })


// function printMe(item) {
//     console.log(item)
// }

// coding.forEach(printMe)




// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr)
//  })

const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "python",
        languageFile: "py"

    },
    {
        languageName: "java",
        languageFile: "java"
    }
]


myCoding.forEach((item) => {
console.log(item.languageName)
})