let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","orange","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is started!");
        started = true;

        levelUp();
    }
});

 function btnFlash(btn){
    btn.classList.add("flash");
            
    setTimeout (function(){
    btn.classList.remove("flash");
 },1000);

function levelUp(){
   level++;
   h2.innerText = `Level ${level}`;

   let randIdx = Math.floor(Math.random()*3);
   let randCol = btns[randIdx];
   let ranBtn = document.querySelector(`.${randCol}`);
   console.log(randIdx);
   console.log(randCol);
   console.log(ranBtn);

   btnFlash(ranBtn);
        }
    }
