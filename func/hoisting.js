console.log(a)  //undefined
var a = 10;
console.log(a)

//console.log(b)  //reference error  //TDZ --> time bet hosting and its actual declaration
const b = 20
console.log(b)

SayHello();
function SayHello(){
    console.log("hi this for Hosting")
}