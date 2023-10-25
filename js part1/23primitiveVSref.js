/* ********** Primitive VS refrence data types */
//In JavaScript, data types can be broadly categorized into two groups: primitive data types 
//and reference data types. Here are examples of both:

//**Primitive Data Types:**

//          1. **Number:**
  
   let num = 42; // Integer
   let floatNum = 3.14; // Floating-point number
   

//           2. **String:**
   
   let str = "Hello, World!";
   

//          3. **Boolean:**

   let isTrue = true;
   let isFalse = false;


//          4. **Undefined:**

   let undefinedVar;


//           5. **Null:**
 
   let nullVar = null;
 

//          6. **Symbol (ES6):**
   
   const uniqueSymbol = Symbol('unique');
   

//           **Reference Data Types:**

//      1. **Object:**
   
   let person = {
     firstName: "John",
     lastName: "Doe",
   };
   

//       2. **Array:**
   
   let numbers = [1, 2, 3, 4, 5];
   
//      3. **Function:**
   
   function greet(name) {
     console.log("Hello, " + name + "!");
   }
   

//       4. **Date:**
   
   let currentDate = new Date();
   

//        5. **Custom Objects:**
   
   class Car {
     constructor(make, model) {
       this.make = make;
       this.model = model;
     }
   }
   
   let myCar = new Car("Toyota", "Camry");

//In JavaScript, primitive data types are stored directly in memory, while reference data types
// are stored by reference. This means that when you assign a primitive to a new variable, you 
//create a copy of the value. In contrast, when you assign a reference data type to a new variable, 
//you're working with a reference to the original data, not a copy of it. Modifying the data through
// one reference will affect all references to the same data.