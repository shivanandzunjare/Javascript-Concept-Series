function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function farewell() {
    console.log("Goodbye!");
}

// Call greet with a callback
setTimeout(() => greet("Alice", farewell), 1000);

function fun1(){
    console.log("Hi Guys")
}

function processInput(callback){
    const name = "Shiva !";
    console.log(`hi ${name}`);
    callback()
}

processInput(fun1);