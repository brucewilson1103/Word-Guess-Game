var cpuChoices = [
  "Raptor",
  "T-Rex",
  "Danger",
  "Jeep",
  "Barbosol",
  "Jurassic",
  "DNA",
  "Evolution",
  "Darwin",
  "Chaos",
  "Lethal",
  "Extinct"
];
var cpuGuess = "";
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guess = [];
var pickedWordPlaceHolder = "";
var pickedWord 

function newgame() {
  cpuGuess = cpuChoices[Math.floor(Math.random() * cpuChoices.length)];
  guess = [];
  guessesLeft = 9;
  pickedWordPlaceHolder = "";
  console.log(cpuGuess);
  for (var i = 0; i < cpuGuess.length; i++) {
    console.log(cpuGuess);

    if (pickedWordPlaceHolder[i] === " ") {
      pickedWordPlaceHolder += " ";
    } else {
      pickedWordPlaceHolder += "_";
    }
  }
  console.log(pickedWordPlaceHolder);
  document.getElementById("placeholders").textContent = pickedWordPlaceHolder;

  var html =
    "<p> Wins: " + wins + "</p>" + "<p> Losses: " + losses +   "</p>" +
    "<p> Guesses Left: " + guessesLeft + "</p>" +
    "<p> Your Guesses so far: " +  guess.join(", ") +"</p>";

  document.querySelector("#game").innerHTML = html;
}

newgame();
document.onkeyup = function(event) {
  var userGuess = event.key;
  pickedWordPlaceHolder = pickedWordPlaceHolder.split("");

  // // alex's help
  for (var i = 0; i < cpuGuess.length; i++) {
    if (cpuGuess[i].toLowerCase() === userGuess) {
        console.log("this hit");
    
      pickedWordPlaceHolder[i] = cpuGuess[i];
    }
  }

  pickedWordPlaceHolder = pickedWordPlaceHolder.join("");

  document.getElementById("placeholders").textContent = pickedWordPlaceHolder;


  if (!pickedWordPlaceHolder.toLowerCase().includes(userGuess)) {
    guessesLeft--;
    guess.push(userGuess);
  }

  //       // if userguess is a character in the computer choice, then make the character visible. If not display a line or a box for where the letter should go. Also if the user guesses wrong guessess left --.
  if (pickedWordPlaceHolder === cpuGuess) {
    wins++;
// I am so proud of myself for adding in the audio below!!! 
    var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'assets/javascript/JPtheme.m4a');
audioElement.play();
    newgame();
  } 

  if (guessesLeft === 0) {
    losses++;
    newgame();
  }

  var html =
    "<p> Wins: " + wins + "</p>" + "<p> Losses: " + losses +   "</p>" +
    "<p> Guesses Left: " + guessesLeft + "</p>" +
    "<p> Your Guesses so far: " +  guess.join(", ") +"</p>";

  document.querySelector("#game").innerHTML = html;
};

