function introduce (age, city){
    console.log(`hello, my name is ${this.name} and i am ${age} years old and from ${city}`)
}

const user = {name :"Gerald"}

introduce.call(user, 25, 'Rivia')

//Normally, this would be undefined or the global object.

// .call(user), this inside introduce() becomes user