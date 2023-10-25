/* ***********truthy and falsy values *********

JavaScript has a concept of falsy and truthy values. 
Falsy values include false, 0, '' (empty string), null,
 undefined, and NaN. Everything else is considered truthy.
Example: if (userInput || defaultValue) {  code here  } 
will use defaultValue if userInput is falsy.

 */
let firstName = "";   //falsy value will return false
if(firstName){
    console.log(firstName);
}
else{
    console.log("name string is empty")
}
//output:  name string is empty
/* truthy values

if string contains any other value
e.g. 
"abc"
1,-1
it will return true anf if block will be executed

*/