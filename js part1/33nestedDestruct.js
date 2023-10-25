/* nested destructuring
In JavaScript, nested destructuring is a technique that allows you to extract values from nested
 objects or arrays using a concise and expressive syntax. It's a way to access and assign variables
  to deeply nested properties or elements in an object or array. 
*/

const user = [
    {name: "ali", Id: 22 , age:25},
    {name: "qasim", Id: 22 , age:25},
    {name: "rehman", Id: 22 , age:25}


];
const [p1, p2, p3] =user;
console.log(p1);

const person = {
    fName: 'Qasim',
    lName:  'Rafique',
    adress: {
        streetNo: 75,
        Block: 'L',
    },
};
const {fName, lName, adress: {streetNo , Block}} = person;

console.log(`${fName}`);

console.log(`${lName}`);
console.log(`${streetNo}`);

console.log(`${Block}`);

//Default Values:

const persons = {
    fname: "John",
    
  };
  
  const { fname, age = 30 } = persons;
  
  console.log(fName);  // "John"
  console.log(age);   // 30 (default value)

  const { fname: personName, age: personAge=87  } = persons;
  
  console.log(personName);  // "John"
  console.log(personAge);   // 30 (default value)
  

  //Destructuring Arrays:

  const numbers = [1, [2, 3], 4];

const [first, [second, third], fourth] = numbers;

console.log(first);   // 1
console.log(second);  // 2
console.log(third);   // 3
console.log(fourth);  // 4

  