const person = {
    name : "Henry Cavil",
    age : 50,
    isDcHeros : true,
};

console.log(person.name);
console.log(person["age"]);

person.country = "UK";

person.age = 41;
person["age"] = 42

console.log(person)