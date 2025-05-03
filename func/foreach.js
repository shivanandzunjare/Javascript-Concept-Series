const fruits = ["Apple","Banana","Mango","Pine-Apple"];

fruits.forEach(function(fruit) {
    console.log(fruit);
})

//arrow function
fruits.forEach(fruit => {
    console.log(fruit)
})


//you also get an index and whole array
fruits.forEach((fruit, index, array) => {
    console.log(index, fruit, array);
  });
  