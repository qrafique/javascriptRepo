

/* In JavaScript, `call`, `apply`, and `bind` are methods that allow you to manipulate how a 
function is called and how it behaves in terms of its `this` context and arguments. These 
methods are commonly used when working with functions, and they are often used in the context
 of object-oriented programming and functional programming.

1. **`call`**: The `call` method is used to invoke a function with a specific `this` value and 
individual arguments passed as arguments, not an array. It allows you to set the `this` context
 explicitly. */

   function sayHello() {
       console.log("Hello, " + this.name);
   }

   const person = { name: "John" };

   sayHello.call(person); // Output: Hello, John
   
/*2. The `apply` method is similar to `call`, but it takes arguments as an array. It also allows 
you to specify the `this` value explicitly.*/ 

   
   function sayHello(greeting) {
       console.log(greeting + ", " + this.name);
   }

   const person1 = { name: "John" };

   sayHello.apply(person1, ["Hola"]); // Output: Hola, John
   

/*3.  The `bind` method is used to create a new function with a specific `this` value that is 
permanently set. It does not immediately invoke the function but returns a new function with 
the specified context. */


   function sayHello(greeting) {
       console.log(greeting + ", " + this.name);
   }

   const person2 = { name: "John" };
   const greetJohn = sayHello.bind(person2, "Bonjour");

   greetJohn(); // Output: Bonjour, John
   

/*These methods are powerful for controlling the context and parameters when invoking functions.
 They are often used in scenarios where you need to set the `this` value explicitly, pass dynamic
  arguments, or create new functions with predefined contexts. */