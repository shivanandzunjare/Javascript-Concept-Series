const myNums=[1,2,3,4]

const myTotal = myNums.reduce ( (acc, currval) => {
    console.log(`acc: ${acc} & currval: ${currval}`);
    return acc + currval
    
}, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js",
        price :2999
    },
    {
        itemName : "java",
        price :5999
    },
    {
        
        itemName : "Data science",
        price :12999
    }

]

const priceToPay = shoppingCart.reduce( (acc, item) => {
    console.log(`acc: ${acc} and item ${item.price}` )
    return acc + item.price
}, 0)
console.log(priceToPay);
