//DOM (DOUMENT OBJECT MODEL)
const mainHeading = document.getElementById("main-heading");
mainHeading.textContent = "do not manage tasks";
mainHeading.innerHTML = "hello again changed";
const h2 = document.querySelector("div.headline h2");
h2.innerHTML = "once again changed";
h2.style.color ="blue";
h2.style.backgroundColor ="white";
h2.style.border ="6px solid green";


const link = document.querySelector("a");
console.log(link.getAttribute("href"));
const inputElement =document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));

link.setAttribute("href","https://www.google.com");

const navItems = document.getElementsByTagName("a");
//console.log(navItems);
for (let index = 0; index < navItems.length; index++) {
    const navItem = navItems[index];
    navItem.style.backgroundColor = "#fff2";
    navItem.style.color= "blue";
    navItem.style.fontWeight= "bold";
    
}

for (let iterator of navItems) {
    iterator.style.color = "white";

}