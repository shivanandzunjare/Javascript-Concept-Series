//  for let
function demo(){
    //console.log(name)
    let name = "shiva";
    name = "vishal"

    console.log(name)
}
demo()


//for const
//console.log(pi)
const pi = 3.14;
//pi = 3.1415; // ❌ Error

const user = { name: "Alice" };
user.name = "Bob"; // ✅ OK (modifying object content)
console.log(user.name)

// for var
var age = 25;
var age = 30; // ✅ OK (re-declaration allowed)
console.log(age)
console.log(x); // undefined (hoisting)
var x = 10;
