/* methods to clone an array******* */
//method 1
let array1 = ['item1' , 'item2'];
let array2 = array1.slice(0);   //start from zero index and return all values till end.
console.log(array2);
// if ipush item in array2 , it will not effect array1
array2.push("item3");
console.log(array1, array2);

//    ***********Meth0d 2 ************

let array3 = [].concat(array1);
console.log(array3);
array3.push('item4');
console.log(array1,array3);

// ********** Method 3 *************
//with the help of spread operator

let array4 = [...array1];
console.log(array4);