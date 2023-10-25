/* function inside another funtion */
function outerFunction() {
    function innerFunction(){
        console.log('this is inner function');
    }
    innerFunction();
    
}
outerFunction();

//another function like call back

function outFunction(data, inFunction) {
    inFunction(data);
    
}
function fun1(res){
    console.log(res);
}
outFunction('some date', fun1);

//Returning a Function from Another Function:
function outerFunction() {
    function innerFunction() {
      console.log("Inn function");
    }
    return innerFunction;
  }
  const myFunction = outerFunction();
  myFunction();

  //IIFE (Immediately Invoked Function Expression):
  (function () {
    function innerFunction() {
      console.log("IIFE Inner function");
    }
    innerFunction();
  })();
  

  //Private Variables with Closures:
  function counter() {
    let count = 0;
    return function () {
      count++;
      console.log(count);
    };
  }
  const increment = counter();
  increment(); // Outputs: 1
  increment(); // Outputs: 2

  //higher order function
  function multiplyBy(factor) {
    return function (number) {
      return factor * number;
    };
  }
  
  const double = multiplyBy(2);
  console.log(double(5)); // Outputs: 10
  
  
  