/* ***********fill method************
the fill() method is used to change all elements in an array to a static value. It modifies 
the original array in place and does not create a new array. The fill() method takes up to three
 arguments:

value: The value to fill the array with.
start (optional): The index at which to start filling the array. If omitted, it defaults to 0.
end (optional): The index at which to stop filling the array (exclusive). If omitted, it fills the 
entire array.
Here's the basic syntax of the fill() method:


array.fill(value, start, end);
*/

let numbers = [1, 2, 3, 4, 5];

// Fill the entire array with the value 0
numbers.fill(0);
console.log(numbers); // Output: [0, 0, 0, 0, 0]

// Fill only a portion of the array with the value 9, starting at index 2 (inclusive) and ending at index 4 (exclusive)
numbers.fill(9, 2, 5);
console.log(numbers); // Output: [0, 0, 9, 9, 0]


