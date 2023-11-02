console.log("script start .......");
const allBtn = document.querySelectorAll(".my-button button");
console.log(allBtn);
// allBtn.addEventListener("click", ()=>{
//     console.log("you clicked btn 1");
// });
// for (const button  of allBtn) {
//    button.addEventListener("click", function () {
//          console.log(button.textContent);
//    })
// }
// for (let index = 0; index < allBtn.length; index++) {
//     allBtn[index].addEventListener("click", function (params) {
//         console.log(this.textContent);
//     })
    allBtn.forEach((element)=>{
        element.addEventListener("click",(e)=>{
            let num =0;
            for (let index = 0; index < 1000000000; index++) {
                num+=1;
                
            }
            console.log(e.currentTarget.textContent, num);
        })
    })
    let n = 0;
    for (let index = 0; index < 100000000; index++) {
        n+=index;
        
    }
    console.log("value of outer var", n);
    console.log("script ends", n);