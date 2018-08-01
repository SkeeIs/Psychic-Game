// declare initial variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var guessHistory = [];
var userGuess;
var randomLetter;

//a function to get a random letter from alphabet array
function alphaPicker (letters) {
    letters[Math.floor(Math.random() * letters.length)];
}

//a function to reset the game
function reset (newGame) {
    wins = 0;
    losses = 0;
    guessesLeft = 9;
    guessHistory = [];
    console.log(randomLetter);
}

//initiate guessing game funcion upon key press (& release)
document.onkeyup = function(event) {
   
    //assign variable userGuess to the key pressed above
    userGuess = event.key;
    guessHistory.push(event.key);

    //assigns the span html elements to the values of variables guessesLeft & guessHistory
    document.getElementById("remaining-guesses").textContent = guessesLeft;
    document.getElementById("guessed").textContent = guessHistory;
}
//logic for condition check letter hasn't already been guessed
//correct guess logic
if (userGuess === randomLetter) {
    wins++;
    reset();
}

//incorrect guess logic
else if (userGuess !== randomLetter) {
        guessesLeft--;

    }
