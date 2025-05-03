const original ={
    name : "William",
    address:{
        city :'paris'
    }
};

const copy = {...original}
copy.name = "Bob";          // Changes only copy's name
copy.address.city = "London";  // Changes BOTH original and copy!
console.log(original.address.city)