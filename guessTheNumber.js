const randomNumber = parseInt((Math.random() * 100 + 1))
console.log(randomNumber);

const Submit = document.querySelector('#subt'); 
const userInput = document.querySelector('#guessField'); 
const guessSlot = document.querySelector('.guesses'); 
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    Submit.addEventListener('click', (e)=>{
        e.preventDefault()
        let guess = parseInt(userInput.value)
        validGuest(guess)
    })
}

// TO CHECK WHETER THE USER INPUT IS VALID OR NOT
function validGuest(guess){
    if(isNaN(guess)){
        alert(" Pleace  Enter A Valid Number ")
    } else if(guess < 1){
        alert(" Pleace  Enter A Number Greter Then 1 ")
    } else if(guess > 100){
        alert(" Pleace  Enter A Number Smaller Then 100 ")
    }else{
        checkGuess(guess)
    }
}

// TO CHECK WHETER THE USER GUESS IS RIGHT OR NOT
function checkGuess(guess){
    if(randomNumber === guess){
        lowOrHi.innerHTML = ` YOU GUESSED IT RIGHT ${guess}`
    }else if(randomNumber > guess){
        lowOrHi.innerHTML = ` YOU GUESSED IT TOO LOW ${guess}`
    }else if(randomNumber < guess){
        lowOrHi.innerHTML = ` YOU GUESSED IT TOO HIGH ${guess}`
    }
} 

// TO DISPLAY THE GUESS WHETER THE INPUT NUMBER IS RIGHT OR NOT 
function displayGuess(guess){
    //
}

// TO DISPLAY MESSAGE TO USER 
function displayMessage(Message){
    //
}

function newGame(){
    //
}

// END GAME
function endGame(){
    //
}
