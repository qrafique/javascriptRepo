/* *********find method***********
In JavaScript, the find() method is used to search for an element in an array that satisfies a 
specified condition, and it returns the first element in the array that meets the condition. If 
no element is found, it returns undefined.

Here's the basic syntax of the find() method:


array.find(function(currentValue, index, arr) {
  // Your condition goes here
});
array: The array you want to search in.
currentValue: The current element being processed in the array.
index (optional): The index of the current element being processed in the array.
arr (optional): The array on which find() was called.
The find() method takes a callback function as an argument. This callback function is called for each element in the array until a satisfying condition is met. Once a condition is met, find() returns the value of that element and stops further iteration.
*/
const array = [1,2,3,4,5,6,7];
const found = array.find(number=>number>3)
console.log(found)

//altenate method

const arr =[10,11,12,13,14,15];
const foundNum = arr.find(function(currentValue) {
    return currentValue>11;
});
console.log(foundNum);