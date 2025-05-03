let useOne= {
    email : "user@google.com",
    upi : "user@ybl",
}

let useTwo = useOne;
useTwo.email = " shiva@google.com";

console.log(useOne.email);
console.log(useTwo.email);

// Date Function

let myDate = new Date();
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toLocaleDateString())