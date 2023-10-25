/* ***************** if/else condition */
let age = 16;
if(age>=18){
    console.log("user can play ddlc");
} else{
    console.log("not eligible to play");
}
let num = 14;
if((num%2)==0){
    console.log("even")
} else {
    console.log("odd")
}

/* **Short-Circuiting**:
   - JavaScript logical operators support short-circuiting.
    In an `&&` operation, if the first operand is `false`, 
    the second operand is not evaluated, since the overall 
    result will be `false`. Similarly, in an `||` operation, 
    if the first operand is `true`, the second operand is not
     evaluated because the result will be `true`.
 */