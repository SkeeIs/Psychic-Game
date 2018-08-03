# Psychic-Game

Learning to implement game logic in javascript


# Link to deployed site
[Psychic Game](https://skeeis.github.io/Psychic-Game/)


# Images
![Psychic Game](https://i.imgur.com/NRMrs36.jpg)

# technology used

- HTML
- Javascript
- CSS

# code snippets
```
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
```


# Learning points
I learned how to create conditions using if statements. I learned how to get a random element from an array. 

# Author 
Taylor Skeels

