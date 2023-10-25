// FUNCTION CAN BE TRETED AS OBJECT

function hello() {
    console.log('hello world');
    
}
console.log(hello.prototype);
//only functions provide prototype property
if (hello.prototype) {
    
    console.log('prototype is present');
}
else{
    console.log('not present');
}
const hello1 = {
    fName: 'qasim'
}

if (hello1.prototype) {
    console.log('present');
} else {
    console.log('absent');
}

hello.prototype.abc = 'abcd'


hello.prototype.sing = function () {

    return 'la lllaaa la';
}
console.log(hello.prototype.sing());