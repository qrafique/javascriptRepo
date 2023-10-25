/* Lexical scope, also known as static scope or lexical scoping, is a concept in programming languages,
 including JavaScript, that determines how variable names are resolved in a program. Lexical scope is
  defined by where variables and functions are declared in the source code, rather than where they 
  are called or executed.
In JavaScript, lexical scope is established by the placement of functions and blocks of code within 
the source code. When you declare a variable or a function inside a block of code (such as a function
or a block defined by curly braces {}), that variable or function is scoped to that block, and 
its visibility and accessibility are limited to that block and any nested blocks within it. */

function outerFunction() {
    var outerVariable = "I'm in the outer function";
  
    function innerFunction() {
      var innerVariable = "I'm in the inner function";
      console.log(outerVariable); // Access outerVariable from outer scope
    }
  
    innerFunction();
  }
  
  outerFunction();
  /* In this example, innerFunction can access the outerVariable declared in the outer scope 
  because of lexical scoping. Variables declared in the outer scope are accessible to functions
  declared within that scope. */
  

  //variables declared within a function's own scope are not accessible outside of that function:
  function outerFunction() {
    var outerVariable = "I'm in the outer function";
  
    function innerFunction() {
      var innerVariable = "I'm in the inner function";
    }
  
    console.log(outerVariable); // Accessible here
    console.log(innerVariable); // Error: innerVariable is not defined
  }
  
  outerFunction();
  