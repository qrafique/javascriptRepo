/* **********optional chaining****************
Optional chaining is a feature in JavaScript introduced in ECMAScript 2020 (ES11/ES2020) that allows 
you to access properties and methods of an object without having to explicitly check if each 
intermediate property or object exists. It is particularly useful for working with nested objects 
and avoiding "Cannot read property 'x' of undefined" errors. Optional chaining is denoted by the 
question mark (?) operator.
*/

const person = {
    fName: 'Qasim',
    age: 54
};
console.log(person?.age);
console.log(person?.lName);


//calling method that doesn't exist
const car = {
    make: "Toyota",
    // Uncomment the following function to see the difference
    // startEngine: function() {
    // console.log("Engine started.");
    // }
};

car?.startEngine?.(); // If startEngine is missing, it won't throw an error.

//Chaining multiple optional properties and methods:
const data = {
    user: {
        profile: {
            email: "user@example.com",
            getFullName: function () {
                return "John Doe";
            }
        },
        
        
    }
};

const fullName = data.user?.profile?.getFullName?.(); // Won't throw an error if any part is missing.
console.log(fullName); // Outputs 'undefined' if any part is missing.
