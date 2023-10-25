/* ********** typeOf operator**************** 

data types(primitive data types)
string "harshit";
number 1,2 3,5
booleans
undefined
null
bigInt
symbol

typeof operator returns the data type of the variable
*********************************************/
let age = 22;
let firstName = 'Qasim';
console.log(typeof age);
console.log(typeof firstName);
//output: number
//        string
//now convert number to string a simple trick
console.log(typeof (age+"")); //attach it with some string
//output:  string

// convert str to num
let myStr = +"34"; // add + before varname or value to convert it into number
console.log(typeof myStr);
// output:    number
