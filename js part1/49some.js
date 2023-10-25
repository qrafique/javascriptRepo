/*  *********8some method*********** */

arr = [2,3,4,5,6,7,8,10];
const someNum = arr.some(function(currentValue) {
    return currentValue>8;
});
console.log(someNum);