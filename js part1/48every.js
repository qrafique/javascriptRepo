/*   ***********evey method *************

The Array.every() method in JavaScript is a built-in method that is used to check if all 
elements in an array pass a specific condition or test provided by a callback function. 
It returns a Boolean value (true or false) based on the evaluation of the callback function
 for each element in the array. If the callback function returns true for all elements,
  Array.every() returns true. If the callback function returns false for at least one element, 
  Array.every() returns false.

Here is the syntax for Array.every():


array.every(callback(element[, index[, array]])[, thisArg])
callback: This is a function that is called for each element in the array. It can take up to three arguments:

element: The current element being processed in the array.
index (optional): The index of the current element in the array.
array (optional): The array on which Array.every() was called.
thisArg (optional): An optional value to be used as the this value when executing the callback function.
*/

const arr = [2,4,6,8,10];
const everyNum = arr.every(function (currentValue) {
    return currentValue%2==0;
});
console.log(everyNum);