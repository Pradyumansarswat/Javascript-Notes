const marvel_Heros = ["thor", "ironman", "spiderman"]
const dc_Heros = ["superman", "flash", "batman"]


// push --> Appends new elements to the end of an array, and returns the new length of the array.


// marvel_Heros.push(dc_Heros)

// console.log(marvel_Heros)

// return this [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_Heros[3][1]); // flash 

// concat ->> Combines two or more arrays. This method returns a new array without modifying any existing arrays. Additional arrays and/or items to add to the end of the array.

// marvel_Heros.concat(dc_Heros)

// console.log(marvel_Heros.concat(dc_Heros))
// const all_heros = marvel_Heros.concat(dc_Heros)

// console.log(all_heros)

// return this -> [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]



// const all_new_heros = [...marvel_Heros, ...dc_Heros]

// console.log(all_new_heros)





// const anotehr_array = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]]

// const real_another_array = anotehr_array.flat(Infinity)
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth


// console.log(real_another_array)





// console.log(Array.isArray("Pradyuman")) //false 
// console.log(Array.from("Pradyuman"))     // convert into array 
// ['P', 'r', 'a','d', 'y', 'u','m', 'a', 'n']

// console.log(Array.from({name: "Pradyuman"}))  // interesting answer // []


let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of)  //Returns a new array from a set of elements.


console.log(Array.of(score1, score2, score3))