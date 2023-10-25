/* In JavaScript, arrow functions are a concise way to create functions, and they have a 
special behavior when it comes to the `this` keyword. Arrow functions do not have their own 
`this` context; instead, they inherit the `this` value from the surrounding lexical context. 
This can be particularly useful in certain situations, such as when defining functions within
 functions or when working with callback functions.
*/
function regularFunction() {
  console.log("Regular function this:", this);
}

const arrowFunction = () => {
  console.log("Arrow function this:", this);
};

const obj = {
  method() {
    console.log("Method this:", this);
    regularFunction();
    arrowFunction();
  }
};

regularFunction(); // 'this' refers to the global object (e.g., 'window' in a browser).
arrowFunction();  // 'this' also refers to the global object.

obj.method();     // 'this' refers to the 'obj' object for both regular and arrow functions.


/*1. When calling `regularFunction()` and `arrowFunction()` outside of any specific object or 
context, the `this` keyword within those functions refers to the global object (e.g., `window`
 in a browser).

2. When calling `obj.method()`, the `this` keyword inside `method` refers to the `obj` object.
 This is true for both the regular and arrow functions declared within the `method`.

This difference in how `this` is handled makes arrow functions particularly useful when working 
with callbacks, as they allow you to maintain the `this` context from the surrounding function, 
which is often what you want when working with objects and their methods or in certain asynchronous
 scenarios. */