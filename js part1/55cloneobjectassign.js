/* In JavaScript, you can use `Object.assign()` to create a shallow clone of an object. 
A shallow clone copies the properties of the source object to a new object, but it does
 not create copies of nested objects. If the source object contains nested objects, the 
 new object will still reference the same nested objects as the original.
 */

const originalObject = { a: 1, b: 2, c: 3 };
const clonedObject = Object.assign({}, originalObject);

console.log(clonedObject); // { a: 1, b: 2, c: 3 }

// Modifying the cloned object doesn't affect the original
clonedObject.a = 42;
console.log(clonedObject); // { a: 42, b: 2, c: 3 }
console.log(originalObject); // { a: 1, b: 2, c: 3 }


//Keep in mind that `Object.assign()` only performs a shallow copy. If the original object contains nested objects, those nested objects will be shared between the original and the cloned object. If you want a deep copy (a completely independent copy with all nested objects cloned as well), you'd need to implement a custom deep cloning function or use a library like Lodash.


const originalObject1 = { a: 1, b: { x: 2, y: 3 } };
const clonedObject1 = Object.assign({}, originalObject);

console.log(clonedObject); // { a: 1, b: { x: 2, y: 3 } }

// Modifying the nested object in the cloned object also affects the original
clonedObject1.b.x = 42;
console.log(clonedObject1); // { a: 1, b: { x: 42, y: 3 } }
console.log(originalObject1); // { a: 1, b: { x: 42, y: 3 } }

//As you can see, changes to the nested object are reflected in both the original and 
//the cloned object because the nested object itself is not deeply cloned.