/* ******** Rest param ************* 
allows you to represent an indefinite number of arguments as an array. It is denoted by three 
dots (...) followed by a parameter name and is typically used in the context of function 
definitions. The rest parameter collects all the remaining arguments passed to a function into 
an array, making it easier to work with variable-length argument lists.

*/
function sum(...numbers) {
    let result = 0;
    for (const number of numbers) {
        result+=number;
    }
    return result;
    
}
console.log(sum(1,2,3,5,6));
/* The rest parameter is particularly useful when you want to create functions that can accept
a variable number of arguments without having to explicitly specify them in the function definition*/


