// declare initial variables
var wins = 0;
var losses = 0;
var startingGuesses = 9;
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var guessHistory = [];
var userGuess;
var randomLetter;
var guessLeft = startingGuesses;

//function that assigns the span html elements to the values of correlated variables
function setVars () {
document.getElementById("remaining-guesses").textContent = guessLeft;
document.getElementById("wins-text").textContent = wins;
document.getElementById("losses-text").textContent = losses;
document.getElementById("guessed").textContent = guessHistory;
document.getElementById("instructions").textContent = ("Read my mind; guess a letter a-z!");
}
//a function to get a random letter from alphabet array
function alphaPicker () {
  randomLetter =  alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log(randomLetter);
}

//a function to reset your guesses left & letters already guessed
function reset () {
    guessLeft = startingGuesses;
    guessHistory = [];
  }

//initiate setVars function & alphaPicker function to begin games
setVars ();
alphaPicker ();


//listen for the release of a key
document.onkeyup = function(event) {
   
    //assign variable userGuess to the key pressed above and push the userGuess to array guessHistory & update HTML
    userGuess = event.key;
    
    //condition to make sure user's guess is a-z
    if (alphabet.includes(userGuess)) {
        
        //condition to make sure user's guess is not a repeat
      if (guessHistory.includes(userGuess)) {
        document.getElementById("instructions").textContent = ("You already guessed that letter!");
      }
      else {     
        //user guess is correct   
        if (userGuess === randomLetter) {
        wins++;
        reset();
        alphaPicker();
        setVars();
        document.getElementById("instructions").textContent = ("You got it! Your psychic power is growing!");
        }

        //user guess is incorrect
        else if (userGuess !== randomLetter) {
        guessLeft--;
        guessHistory.push(userGuess);
        setVars();
          
          //keeps guesses left from going negative & increments losses
          if (guessLeft < 1) {
            document.getElementById("instructions").textContent = ("Out of guesses! Your fortune is fading!");
            reset();
            losses++;
          }
        }  
      } 
    }  
    //alert user to guess a-z if input isn't a letter
    else {
      document.getElementById("instructions").textContent = ("Read my mind; guess a letter a-z!");
    }    
}