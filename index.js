let burger = document.querySelector(".haha")
let spé1=document.querySelector(".spé1")
let haha=document.querySelector(".haha")
let liste1=document.querySelector(".liste1")
let button=document.querySelector("button")
burger.addEventListener("click",()=>{
    spé1.style.display="block"
    burger.style.display="none"
    spé1.style.zIndex = "1";
   
    liste1.style.marginTop = "-4%";
})


button.addEventListener("click",()=>{
    spé1.style.display="none"
    burger.style.display="block"
      
    liste1.style.marginTop = "3%";
   
   
})