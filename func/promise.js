const myPromise = new Promise((resolve, reject) => {
    const foodIsReady = true;
    if(foodIsReady){
        resolve("Here is your food")
    } else {
        reject("We out of ingredient")
    }
});

myPromise
.then((message) => {
    console.log("Success", message)
})
.catch((error) => {
    console.log("error", error)
})