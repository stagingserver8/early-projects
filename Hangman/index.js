// Defining DOM Elements

const wordEl = document.getElementById('word');;
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popup= document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');


// Figure parts

const figureParts = document.querySelectorAll('.figure-part');

const words = ['milan', 'moscow', 'doha', 'poznan', 'szczecin', 'wolin', 'miedzyzdroje', 'paris', 'yerevan', 'gdansk', 'berlin', 'lagos', 'lisbon', 'bali', 'torino', 'warsaw', 'madrid'];

//Select a random word
let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters=[];
const wrongLetters =[];



//Show the hidden word
function displayWord(){
    
    // Need to turn a string into an array first
    wordEl.innerHTML = `
    
    
    `

}



displayWord()