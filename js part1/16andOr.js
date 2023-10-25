/* **********and /or operators ****************
Logical operators in JavaScript are used to perform logical operations on boolean values,
 which can help control the flow of your code and make decisions based on conditions. 
 There are three primary logical operators in JavaScript: `&&` (logical AND), `||` (logical OR),
  and `!` (logical NOT). Here's a detailed explanation of each:

1. **Logical AND (`&&`)**:
   - The `&&` operator returns `true` if both operands are `true`; otherwise, it returns `false`.
   - Example: `if (x > 5 && y < 10) { /code here  }` will execute the code block if both conditions
    are met.

2. **Logical OR (`||`)**:
   - The `||` operator returns `true` if at least one of its operands is `true`; it returns `false
   ` only if both operands are `false`.
   - Example: `if (age < 18 || hasParentalConsent) {  code here }` will execute if either condition 
   is true.

3. **Logical NOT (`!`)**:
   - The `!` operator is used to negate a boolean value. It returns `true` if the operand is `false`,
    and vice versa.
   - Example: `if (!isLoggedIn) { code here }` executes if the `isLoggedIn` variable is `false`.

4. **Use Cases**:
   - Logical operators are commonly used in conditional statements (`if`, `else if`, `else`) to control program flow based on conditions.
   - They are also used in conjunction with functions and loops to make decisions and control the execution of code.

5. **Precedence**:
   - Logical NOT (`!`) has the highest precedence, followed by `&&`, and then `||`. Parentheses can be used to change the order of evaluation.

6. **Type Coercion**:
   - JavaScript performs type coercion when using logical operators. This means non-boolean values are coerced to booleans for evaluation.
   - Example: `if (0 && 'Hello')` evaluates to `false` because `0` is falsy.

8. **Best Practices**:
    - Use logical operators with care, and ensure that your code's intent is clear.
    - Use parentheses to clarify complex expressions and avoid unexpected behavior due to operator precedence.

*/

let firstName = 'Qasim';
let age = 22;

if(firstName[0]=='Q' && age>20){
   console.log("yes you are qualified!")


} else {
   console.log("not qualified!")
}
if(firstName || age < 20){
   console.log("well done")
} else{
   console.log("sorry!")
}

if(!firstName){
   console.log("not tested if true")
} else {
   console.log("not tested if falsy")
}