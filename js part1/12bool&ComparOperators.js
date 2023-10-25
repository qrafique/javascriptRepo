/* ************ boolean and comparison operators ********** 
  boolean either true or false              */
  let num1 = 20;
  let num2 =  30;
  console.log(num1>num2);
//   output: false
console.log(typeof (num1>num2));
// output:    boolean

/*    ==   vs  === */

let num3 = 7;
let num4 = '7';
console.log(num3 == num4);

// output: true     
// despite differ in data types, returns true
// whereas === checks equality in terms of both value and data type
console.log(num3 === num4);
// output: false

// same is the case of !=  vs !==

