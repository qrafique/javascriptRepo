/* ************fOR LOOP IN JAVASCRIPT*************
A "for loop" in JavaScript is a control structure that allows you to repeatedly execute a block of
 code for a specified number of iterations or based on a specific condition. It typically consists 
 of three parts: initialization, condition, and iteration statement. The loop continues as long as 
 the condition evaluates to true, and the iteration statement updates the loop control variable in 
 each iteration. This loop is  commonly  used  for  tasks that require repetitive actions, such as 
 iterating through arrays or performing calculations. */
 

 for(let i=0; i<20; i++){
    for (let j = 0; j < i; j++) {
        process.stdout.write("*"); // Note the use of process.stdout.write
        
    }
    console.log("\n");
 }
 