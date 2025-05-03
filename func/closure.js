function Outer(){
    let outVar = "Outer Scope";
    
    function inner(){
        console.log(outVar);
    }
    return inner; // send complete lexical scope
}
const myFun = Outer();
myFun();