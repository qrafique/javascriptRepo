/* ************Arrays in javaScript******
In JavaScript, an array is a data structure that allows you to store and manipulate a collection 
of values. Arrays can hold values of various data types, including numbers, strings, objects,and
 even other arrays.   Arrays  are  widely  used in JavaScript for tasks such as storing lists of 
 items, iterating through data, and performing various operations on collections of values.
*/

//creating an array
let fruits = ['banana', 'apple' , 'Orange' , 'pineApple', 'cherry'];
let numbers = [1,2,3,4,5,6];
let mixArray = [1, 'apple', true];

//Accessing Elements:
console.log(fruits[2], numbers[1], mixArray[2]);

//Array Constructor: You can also create an array using the Array constructor.
let cars = new Array('Toyota', 'ODI', 'Honda', 'Ford');
console.log(cars);

/************   COMMON PROPERTIES ********** */ 

//length
console.log(fruits.length);

/* ************** COMMON METHODS **************** */

//push(element1, element2, ...): 
//Adds one or more elements to the end of an array and returns the new length of the array.
fruits.push('grapes');
console.log(fruits.length, fruits);

//pop(): Removes the last element from an array and returns that element
let removedFruit = fruits.pop();
console.log(removedFruit, fruits.length);

//unshift(element1, element2, ...): 
//Adds one or more elements to the beginning of an array and returns the new length of the array.
let var1 = fruits.unshift('melon', 'mango');
console.log(var1 , fruits);

//shift(): Removes the first element from an array and returns that element
let againRemoved = fruits.shift();
console.log(againRemoved ,  fruits.length);

//concat(array1, array2, ...): Combines two or more arrays and returns a new array.
let newFruits = ['kiwi', 'peas'];
let newArray = fruits.concat(newFruits);
console.log(newArray, newArray.length);

//slice(start, end): Returns a shallow copy of a portion of an array as a new array. The start 
//index is inclusive, and the end index is exclusive.
let selectedFruits = fruits.slice(1,3);
console.log(selectedFruits);

/* start: The index at which to start modifying the array. If negative, it counts from the end of 
the array. If start is greater than the length of the array, no elements will be added or removed.

deleteCount (optional): The number of elements to remove starting from the start index. If this 
argument is omitted or is greater than the number of elements after the start index, all elements 
from the start index to the end of the array will be removed.

item1, item2, ... (optional): The elements to add to the array, starting at the start index. You 
can specify multiple items to insert.

The splice() method returns an array containing the elements that were removed. If no elements are
 removed, it returns an empty array. */


// Removing elements
const removed = fruits.splice(1, 2); 
console.log(removed); 

// Adding elements
fruits.splice(2, 0, "newgrape", "newkiwi"); 
console.log(fruits);

// Replacing elements
fruits.splice(1, 2, "neworange"); 
console.log(fruits); 

//indexOf(element): Returns the first index at which a given element can be found 
//in the array, or -1 if it's not present.
let index = fruits.indexOf('cherry');
console.log(index);


//forEach(callback): Executes a provided function once for each array element.

fruits.forEach(function (fruit){
    console.log(fruit);
});

//map(callback): Creates a new array with the results of calling a provided function on every
// element in the array.
let uppwerCaseFruits = fruits.map(function (fruit){
    return fruit.toUpperCase();
});

console.log(uppwerCaseFruits);

//filter(callback): Creates a new array with all elements that pass the test implemented by the
// provided function.

let selectedFruit = fruits.filter(function (fruit){
    return fruit.length>7;
});
console.log(selectedFruit);


//reduce(callback, initialValue): Applies a function against an  accumulator  and each element in 
//the array (from left to right) to reduce it to a single value.

let totalLength = fruits.reduce(function (total, fruit) {
    return total + fruit.length;
}, 0);
console.log(totalLength);
// totalLength is 20 (length of all fruit names combined)
