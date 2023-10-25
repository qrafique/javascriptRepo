function createUser(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;

    return `First Name: ${fName} Last Name: ${lName} Age: ${age}`
    
}

const user1 = new createUser('qasim', 'rafique', 8);

console.log(user1);