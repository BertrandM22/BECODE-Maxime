// selecteurs
// document.querySelector('h4').style.background="green"

// const balisehtml= document.querySelector('h4')

// EVENT CLICK

const contQuest= document.querySelector('.click-event')
// ByID ( pas besoin de mettre le # vu qu'il chercher de lui même)
const clickBtn1= document.getElementById("btn1")
const clickBtn2= document.getElementById('btn2')
const reponse= document.querySelector("p");





contQuest.addEventListener('click',()=>{



// toggle est utliser comme un ON/OFF 
contQuest.classList.toggle("big-click")
})

clickBtn1.addEventListener('click',()=>{
    // ajouter une class CSS a l'element
reponse.classList.add("show-response")
reponse.style.background="green"
})
clickBtn2.addEventListener('click',()=>{
reponse.classList.add("show-response")
reponse.style.background="red"
})  

// --------------------------------------------------
// EVENT MOUSE
const mousemove= document.querySelector('.mousemove')
//window est au dessus de la page html
window.addEventListener('mousemove',(e)=>{
    // PageX et pageY pour que la l'effet suis bien la souris
mousemove.style.left=e.pageX+'px';
mousemove.style.top=e.pageY+'px';
})

    

window.addEventListener("mousedown",()=>{
    mousemove.style.transform= "scale(2) translate(-25%, -25%)"


})

window.addEventListener("mouseup",()=>{
    mousemove.style.transform= "scale(1) translate(-50%, -50%)"
    mousemove.style.border='3px solid red'


})
contQuest.addEventListener('mouseenter',()=>{
    contQuest.style.background= 'rgba(0,0,0,0.6)'
}) 
contQuest.addEventListener('mouseout',()=>{
    contQuest.style.background='blue'
})
reponse.addEventListener('mouseover',()=>{
reponse.style.transform="rotate(2deg)"
})