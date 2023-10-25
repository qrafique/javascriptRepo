/* ************   sets   *********
In JavaScript, a set is a built-in data structure that represents a collection of unique values. 
Sets are commonly used when you need to store a group of items where each item should be unique, 
and the order of the items doesn't matter. Here are some key points about sets in JavaScript:

1. Declaration and Initialization:
   You can create a new set using the `Set` constructor or the Set literal notation `{}`.*/

   const mySet = new Set([1,2,3,4,5]); // Using the constructor
  
  /*
2. Adding and Removing Elements:
   You can add elements to a set using the `add` method and remove them using the `delete` method. 

   ```javascript*/
   mySet.add(6);
   mySet.add(7);
   //mySet.delete(2);
   
/*
3. Checking for Existence:
   You can check if an element exists in a set using the `has` method.

   ```javascript */
   mySet.has(1); // Returns true
   mySet.has(2); // Returns false
   

//4. Iterating Over Elements:
  // You can iterate through the elements of a set using various methods like `forEach`, `for...of` loop, or by converting it to an array using the spread operator (`[...mySet]`).

   
   mySet.forEach((value) => {
     console.log(value);
   });

   for (const item of mySet) {
     console.log(item);
   }
   

//5. Size of a Set:
  // You can get the number of elements in a set using the `size` property.

   
   mySet.size; // Returns the number of elements in the set

//6. Clearing a Set:
  // You can remove all elements from a set using the `clear` method.


   mySet.clear();


//7. Set Operations:
  // Sets support various set operations such as union, intersection, and difference. These operations can be performed using methods like `union`, `intersection`, and `difference`, which involve creating new sets based on the operation.

   
   const setA = new Set([1, 2, 3]);
   const setB = new Set([2, 3, 4]);

   const unionSet = new Set([...setA, ...setB]);
   const intersectionSet = new Set([...setA].filter((x) => setB.has(x)));
   const differenceSet = new Set([...setA].filter((x) => !setB.has(x)));
   
/*Sets are a versatile data structure in JavaScript, and they can be useful for various tasks where uniqueness of elements is important.
*/