/*  ***********  Param destructuring************** 
allows you to extract values from objects and arrays and assign them to variables in a more concise
and readable way. Parameter destructuring specifically refers to using destructuring in function 
parameters.
*/

//Object Destructuring in Function Parameters
// Without destructuring
/* function printName(person) {
    console.log(person.firstName, person.lastName);
  } */
  
  // With destructuring
  function printName({ firstName, lastName }) {
    console.log(firstName, lastName);
  }
  
  const person = { firstName: 'John', lastName: 'Doe' };
  printName(person); // Output: John Doe
  

  //Array Destructuring in Function Parameters:

  // Without destructuring
/* function sumArray(arr) {
  const [num1, num2] = arr;
  return num1 + num2;
} */

// With destructuring
function sumArray([num1, num2]) {
  return num1 + num2;
}

const numbers = [3, 5];
console.log(sumArray(numbers)); // Output: 8


//Default Values and Aliases:

function greet({ name, age = 30, alias: nickname = 'Unknown' }) {
  console.log(`Hello, ${name}! You are ${age} years old. (${nickname})`);
}

const person1 = { name: 'Alice', alias: 'Alicia' };
greet(person1); // Output: Hello, Alice! You are 30 years old. (Alicia)

/* Parameter destructuring is especially useful when dealing with complex objects or arrays
 passed as function arguments, as it allows you to extract only the necessary values you need,
  making your code more readable and concise. */