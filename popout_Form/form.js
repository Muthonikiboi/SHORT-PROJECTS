const container=document.querySelector(".container");
const popupContainer=document.querySelector(".popup-container");
const btn=document.querySelector(".btn");
const icon=document.querySelector(".close-icon");

btn.addEventListener("click",()=>{
    container.classList.add("active");
    popupContainer.classList.remove("active");
})
icon.addEventListener("click",()=>{
    container.classList.remove("active");
    popupContainer.classList.add("active");
})
