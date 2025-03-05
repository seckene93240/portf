let burger = document.querySelector(".haha")
let spé1=document.querySelector(".spé1")

let liste1=document.querySelector(".liste1")
let button=document.querySelector("button")
let li =document.querySelector("li")
let projet=document.querySelector(".projet")
let projet1=document.querySelector(".projet1")
let gauche=document.querySelector(".gauche")
let droit =document.querySelector(".droit")
let boss =document .querySelector(".boss")
let chef =document .querySelector(".chef")
let chef2 =document .querySelector(".chef2")
burger.addEventListener("click",()=>{
        
    spé1.style.display="block"
    burger.style.display="none"
    spé1.style.zIndex = "1";

   
  
})



button.addEventListener("click",()=>{
    spé1.style.display="none"
    
      
    liste1.style.marginTop = "3%";
    li.style.marginTop="0%"
    droit.style.display="flex"
    gauche.style.display="flex"
    boss.style.display="flex"
    projet.style.display="flex"
    projet1.style.display="flex"

    projet.style.justifyContent = 'center';
    projet.style.alignItems = 'center'
 if (window.innerWidth < 900) {
       burger.style.display="block"
 }
 else{
     burger.style.display="flex"
 }
})
window.addEventListener('resize', () => {
    if (window.innerWidth < 1000) {
        burger.style.display = "block";
        spé1.style.display="none"
        
    } else {
        burger.style.display = "flex";
          spé1.style.display="flex"
    }
})


