function Person(name){
    this.name = name
}

Person.prototype.sayHello = function(){
    console.log(`Hello, my name is ${this.name}`)
}

const person1 = new Person("Abhi")
person1.sayHello()