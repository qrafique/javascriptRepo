/* ********* 
you can create and return functions from other functions. This concept is known as 
"function returning function" or "higher-order functions." Higher-order functions 
are functions that either take other functions as arguments or return functions as
 their result. 
*/

function multiplier(factor) {
    return function (number) {
        return number*factor;
    };
}
const multiplyBy2 = multiplier(2);
console.log(multiplyBy2(3));

const multiplyBy5 = multiplier(5);
console.log(multiplyBy5(2));