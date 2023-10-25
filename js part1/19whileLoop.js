/* ******************WHILE LOOP********************
The condition is evaluated before each iteration of the loop.
If the condition is true, the code inside the loop's curly braces is executed.
After executing the code inside the loop, the condition is evaluated again.
If the condition is still true, the loop continues to execute.
This process repeats until the condition becomes false. Once the condition is false,
 the loop terminates, and the program continues with the code after the loop. */
 let i = 0;
 while (i<5) {
    console.log(`${i+1} iteration of the loop`);
    i++;
    
 }
 /* In this example, the while loop continues to execute as long as the count 
 variable is less than or equal to 5. Inside the loop, it prints the value of 
 count, increments it by 1 with count++, and then rechecks the condition.

It's important to be cautious when using while loops because if the condition 
never becomes false, you can end up with an infinite loop, which will cause your
program to hang. To avoid this, make sure that your condition eventually becomes
false or include a mechanism to exit the loop, such as using the break statement. */