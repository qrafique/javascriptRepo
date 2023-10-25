/* ARROW FUNCTION 
Arrow functions are a concise way to write functions in JavaScript, introduced in ECMAScript 6 (ES6).
 They have a more compact syntax compared to traditional function expressions and automatically 
 capture the this value from the surrounding context.
 They are always anonymous functions, but you can assign them to a variable.
If the function body contains only one expression, you can omit the curly braces {} and the return keyword.
When there is only one parameter, you can omit the parentheses ().
Arrow functions do not have their own this or arguments binding, meaning they inherit these from the enclosing context.

*/
const add = (a,b)=>{
    return a+b;
}
console.log(add(4,5));
// short hand if single statement in body

const subtract = (a,b) => a-b;
console.log(subtract(5,4));

//further shorthand if single parameter
const square = a=>a*a;
console.log(square(5));

//3. Arrow Function as Callback:
const numbers =[1,2,3,4,5]
const doubled = numbers.map(num=>num*2);
console.log(doubled);

//arrow fnction as filter

const number = [1,2,3,4,5,6];
const evenNum = number.filter(num=> num%2==0);
console.log(evenNum);

//Arrow Function with a Default Parameter:
const greet = (name ='Guest')=> `Hello ${name}`;
console.log(greet());

//Arrow Function for Object Literal Shorthand:

const createPerson = (name , age)=> ({name , age});
console.log(createPerson('qasim', 20)); 
