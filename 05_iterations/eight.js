const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currentValue) {
//     console.log(`acc: ${acc} and currentValue : ${currentValue}`)
//     return acc + currentValue
// }, 0)


// const myTotal = myNums.reduce((acc, currentValue) => acc + currentValue, 0)

// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data course",
        price: 12999
    },
]


// console.log(shoppingCart)


const priceToPay =shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay)