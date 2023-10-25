/*    ***********Object Destructing*************** 

Object destructuring  in  JavaScript is a convenient way to extract values from objects and assign
 them to variables with the same or different names. It allows you to access and work with specific
  properties of an object  more  easily. Object  destructuring  is often  used  in various contexts, 
  including function parameters and assignment statements.
*/

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20
};
const {firstName, lastName, age} = person;

console.log(`First Name: ${firstName} Last Name: ${lastName} , Age: ${age}`);
//We  use object destructuring to extract these properties into separate variables with 
//the same names as the object properties.

//Object destructuring can also be used to extract properties with different variable names:
const {firstName: first, lastName: last, age: ag} = person;
console.log(`First Name: ${first} Last Name: ${last} , Age: ${ag}`);
//Object destructuring is often used in function parameter lists to extract values from 
//objects passed as arguments:

function printPersonInfo(firstName, lastName, age) {
    
    
}