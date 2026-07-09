let gameSeq = [];
let userSeq = [];

let btns = ["red", "grey", "yellow", "blue"];

let started = false;
let level = 0
let highestScore = 0;

let highScore = document.querySelector(".high-score");


let h2 = document.querySelector("h2");

document.addEventListener("keypress", () => {
    if(started == false){
        // console.log("Game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash"); //white flash
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash"); //green flash
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Score: ${level}`;
    

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("curr level : ", level);
 
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        if(level > highestScore){
            highestScore = level;
            highScore.innerText = `Highest Score: ${highestScore}`
        }
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press enter to play`

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }


}


function btnPress() {
    let btn = this;
    userFlash(btn);
    
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userColor);
    
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
