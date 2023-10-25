/*  forEach method

The forEach method is a built-in JavaScript method that allows you to iterate over elements in an
 array or array-like object and perform a specified action on each element. It's commonly used for
  performing some operation on each element of an array without the need for an explicit loop.
*/
const arr = [2,3,4,5,6]
arr.forEach((element,index) => {
    console.log(element,index)
});
/* In this example, the forEach method iterates through each element of the numbers array
 and logs the element and its index to the console.

It's important to note that the forEach method is mainly used for performing side effects 
(like logging, updating variables, or manipulating the DOM) and does not create a new array
 or modify the existing one. If you want to create a new array based on the elements of the
  original array, you might consider using methods like map. */
