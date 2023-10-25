/* **********8create own methods
In JavaScript, you can create your own methods by defining functions. Methods are functions that are associated with objects. Here's how you can create your own methods:

// Define an object*/
const person = {
  firstName: "John",
  lastName: "Doe",
  // Create a method
  sayHello: function() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  }
};

// Call the method
person.sayHello(); // Output: Hello, my name is John Doe


//In the example above, we've defined an object called `person` with properties `firstName` and `lastName`, as well as a method `sayHello`. The method is defined as a function inside the object and uses the `this` keyword to access the object's properties.

He//re's another example of creating a method using ES6 shorthand syntax
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};

console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(10, 4)); // Output: 6


//In this example, the `calculator` object has two methods, `add` and `subtract, defined using the ES6 shorthand syntax.

//You can create methods within classes as well. Here's an example of defining a method in a class:


class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  drive() {
    console.log(`The ${this.make} ${this.model} is driving.`);
  }
}

const myCar = new Car("Toyota", "Camry");
myCar.drive(); // Output: The Toyota Camry is driving.


//In this example, the `Car` class has a `drive` method, which is called on an instance of the class.

//These are some basic examples of creating your own methods in JavaScript. You can define methods on objects, classes, or prototypes to encapsulate behavior and logic associated with those objects.


