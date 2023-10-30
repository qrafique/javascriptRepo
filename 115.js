console.log("hello world");
const allBtn = document.querySelectorAll(".my-button button");
console.log(allBtn);
// allBtn.addEventListener("click", ()=>{
//     console.log("you clicked btn 1");
// });
// for (const button  of allBtn) {
//    button.addEventListener("click", function () {
//         console.log(button.textContent);
//    })
// }
// for (let index = 0; index < allBtn.length; index++) {
//     allBtn[index].addEventListener("click", function (params) {
//         console.log(this.textContent);
//     })
    allBtn.forEach(function(button) {
        button.addEventListener("click",function() {
            console.log(this.textContent);
        })
    });
