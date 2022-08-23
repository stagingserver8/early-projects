let [seconds,minutes,hours] = [0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let poms = document.querySelector('.nrofpoms');
let deepworks = document.querySelector('.nrofdeeps')
let int = null;

var pomodoros = 0;
var deepSessions = 0;



// Runs the function displayTimer every 1 second (1000 ms)


document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,1000);
});

function displayTimer(){
    seconds+=1;
    
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }       
        }

        if (seconds === 10 || seconds === 20 || seconds==00) {
            pomodoros++;
            poms.innerHTML = pomodoros;
        }

        if (minutes >= 1 && seconds === 0) {
            deepSessions++;
            deepworks.innerHTML = deepSessions;
        }
    

    //Add one zero if hours is less than 10
 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;

 timerRef.innerHTML = ` ${h} : ${m} : ${s}`;
}
// https://dev.to/shantanu_jana/create-a-simple-stopwatch-using-javascript-3eoo


// Reset Timer

document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [seconds,minutes,hours] = [0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 ';
});

// Pause Timer

document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});