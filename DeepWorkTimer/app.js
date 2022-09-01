let [seconds,minutes,hours] = [0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let poms = document.querySelector('.nrofpoms');
let deepworks = document.querySelector('.nrofdeeps')
let int = null;






var deepSessions = 0;


//let emo = {3: document.querySelector('.emo2')}, num = 3;  







//let emo1 = document.querySelector('.emo1');
//var emonumber = 2;
//emo`${emonumber}`.style.display= 'block'



document.addEventListener('DOMContentLoaded', getDeeps)

//Load number from local storage

function getDeeps() {

    let Lions;
        if(localStorage.getItem('Lions') === null){
            Lions=[];
            console.log("nothing here")
            
        } else {
            Lions = JSON.parse(localStorage.getItem('Lions'))
            console.log("something here")
        }
   
     
        if (Lions === 1) {
            document.getElementById("demo").innerHTML += '🐴';

        }

        if (Lions === 2) {
            console.log("Two Lions")   
            document.getElementById("demo").innerHTML += '🐴';

        }

        if (Lions === 3) {
            console.log("Three Lions")   
            document.getElementById("demo").innerHTML += '🐴';
        }
    }



const nroflions = localStorage.getItem('Lions');

//if (nroflions == 1) {
   // emo1.style.display = 'block' 
//}

//if (nroflions == 2 ) {
    //emo1.style.display = 'block' 
    //emo2.style.display ='block'
//}


//Check nr of lions that are saved in local storage



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

        if (seconds == 5) {
            document.getElementById("demo").innerHTML += '🐴';
            localStorage.setItem('Lions','1')
        }

        if (seconds == 8) {
            document.getElementById("demo").innerHTML += '🐴';
        }

        if (seconds == 11) {
            document.getElementById("demo").innerHTML += '🐴';
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
    demo.style.display = 'none';
    localStorage.clear();

});

// Pause Timer

document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});

// Creating a date with mm/dd/yyyy format
const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = dd + '/' + mm + '/' + yyyy;

//Displaying data on app
document.getElementById('date').innerHTML = formattedToday;





