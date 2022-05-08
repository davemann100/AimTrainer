let timerInterval;
let gameStarted = false;

function startGame(){
    document.getElementById("timer").innerHTML = "30";
    document.getElementById("score").innerHTML = "0";
    clearInterval(timerInterval);
    timerInterval = window.setInterval(changeTime, 1000);
    gameStarted = true;
    reposition();
}

function changeTime(){
    let timerEl = document.getElementById("timer");
    let timeLeft = parseInt(timer.innerHTML);
    if(timeLeft > 0){
        timerEl.innerHTML= timeLeft -1;
    }else{
        clearInterval(timerInterval);
        gameStarted = false;
    }
}

function targetClick(){
    if(gameStarted){
        let scoreEl = document.getElementById("score");
        scoreEl.innerHTML = parseInt(scoreEl.innerHTML)+ 500;

        reposition();
    }
}

function fail(){
    if(gameStarted){
        let scoreEl = document.getElementById("score");
        scoreEl.innerHTML = parseInt(scoreEl.innerHTML) - 100;
    }
}

function reposition(){
    let targetEl = document.getElementById("target");
    let xpos = Math.floor(Math.random()*470);
    let ypos = Math.floor(Math.random()*470);

    targetEl.style.left = xpos + "px";
    targetEl.style.top = ypos + "px";
}