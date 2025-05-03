(function newFun(){
    console.log(`db connected`);
})();

(() => {
    console.log("Arrow IIFE executed!");
})();
  

var x = 100;

(function () {
  var x = 200;
  console.log("Inside IIFE:", x); // 200
})();

console.log("Outside IIFE:", x); // 100

