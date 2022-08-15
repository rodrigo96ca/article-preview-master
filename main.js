console.log("este es mi documento")

const arrowIcon= document.querySelector(".arrow-icon");
const authorContainer= document.querySelector(".author-container")
const authorContainer2= document.querySelector(".author-container2");
const icon2=document.querySelector(".icon2");
const inactive= document.querySelector(".inactive")

function click(){
    console.log("si funciona");
    authorContainer.classList.add("inactive");
    authorContainer2.classList.remove("inactive");
     
}

function desaparecer(){
    
    authorContainer2.classList.add("inactive");
    authorContainer.classList.remove("inactive");
     
}

arrowIcon.addEventListener("click",click);
icon2.addEventListener("click",desaparecer);





