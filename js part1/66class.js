class User{
   constructor(firstName, lastName, age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
   }
   about(){
    return `Mr. ${this.firstName} ${this.lastName} is ${this.age} years old`;
   }
   


}
const user1 = new User('Qasim', 'rafiq', 32);
console.log(user1.about());