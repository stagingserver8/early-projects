// Select time how often it changes
var chord = document.getElementById('chord');
var chords = ['C', 'D', 'Dm', 'A', 'Am', 'E', 'Em', 'G', 'G7'];


document.getElementById('start').addEventListener('click', start)
document.getElementById('stop').addEventListener('click', stop)

function stop() {
document.location.reload()
}

function start() {
    chord.innerHTML = "Ready to go?"
    setInterval(myMethod, 2000);

function myMethod( )
{
    chords = chords.sort(() => Math.random() - 0.5);
    chord.innerHTML = chords[1];
}

setInterval(fchord, 6000);

function fchord() {
    chord.innerHTML = "F";
}
  
}



