/* ***********splice method********
The splice() method in JavaScript is used to change the contents of an array by removing, replacing,
 or adding elements to it. It can modify an array in-place and returns an array containing the 
 removed elements, if any. 
*/
//array.splice(start, deleteCount, item1, item2, ...)
/* start: The index at which to start changing the array. If negative, it counts from the end of the 
array (e.g., -1 for the last element).
deleteCount: The number of elements to remove starting from the start index. If set to 0, no elements are removed.
item1, item2, ...: (Optional) Elements to be added to the array starting at the start index.
Here are some examples of how to use the splice() method:

Removing elements from an array:
*/
let fruits0 = ['apple', 'banana', 'cherry', 'date'];
fruits0.splice(1, 2); // Removes 'banana' and 'cherry'
// Now 'fruits' is ['apple', 'date']


//Replacing elements in an array:

let fruits = ['apple', 'banana', 'cherry'];
fruits.splice(1, 1, 'orange', 'grape'); // Replaces 'banana' with 'orange' and 'grape'
// Now 'fruits' is ['apple', 'orange', 'grape', 'cherry']
console.log(fruits)

//Adding elements to an array:

let fruits1 = ['apple', 'cherry'];
fruits1.splice(1, 0, 'banana', 'date'); // Inserts 'banana' and 'date' at index 1
// Now 'fruits' is ['apple', 'banana', 'date', 'cherry']


//Removing elements and getting the removed elements:

let fruits2 = ['apple', 'banana', 'cherry', 'date'];
let removed = fruits2.splice(1, 2); // Removes 'banana' and 'cherry' and stores them in 'removed'
// 'removed' is now ['banana', 'cherry']
// 'fruits' is now ['apple', 'date']

/*Keep in mind that the splice() method modifies the original array, so use it with caution if you 
want to keep a copy of the original array. If you want to create a new array without modifying the
 original one, consider using methods like slice() or array spread ([...array]) to make a copy before
  making changes.

 */
