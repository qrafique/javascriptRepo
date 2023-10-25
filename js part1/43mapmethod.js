/* map method 
the map() method is a built-in function that is used to create a new array by applying a 
specified function to each element in an existing array. It does not modify the original 
array but instead returns a new array with the results of applying the provided function 
to each element.
*/
//array.map(function(currentValue, index, array) {
    // Return a new value based on currentValue
 // }, thisArg);
/* array: The original array on which you want to apply the map() method.
function(currentValue, index, array): A callback function that is called once for each 
element in the array. It takes three parameters:
currentValue: The current element being processed in the array.
index (optional): The index of the current element being processed.
array (optional): The array map() was called upon.
thisArg (optional): An optional parameter that represents the value to use as this when executing 
the callback function.
The map() method then returns a new array with the results of applying the callback function to
 each element in the original array. */  
 const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


const numbers1 = [1, 2, 3, 4, 5];

const doubledNumbers1 = numbers1.map(number => number * 2);

console.log(doubledNumbers1); // Output: [2, 4, 6, 8, 10]
