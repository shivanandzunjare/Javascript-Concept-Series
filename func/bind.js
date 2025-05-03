const Person = {
    name : "Ganesh"
};

function greet(){
    console.log(`Hello, I am ${this.name}`)
}

const greetPerson = greet.bind(Person)

greetPerson();