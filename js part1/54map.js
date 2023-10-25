/*  ***********MAP DATA STRUCTURE ************ 
a map data structure is implemented using the Map object. The Map object allows you to store 
key-value pairs and provides methods for adding, retrieving, and manipulating data in a manner 
similar to dictionaries or associative arrays in other programming languages.
*/

//1.  Creating a Map:
const myMap = new Map();

//2. Adding Key-Value Pairs:
myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", "value3");
myMap.set("key4", "value4");
myMap.set("key5", "value5");
myMap.set("key6", "value6");
//3. retrieving data
console.log(myMap.get("key1"));

//4. Checking for Key Existence:
myMap.has("key1") //return false/true

//5. deleting key
myMap.delete("key2");

for (const key in myMap) {
    console.log(key);
}
/* Map is a built-in data structure introduced in ECMAScript 2015 (ES6) specifically for 
storing key-value pairs. The for...in loop is not designed to work with Map objects because 
it is intended for objects and their properties. */

for (const key of myMap.keys()) {
    console.log(key);
}

for (const key of myMap.values()) {
    console.log(key);
}

for (const [key,value] of myMap.entries()) {
    console.log(`${key}......${value}`);
}

//Getting the Size of the Map:


console.log(myMap.size); // Output: 1 (after deleting "key2")


//Clearing the Map:

myMap.clear();

//Map Keys' Data Types:

//In a JavaScript Map, keys can be of various data types, including strings, numbers, objects, 
//and functions.


const myMap1 = new Map();

myMap1.set("name", "John");
myMap1.set(42, "Answer to the Ultimate Question of Life, the Universe, and Everything");

console.log(myMap1.get("name")); // Output: "John"
console.log(myMap1.get(42)); // Output: "Answer to the Ultimate Question of Life, the Universe, and Everything"
//The Map data structure in JavaScript is versatile and useful when you need to associate 
//data with specific keys while allowing for a wide range of key data types.