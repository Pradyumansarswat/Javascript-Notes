// const tinderUser = new Object()   //singleton object 

const tinderUser = {}   // non singelton object

tinderUser.id = "123abc"
tinderUser.name = "ACP"
tinderUser.isLoggedIn = false



// console.log(tinderUser);


// const regularUser = {
//     email: "someone@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Pradyuman",
//             lastname: "sarswat"
//         }
//     }
// } 


// console.log(regularUser)  
// {email: 'someone@gmail.com',fullname: { userfullname: { firstname: 'Pradyuman', lastname: 'sarswat' } }}

// console.log(regularUser.email)  //someone@gmail.com

// console.log(regularUser.fullname)  //{ userfullname: { firstname: 'Pradyuman', lastname: 'sarswat' } }

// console.log(regularUser.fullname.userfullname)
//{ firstname: 'Pradyuman', lastname: 'sarswat' }

// console.log(regularUser.fullname.userfullname.firstname)

//Pradyuman

// console.log(regularUser.fullname.userfullname.lastname)

//sarswat




const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "d" }
const obj4 = { 4: "e", 5: "f" }

// const obj3 = {obj1, obj2}

// console.log(obj3)  
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'd' } }


// assign --> Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// const obj3 = Object.assign(obj1, obj2)

// const obj3 = Object.assign({}, obj1, obj2) // more efficient way
// console.log(obj3)

// const obj5 = Object.assign({}, obj1, obj2, obj4)

// console.log(obj5)


// spread operator 
// const obj3 = {...obj1, ...obj2}
// console.log(obj3)




const users = [
    {
        id: 1,
        email: "P@gmail.com",

    },
    {
        id: 2,
        email: "P@gmail.com",

    },
    {
        id: 3,
        email: "P@gmail.com",

    }
]

// users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser)) //importent topic 
// console.log(Object.values(tinderUser)) //importent topic 
// console.log(Object.entries(tinderUser)) 

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))




// object de-struture 

const course = {
    coursename: "javascript in hindi",
    price: "999",
    courceInstructor: "Hitesh"
}
// course.courceInstructor   // normal way of destructuing 

const { courceInstructor } = course  // industry approach
console.log(courceInstructor);


// we can change access name of object in object destructuring  like here i changed courceinstructor name to sir in short form

// const {courceInstructor: sir} = course
// console.log(sir)



// const navbar = ({company}) => {

// }
// navbar(company = "pradyuman")



// JSON API intro


// {
//     name: "Pradyuman",
//     courcename: "javascript in hindi",
//     price: "999"
// }

//  api in array format
// [
//     {},
//     {},
//     {}
// ]

// online tools for understanding json api is jsonformatter