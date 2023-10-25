/* ******* spread operator in object and arrays*********

The spread operator in JavaScript  is  a  powerful  feature  that allows you to spread the elements 
of an  array  or the  properties of  an  object  into another array or object. It is represented by 
three dots ... and is available in modern JavaScript versions, such as ECMAScript 6 (ES6) and later.
*/
//Spread Operator with Arrays: is used to create a new array by copying the elements from an existing array.

const arr1 =[1,2,3];
const arr2 = [...arr1,4,5];
console.log(arr2) //output: [ 1, 2, 3, 4, 5 ]

//can be used to clone an array
const originalArray =['ali', 'ahmed', 'aslam', 'zaheer'];
const cloneArray = [...originalArray];
console.log(cloneArray);

//with objects, creates new obj by copying properties of existing obj.
let obj1 ={
    p1: 'prpt1',
    p2: 'prpt2',
    p3: 22
};
let obj2= {
    ...obj1, 
    p4: 'prpt4'
};
console.log(obj2);

//merge multiple objects into one
const obj3= {a: 1};
const obj4= {b: 2};
const obj5= {...obj1, ...obj2, ...obj3, ...obj4};
console.log(obj5);

//if two objects have duplictae property, the subsequent object property will override 
// the pre posted object, to avoid overiding, use anyother lone technique
let ob1= {a: 1, b:2};
let ob2= {b :3, c: 4}
let ob3= {...ob1, ...ob2};
console.log(ob3); //{ a: 1, b: 3, c: 4 } value of b in ob2 overide the value of b in ob1
// Create two objects


// Create a new object by copying obj1
const combinedObject = { ...ob1 };

// Concatenate obj2 into the new object, avoiding overwriting existing keys
for (let key in ob2) {
  if (!combinedObject.hasOwnProperty(key)) {
    combinedObject[key] = ob2[key];
  }
}

console.log(combinedObject);
