// The word guess game logic!

// Including our custom modules and the ever-useful Inquirer module:
var Word = require("./word.js");
var secret = require("./secrets.js");
var inquirer = require("inquirer");

// Setting the conditions for the first round
var turns = 11;
// below, calling the secret word's random word method, which selects a mystery word from my array of words in the secrets.js file. Don't peek at that file!! ;-)
var mysteryWord = new Word(secret.randomWord());
// calling the array-making function on our newly minted mystery word:
mysteryWord.letterGen();
// calling the initial word-in-progress function so the user sees the empty word and can start guessing:
mysteryWord.wordString();

// the recursive function that holds the game logic:
var game = function () {
    // checking that the user has turns left:
    if (turns > 0) {
        inquirer
            .prompt([
                {
                    message: "Guess a letter!",
                    name: "letterGuess",
                    // need some kind of validation for if user enters non-letter key
                }
            ]).then(function (ans) {
                // tracker is essentially a flag to see if a guessed letter was correct - if the letter appears anywhere in the word, we'll add to the tracker, so that if the letter doesn't appear anywhere in the below for loop the tracker stays at 0 and we know the letter was wrong:
                var tracker=0;
                // making sure if the user types lower case it still gets counted:
                var theGuess = ans.letterGuess.toUpperCase();
                // the for loop to compare the user guess to the letters in the mystery word:
                for (var i in mysteryWord.theWord) {
                    if (theGuess === mysteryWord.theWord[i].character) {
                        console.log("Correct letter!");
                        console.log(`${turns} turns left!`);
                        // emptying "stringy" so that it doesn't add the word to itself over and over, which it totally did when I was building this at first, and frankly it took me wayyyy to long to realize I needed to do this...anyway... :
                        mysteryWord.stringy = "";
                        // calling the guess checker:
                        mysteryWord.guessTime(theGuess);
                        // rebuilding "stringy" so the user can see their word-in-progress:
                        mysteryWord.wordString();
                        // incrementing the tracker to mark that a correct word was guessed:
                        tracker++;
                    } else {
                        // console.log("Wrong letter!");
                        mysteryWord.guessTime(theGuess);
                    }
                // letting user know they guessed a wrong letter and how many turns are left:
                } if (tracker===0){
                    console.log("wrong letter");
                    console.log(`${turns} turns left!`);
                    turns--;
                }
                // if the user guesses the whole word:
                if (mysteryWord.stringy === mysteryWord.shh) {
                    console.log("Congrats! On to the next word...");
                    // choosing the next mystery:
                    mysteryWord = new Word(secret.randomWord());
                    // initializing the new word:
                    mysteryWord.letterGen();
                    mysteryWord.wordString();
                    turns = 11;
                    game();
                } else{
                // the word's not guessed yet, so get a new user letter guess and run through everything again!
                game();
                }
            }).catch(function (err) {
                console.log(err);
            })
     // turns are run down to zero and the game is over:       
    } else {
        console.log("Game Over!");
    }

}

// the official call to start the game!
game();