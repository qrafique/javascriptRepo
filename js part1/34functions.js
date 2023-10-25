/*   ***********FUNCTIONS IN JAVASCRIPT****** 
functions are blocks of reusable code that can be defined and called to perform a specific task
 or set of tasks.
*/

//Function Declaration
function functionNameN(parameter1, parameter2) {
    // Function body
    // Code to be executed
    // Return statement (optional)
  }
  /* Function Expression
Another way to define functions is using function expressions. Function expressions involve 
assigning a function to a variable or passing it as an argument to another function. Here's
 an example */
 const functionName0 = function(parameter1, parameter2) {
    // Function body
    // Code to be executed
    // Return statement (optional)
  };

  /* Arrow Functions (ES6)
ES6 introduced arrow functions, which provide a more concise way to define functions, especially 
for short, single-expression functions. Here's the syntax for arrow functions: */
const functionName1 = (parameter1, parameter2) => {
    // Function body (single expression)
    // Return value (implicitly returned)
  };
  

  /* Anonymous Functions
Functions without a name are called anonymous functions. They can be assigned to variables or used
 as arguments in other functions. */

const myFunction1 = function(){
  
  return 'helloanonymous!';

}
  
function callingAnonymous(callback) {
  
  console.log(callback())
  
}
callingAnonymous(myFunction1);

/* Callback Functions
JavaScript often uses callback functions, which are functions passed as arguments to other 
functions and executed at a later time, typically in response to an event or async operation. */
function performAction(callback) {
  console.log("Performing some action...");
  callback();
}

function onActionComplete() {
  console.log("Action complete!");
}

performAction(onActionComplete);

/* Function Parameters with Default Values (ES6)
ES6 introduced the ability to specify default values for function parameters. If an argument 
is not provided when calling the function, the default value is used. */
function setName(name = 'qasim')
{
  console.log(`Hello ${name}`)
}
setName();
setName('Ali');

/* Rest Parameters (ES6)
The rest parameter allows you to pass an arbitrary number of arguments to a function as an array.
 It is denoted by three dots ... followed by a parameter name. */
 function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

/* Function Closures
Closures occur when a function retains access to variables from its containing (enclosing)
 scope, even after that scope has finished executing. This allows you 
to create private variables and maintain state in JavaScript. */

function createCounter() {
  let count = 0;

  return function() {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

/* IIFE (Immediately Invoked Function Expression)
An IIFE is a function that is defined and immediately executed. It's often used to create 
a private scope and prevent polluting the global scope. */
(function() {
  // Code inside this function is executed immediately
  const localVar = "I'm in an IIFE!";
  console.log(localVar);
})();


/* Function Object
In JavaScript, functions are objects, which means they can have properties and methods just 
like any other object. */
function greet(name) {
  console.log(`Hello, ${name}!`);
}

console.log(greet.length); // 1 (number of parameters)
console.log(greet.name); // "greet" (function name)
