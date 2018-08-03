# Psychic-Game

Learning to implement game logic in javascript


# Link to deployed site
[Psychic Game](https://skeeis.github.io/Psychic-Game/)


# Images
![Psychic Game](https://i.imgur.com/02C6zSS.png)

# technology used

- HTML
- Javascript

# code snippets
```
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
```


# Learning points
I learned how to 

# Author 
Taylor Skeels

