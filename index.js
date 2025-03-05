let burger = document.querySelector(".haha")
let spé1=document.querySelector(".spé1")

let liste1=document.querySelector(".liste1")
let button=document.querySelector("button")
let li =document.querySelector("li")

let gauche=document.querySelector(".gauche")
let droit =document.querySelector(".droit")
let boss =document .querySelector(".boss")
burger.addEventListener("click",()=>{
        
    spé1.style.display="block"
    burger.style.display="none"
    spé1.style.zIndex = "1";

    liste1.style.marginTop = "-4%";
    droit.style.display="none"
    gauche.style.display="none"
    boss.style.display="none"
   li.style.marginTop="100%"

})



button.addEventListener("click",()=>{
    spé1.style.display="none"
    
      
    liste1.style.marginTop = "3%";
    li.style.marginTop="0%"
    droit.style.display="flex"
    gauche.style.display="flex"
    boss.style.display="flex"
    burger.style.display="flex"
})


