/* 
*******٭٭٭٭٭٭٭٭ سٹرنگ میتھڈز 
trim()
toUpperCase()
toLowerCase()
slice()
                                                    */
// trim method
/* suppose we have some pre and post spaces in string */
let firstName = '    qasim    ';
console.log(firstName.length);
//output: 13
///now we use trim method with this string 
firstName.trim();
console.log(firstName.length);
//again the output: 13  , means the existing string will remain immutable
let fName= firstName.trim();
console.log(fName.length);

// now the output is 5, means trimmed the extra spaces


/* to uppercase will convwrt all alphbet to upper case */
fName = fName.toUpperCase();
console.log(fName);
// output:  QASIM


/* SIMILARLY IS THE toLowerCase() */

fName = fName.toLowerCase();
console.log(fName);
// output: qasim


/* Now if i want some particular character in string, we use the slice method */

let newName = fName.slice(0,3); // start from 0 index, end on 3 but not included 3
console.log(newName);
// output:  qas
