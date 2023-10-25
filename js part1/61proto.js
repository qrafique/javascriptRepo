obj1 = {
    key1: 'value1',
    key2: 'value2'
};

//we can add key in empty object like
obj2= {};
obj2.key3 = 'value3';
console.log(obj1.key1);
console.log(obj1.key2);
console.log(obj2.key3);

console.log(obj2.key1);  //undefined

//our target is if obj2 doesn't have key1, it could access from any other obj , which has key1
const obj3 =Object.create(obj1); //empty
// although obj3 returns empty, but now we can access properties of other objects

console.log(obj3.key1); //value1

console.log(obj3.__proto__)