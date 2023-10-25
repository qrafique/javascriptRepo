var element = document.createElement('p');
element.textContent = 'hello, this paragraph has been created by javaScript';
document.body.appendChild(element);
alert('code through js');
let fName = prompt('what is your name?');
alert(`${fName} isn't allowed...`);
var age = prompt("How old are you?");
console.log(age); 
let result = window.confirm("Do you agree?");
if(result){
    element = document.createElement('p');
element.textContent = `congratulations! Mr. ${fName}  has agreed all the terms and conditions `;
document.body.appendChild(element);
}
else {
    element = document.createElement('p');
    element.textContent = `sorry! Mr. ${fName}  has declined your proposal, try next time `;
    document.body.appendChild(element);
}
