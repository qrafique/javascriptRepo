/* *********swich statements 
A switch statement in JavaScript is a control flow structure used to make decisions based 
on the value of an expression. It works by evaluating an expression and then matching its 
value to one of several possible case values. Here's a brief explanation in five lines:

Expression Evaluation: A switch statement begins with the evaluation of an expression, 
typically a variable or a function call, that produces a value.

Case Matching: The evaluated value is then compared to a list of case values specified within
 the switch statement.

Case Blocks: When a case value matches the evaluated value, the code within the corresponding
 case block is executed. If there's no match, the default case (if provided) is executed, or 
 the switch statement terminates.

Break Statement: After executing a case block, it's crucial to include a break statement to 
exit the switch statement; otherwise, execution will continue into subsequent case blocks.

Fallback (Default): It's common to include a default case as a fallback option for when none 
of the case values match the evaluated expression. This block is executed if no matches are 
found.*/

let days = "monday";
switch(days){
    case 'monday':
        console.log('first day of the week');
        break;
    case 'tuesday':
        console.log("second day of the week");
        break;

    default: 
        console.log('other days of the week may be!');

}
