var cpuChoices = ["Raptor", "T-Rex", "Danger", "Jeep", "Barbosol", "Jurassic", "DNA", "Evolution", "Darwin", "Chaos", "Lethal", "Extinct"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guess = []

document.onkeyup = function(event){
    var userGuess= event.key;
    var cpuGuess = cpuChoices[Math.floor(Math.random() * cpuChoices.length)];
// alex's help
      for (var i =0; i <pickedWord.length; i++){
        if (pickedWord[i].toLowerCase() === userGuess) { pickedWordPlaceHolder[i] = pickedWord[i];}
      }

      if (!pickedWordPlaceHolder.toLowerCase(userGuess)){guessesLeft--;
      }

      // if userguess is a character in the computer choice, then make the character visible. If not display a line or a box for where the letter should go. Also if the user guesses wrong guessess left --.
    if (userGuess === cpuGuess) { wins++
    guessesLeft=9;
    guess = []}
      
      else {
        guessesLeft--
        guess.push(userGuess);
      }
      if (guessesLeft === 0) { guessesLeft =9;
      losses++
      guess = [];} 

      var html = "<p> Wins: " + wins + "</p>" + 
      "<p> Losses: " + losses + "</p>" +
      "<p> Guesses Left: " + guessesLeft + "</p>" +
      "<p> Your Guesses so far: " + guess.join(", ") + "</p>";

      document.querySelector("#game").innerHTML = html;


}