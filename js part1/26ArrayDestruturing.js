/* **************ARRAY DE-STRUCTURING ************ 
Array destructuring is a feature in JavaScript that allows you to extract values from arrays
 and assign them to variables in a more concise and readable way. It's a powerful tool for 
 working with arrays, enabling you to access individual elements easily.

Here's the basic syntax of array destructuring:


const [variable1, variable2, ...rest] = array;
*/
const numbers = [1, 2, 3, 4, 5];

const [first, second] = numbers;

console.log(first); // 1
console.log(second); // 2

//In this example, we're extracting the first two values from the numbers array and 
//assigning them to the variables first and second.



//You can also use array destructuring with the rest syntax to capture the remaining elements:
const numbers2 = [1, 2, 3, 4, 5];

const [e1, ...rest] = numbers;

console.log(e1); // 1
console.log(rest); // [2, 3, 4, 5]


//You can even skip values you're not interested in:
const numbers3 = [1, 2, 3, 4, 5];

const [, , third] = numbers;

console.log(third); // 3

