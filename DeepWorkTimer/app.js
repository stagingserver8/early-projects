let [seconds,minutes,hours] = [0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let poms = document.querySelector('.nrofpoms');
let deepworks = document.querySelector('.nrofdeeps')
let int = null;

let emo = document.querySelector('.emojis');

let emo1 = document.querySelector('.emo1');
emo1.style.display = 'none' 
let emo2 = document.querySelector('.emo2');
emo2.style.display = 'none' 
let emo3 = document.querySelector('.emo3');
emo3.style.display = 'none' 
let emo4 = document.querySelector('.emo4');
emo4.style.display = 'none' 
let emo5 = document.querySelector('.emo5');
emo5.style.display = 'none' 
let emo6 = document.querySelector('.emo6');
emo6.style.display = 'none' 
let emo7 = document.querySelector('.emo7');
emo7.style.display = 'none' 

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

        if (hours >= 2 && minutes === 0) {
            deepSessions++;
            deepworks.innerHTML = deepSessions;
        }

        if (seconds == 10) {
            emo1.style.display = 'block'

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

// Messing around with the date. Creating a date with mm/dd/yyyy format

const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = dd + '/' + mm + '/' + yyyy;

document.getElementById('date').innerHTML = formattedToday;