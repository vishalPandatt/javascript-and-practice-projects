
let popup = document.getElementById("popup");
let button = document.querySelector(".btn");
let button1 = document.querySelector(".btn1");

function openPopup(){
    popup.classList.add("open-popup");
};

function closePopup(){
    popup.classList.remove("open-popup");
};

button.addEventListener("click",()=>{
    openPopup();
});

button1.addEventListener("click",()=>{
    closePopup();
});