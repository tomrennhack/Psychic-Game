// WEEK 3 HOMEWORK - PSYCHIC GAME (BASIC)

// set out game variables: listOfLetters, winsCount, lossesCount, guessesLeft, lettersGuessed
var listOfLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var winsCount = 0;
var lossesCount = 0;
var guessesLeft = 9;
var lettersGuessed = [];

// set our HTML facing variables
var gameTitle = document.getElementById("game-title");
var gameInstructions = document.getElementById("game-instructions");
var pressAnyKey = document.getElementById("press-any-key");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");
var lettersText = document.getElementById("letters-text");

// set default values for HTML
gameTitle.textContent = "The Psychic Game";
gameInstructions.textContent = "Guess what letter I'm thinking of (and don't check the console!)";
pressAnyKey.textContent = "Press any key to begin.";
winsText.textContent = "Wins: ";
lossesText.textContent = "Losses: ";
guessesText.textContent = "Guesses Left: ";
lettersText.textContent = "Letters Already Guessed: ";

// select random letter from the listOfLetters
var randomLetter = listOfLetters[Math.floor(Math.random() * listOfLetters.length)];
console.log("Original Random Letter: " + randomLetter);

// user starts by pressing a key
document.onkeyup = function (event) {

    // set variable to capture the user's guess
    var userGuess = event.key;

    // set range of acceptableGuesses as the listOfLetters
    var acceptableGuesses = listOfLetters;

    // if the key is acceptable...
    if (acceptableGuesses.indexOf(userGuess) > -1) {

        // check if the guess is correct
        if (userGuess === randomLetter) {

            // if yes, add to wins count and reset the game with a new randomLetter
            winsCount++;
            guessesLeft = 9;
            lettersGuessed = [];
            randomLetter = listOfLetters[Math.floor(Math.random() * listOfLetters.length)];
            console.log("You won! New letter: " + randomLetter);
        }

        // check if the incorrect guess was already in the lettersGuessed array
        if (!lettersGuessed.includes(userGuess) && !lettersGuessed.includes(" " + userGuess)) {

            // not there? add new wrong guess to the list and reduce guessesLeft by 1
            lettersGuessed.push(" " + userGuess);
            guessesLeft--;
        }

        // if guessesLeft is 0, user has lost and the game resets
        if (guessesLeft === 0) {
            lossesCount++;
            guessesLeft = 9;
            lettersGuessed = [];
            randomLetter = listOfLetters[Math.floor(Math.random() * listOfLetters.length)];
            console.log("You lost. New letter: " + randomLetter);
        }

    }

    // update the HTML
    winsText.textContent = "Wins: " + winsCount;
    lossesText.textContent = "Losses: " + lossesCount;
    guessesText.textContent = "Guesses Left: " + guessesLeft;
    lettersText.textContent = "Letters Already Guessed: " + lettersGuessed;

}

