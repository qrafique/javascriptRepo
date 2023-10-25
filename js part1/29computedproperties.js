/* ***********compouted properties**************
In JavaScript, computed properties  allow  you  to dynamically set the keys of an object using 
square bracket notation ([]). This means that you can calculate the key name at runtime rather
 than specifying it explicitly.  Computed  properties  are often  used when you need to create 
 objects with dynamic keys or when  you  want to access object properties using dynamic values.

*/
//Creating Objects with Computed Properties:

const propertyName = 'myKey';
const myObject = {
    [propertyName]: 'myValue'
};
console.log(myObject);
// key name of the property in the myObject object is determined by the propertyName variable, 
//which is computed at runtime.


//Accessing Properties with Computed Values:
const obj = {
    foo: '42',
    bar: 16
};
const key ='foo';
console.log(obj[key]);


//Using Computed Properties in Object Methods:
const myKey1 = "dynamicKey";

const myObject1 = {
  [myKey1]: "myValue",
  sayHello() {
    console.log(`Hello, ${this[myKey1]}!`);
  },
};

myObject1.sayHello(); // Outputs: "Hello, myValue!"
/*In this example, the sayHello method uses a computed property to access the value associated 
with the myKey variable.

Computed properties are powerful and flexible, allowing you to work with dynamic data and create
 more versatile objects and data structures in JavaScript.*/






