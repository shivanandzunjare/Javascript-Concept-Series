
  // Curried function
  function curriedAdd(a) {
    return function (b) {
      return a + b;
    };
  }
  
  const addTwo = curriedAdd(2); // Partially applied function
  console.log(addTwo(3)); // Output: 5
  console.log(curriedAdd(4)(5)); // Output: 9
  