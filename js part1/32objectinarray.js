

    function person(name ,  age){
        this.name = name
        this.age =age

    }


p1 =new person('ali', 22);
p2 = new person('aslam',24);
const objectArray = [p1, p2];
console.log(objectArray);
console.log(objectArray[0].name, objectArray[1].age);
