/* ********* for..of loop ******************
The "for...of" loop in JavaScript is    used for iterating over iterable objects, such as arrays, 
strings, maps, sets, and more. It provides   a convenient way to loop through the values of these 
objects without the need for manual index management, making your code more concise and readable.
*/

//Iterating through an array:
const fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits) {
  console.log(fruit);
}


//Iterating through a string:
const message = 'Hello, World!';

for (const char of message) {
  console.log(char);
}

//Iterating through a Map:

const myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);

for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

//Iterating through a Set:
const mySet = new Set([1, 2, 3, 4, 5]);

for (const num of mySet) {
  console.log(num);
}
