const timer = document.querySelector(".pomodoroTimer");
const btn_Pomodoro = document.getElementById("PomodoroShow");
const workTime = 25;
const breakTime = 5;

let seconds = "00";
let setIntervalTimer;

//Chama Pomodoro Timer
btn_Pomodoro.addEventListener("click", function(){
    if(timer.style.display === "none"){
        timer.style.display = "block";
    }else{
        timer.style.display = "none";
    }
});

window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

}

function start(){
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    let timerfunction = () => {
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        seconds -= 1;

        if(seconds === 0 ){
            workMinutes -= 1;
            if(workMinutes === -1){
                if(breakCount % 2 === 0){
                    workMinutes = breakMinutes;
                    breakCount++;

                }else{
                    workMinutes = workTime;
                    breakCount++;

                }
            }

            seconds = 59;
        }
    }

    setIntervalTimer = setInterval(timerfunction, 1000); //1000 = 1s
}

function reset() {
    clearInterval(setIntervalTimer)
    // Reseta os valores
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = "00";

    // Reexibe o botão de iniciar e oculta o de reset
    document.getElementById('start').style.display = "block";
    document.getElementById('reset').style.display = "none";

}


