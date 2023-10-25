/* ****** for in loop and objects ************ */

//The for...in loop is used to iterate over the properties of an object.
person ={
    firstName: 'Qasim',
    lastName: 'Rafique',
    age: 25
};

// count properties function using for in loop
for(let key in person){
    console.log(`${key}: ${person[key]}`)
}
function countProp(object) {
    
    let count = 0;
    for(prop in object){
        
        count++;
    }
    return count;
}
console.log(countProp(person));


//copy object

function copyObject(object) {
    let copy ={};
    for(prop in object){
        copy[prop]= object[prop];

    }
    return copy;
}
let original = {a: 1 , b: 2, c: 3, d: 4, e: 5}
let copiedObject = copyObject(original);
console.log(copiedObject);


const number = {
    a: 1, 
    b: 2, 
    c: 3, 
    d: 14, 
    e: 15
};

function filteredFunction(object, fun) {
    let filteredObj = {};
    for (prop in object){
        if ((object[prop])) {
            filteredObj[prop] = object[prop];
        }
    }
    return filteredObj;
}

console.log(filteredFunction(number, value=>value>10));


function filterProperties(obj, callback) {
  let filteredObj = {};
  for (let prop in obj) {
    if (callback(obj[prop])) {
      filteredObj[prop] = obj[prop];
    }
  }
  return filteredObj;
}

const numbers = {
  a: 5,
  b: 10,
  c: 15,
  d: 20
};

const filtered = filterProperties(numbers, value=> value>10);

console.log(filtered); // Should contain properties 'c' and 'd'
