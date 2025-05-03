function Outer(){
    const outerVar = " I am in outer"

    function Inner(){
        console.log(outerVar)
    }
    Inner();
    
}
Outer();
//inner() can access outerVar because it's written inside outer().

//That’s lexical scope — based on the writing, not the running.

