/* **********CALLBACK FUNCTION**********
In JavaScript, a callback function is a function that is passed as an argument to another function
 and is intended to be executed at a later time. Callback functions are a fundamental concept in 
 JavaScript and are often used for asynchronous operations, event handling, and other scenarios 
 where you need to execute code after a specific task has completed.
*/
function doSomething(callback){

    callback();


}

function callbackFunction(){
    console.log("call back executed");
}
doSomething(callbackFunction);

function  fetchdata(url, callback){
    setTimeout(() => {
        const data ={message: "data fetched successfuly!"};
        callback(data);
    }, 1000);
}

const handleDate=function(data){
    console.log(data.message);
}
fetchdata('www.google.com',handleDate)

//event handling in web environment
/* const h=document.querySelector("#hi");
document.getElementById('myButton').addEventListener("click",()=>{
    alert('hello para changed!')
    console.log("button pressed para changed!")
    
    h.innerHTML='hello new para';
}) */

function asynOperation(data , correctCallback, errCallback) {
    if(data){
        correctCallback(data);
    }else {
        errCallback('error occured');
    }
    
}
asynOperation('some data', function(result){
    console.log(`success: ${result}`)
},
function(err){
    console.log(`error:${err}`)
});