/* ***********Do while loop ****************
A do...while loop in JavaScript executes a block of code once and then checks a specified condition.
 If the condition is true,  it continues to execute the block of code repeatedly until the condition 
 becomes false.

***************EXAMPLE *************** */
let count =1;

do {

    console.log(`This is ${count} iteration of the loop.`);
    count++;
    
} while (count<=5);


/* In this example:

We initialize a variable count to 1.
The do block contains code that prints a message and increments the count variable.
The while condition checks if count is less than or equal to 5.
Since the condition is true initially, the code block is executed at least once.
The loop continues to run until count becomes 6, at which point the condition 
becomes false, and the loop stops. */