function greet(city, country){
    console.log(`Hello, I am ${this.name}  from ${city}, ${country}`)
}
const user = {name : 'Shiva'}
greet.apply(user,['Latur', 'India'])