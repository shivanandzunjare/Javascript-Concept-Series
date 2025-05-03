
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(10,12))

const myNums = [10,20,30,40,50,60,70]
const newNums = myNums.filter((num) => { 
    return num > 40  //filter --> to extract subset of ele based on condition
})
console.log(newNums)
