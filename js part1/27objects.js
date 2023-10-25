/*   ******* objects **********
Objects are used to store and organize data in a structured manner. They consist of 
key-value pairs where keys are strings (or symbols in modern JavaScript) and values 
can be any data type, including other objects. Objects in JavaScript are often used 
to represent real-world entities and their properties.
*/

//using object literals to create an object
const person ={
    firstName: 'Qasim',
    lastName: 'rafique',
    age: 22,
    sex: 'm'

};     //person object with three properties
//accessing properties
console.log(` First Name:${person.firstName} \n Last Name: ${person.lastName} \n Age: ${person.age}`);

//adding and modifying existing object  properties
person.age = 31;
person.email = 'qrafique@gmail.com';
console.log(person);

//nested objects i.e. objects can contain another object
address = {
    streetNo: 35,
    Block: 'L',
    city: 'Gujrat'
};
person.adress = address;

console.log(person);


// Methods:  functions as properties of object
const calculator = {
    add: function (a, b){
        return a+b;
    },
    subtract: function (a,b) {
        return a-b;
    }

};
console.log(calculator.add(2,3), calculator.subtract(3,2));


function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  const person1 = new Person("Alice", "Smith", 25);
  const person2 = new Person("Bob", "Johnson", 30);
  const person3 = person;
  console.log(person1,person2, person3);
  