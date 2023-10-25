
userMethod= {

    about: function() {
        
        return `${this.fName} is ${this.age} years old `;
    },
    is18: function(){
        return this.age>=18;
    }
};

user = {

    fName: 'Qasim',
    lName: "rafique",
    age: 81,
    email: 'qrafique@gmail.com',
    adress: '72 liberty market, Lahore'
};
function createUser(fName,lName,age,email,address) {
    const user =Object.create(userMethod);
    user.fName = fName;
    user.lName =lName;
    user.age = age;
    user.email = email;
    user.address= address;
    return user;

}
const user1 = createUser('qasim','rafiq',9,'qrafique@gmail.com','56 lahore');
console.log(user1.about());
console.log(user1.is18());