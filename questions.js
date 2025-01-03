// write a function that returns he reverse of a string 

// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i]
//     }
//     return reversed;
// }
// console.log(reverseString('Hello, Pradyuman'));

//output => namuydarP ,olleH

// another way 

// function reverseString(str) {

//     return str.split('').reverse().join('')
// }
// console.log(reverseString('Hello, Pradyuman'));




// write a function that returns the longest word in the sentence 

// function findLongestWord(str) {
//     const words = str.split(" ");
//     let longest = '';
//     for (let word of words) {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     }
//     return longest
// }
// console.log(findLongestWord('javascript is a programming language'));

// output  => 'programming



// write a function that checks whether a giving string is a palindrome or not 
// readt from front or backword both should be 

// function ispalindrome(str) {
//     const reversed = str.split('').reverse().join('')

//       return reversed == str
// }
// console.log(ispalindrome('racecar'));

// output true 


// write a function that checks whether two strings are anagrams or not 

// function areAnagrams(str1, str2) {
//     const sortedstr1 = str1.split('').sort().join('')
//     const sortedstr2 = str2.split('').sort().join('')

//     return sortedstr1 == sortedstr2

// }
// console.log(areAnagrams('listen', 'silent'))

// output true 



// write a function that returns the number of vowels in a String


// function vowelCount(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];

//     let count = 0;
//     for (let char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count
// }
// console.log(vowelCount('Hello, Pradyuman'))

// output => 5

// another methode

// function vowelCount(str) {
//     const arr = str.split("").filter((char) => {
//         return 'aeiou'.includes(char)
//     })
//     return arr.length
// }
// console.log(vowelCount('Hello, Pradyuman'))
// 5



// write a function to remove duplicate items from an array 

// function removeDuplicates(arr) {
//     const uniqueItems = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (uniqueItems.indexOf(arr[i]) === -1) {
//             uniqueItems.push(arr[i])
//         }
//     }
//     return uniqueItems;
// }
// console.log(removeDuplicates([1, 2, 3, 4, 5, 4, 3, 6]))

// output => [ 1, 2, 3, 4, 5, 6 ]

// another methode 

// function removeDuplicates(arr) {
//     return [...new Set(arr)]
// }
// console.log(removeDuplicates([1, 2, 3, 4, 5, 4, 3, 6]))





// write a function to find the largest number in a array


// function largestNumber(arr) {
//     let largest = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i]
//         }
//     }
//     return largest

// }
// console.log(largestNumber([1, 2, 3, 4, 5, 6, 9, 8]))

// output 9



// write a function to check if a given number is prime or not

// function isPrimeNumber(num) {
//     if (num === 1) {
//         return false
//     }
//     for (let i = 2; i <= num / 2; i++) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrimeNumber(7)); // true
// console.log(isPrimeNumber(10)); // false




// write a function to calculate the factorial of a number

// function factorial(num) {

//     if (num === 0) {
//         return 1
//     }
//     let factorial = 1
//     for (let i = 1; i <= num; i++) {
//         factorial *= i
//     }
//     return factorial
// }


// console.log(factorial(5)) // 120
// console.log(factorial(9)) // 362880



// write a  function to calculate the sum of all numbers in an array

function sumArray(arr) {

    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
console.log(sumArray([1, 2, 4, 5, 6])) // 18

// another methode

function sumArray(arr) {
    return arr.reduce((total, num) => total + num)
}
console.log(sumArray([1, 2, 4, 5, 8, 9, 6])) // 35