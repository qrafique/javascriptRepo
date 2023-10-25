/*  ************* filter method***************
the "filter" method is a built-in array method that allows you to create a new array containing 
elements from the original array that meet certain criteria.
If the callback function returns true for an element, that element is included in the new array;
 otherwise, it is excluded.  */
//const newArray = array.filter(callback(element[, index[, array]])[, thisArg])

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers1 = numbers.filter(function(element) {
  return element % 2 === 0;
});

console.log(evenNumbers1); // Output: [2, 4, 6]
//const evenNumbers = numbers.filter(element => element % 2 === 0);// alternate method call back
