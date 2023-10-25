/* **************   undefined   and null and bigInt******************* 
 when we create a variable and do not initializa it, its type is undefined
However we can not leave a const without initialization while declaring it*/
 let age;
 console.log(age);
 console.log(typeof  age);
//output: undefined
//        undefined
//const ag1;
// SyntaxError: Missing initializer in const declaration 
let myVar = null; //means nothing

console.log(myVar);

//opt: null
console.log(typeof myVar);
//opt: object     strange behaviour  this is bug, but now we have to bear this
// otherwise we have to change in all javaScript frameworks

//bigInt     recently added in javaScript


console.log(Number.MAX_SAFE_INTEGER);
//opt: 9007199254740991
let num = 9007199254740995;
console.log(num);
// opt: 9007199254740996   differ than that we stored

//in such case, we convert the number into bigInt.
let num1 =BigInt(67671371637167361);
console.log(num1);
//opt: 67671371637167360n





