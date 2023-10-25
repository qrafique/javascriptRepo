class Person{
    constructor(firstName , lastName , age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName}  ${this.lastName}`
    }
    setName(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    set fullName(fullName){
        const [firstName,lastName]=fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;

    }
};

const p1 = new Person('qasim','rafique',8);
console.log(p1.fullName);
p1.setName('ali','azmat');
console.log(p1.fullName);
p1.fullName = "zahid ali";
console.log(p1.fullName);