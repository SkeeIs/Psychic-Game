// declare initial variables
var wins = 0;
var losses = 0;
var startingGuesses = 9;
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var guessHistory = [];
var userGuess;
var randomLetter;
var guessLeft = startingGuesses;

//assigns the span html elements to the values of variables guessesLeft & guessHistory
function setVars () {
document.getElementById("remaining-guesses").textContent = guessLeft;
document.getElementById("wins-text").textContent = wins;
document.getElementById("losses-text").textContent = losses;
document.getElementById("guessed").textContent = guessHistory;
}
//a function to get a random letter from alphabet array
function alphaPicker () {
  randomLetter =  alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log(randomLetter);
}

//a function to reset the game
function reset () {
    guessLeft = startingGuesses;
    guessHistory = [];
  }

//reset the game to start & assign the variable randomLetter to the output of function alphaPicker
setVars ();
alphaPicker ();


//initiate guessing game funcion upon key press (& release)
document.onkeyup = function(event) {
   
    //assign variable userGuess to the key pressed above and push the userGuess to array guessHistory & update HTML
    userGuess = event.key;
    
    
    
    //make sure user's guess is a-z
    if (alphabet.includes(userGuess)) {
        
        //console.log(alphabet.includes(userGuess));
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
        }

        //incorrect guess logic
        else if (userGuess !== randomLetter) {
        guessLeft--;
        guessHistory.push(userGuess);
        setVars();
          if (guessLeft < 1) {
            document.getElementById("instructions").textContent = ("Out of guesses! Try again!");
            reset();
          }
        }  
      } 
    }  
    //alert user to guess a-z if input isn't a letter
    else {
      document.getElementById("instructions").textContent = ("Please guess a letter a-z!");
    }    
}