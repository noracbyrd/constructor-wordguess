var Word = require("./word.js");
var secret = require("./secrets.js");
var inquirer = require("inquirer");


var turns = 11;
var mysteryWord = new Word(secret.randomWord());
mysteryWord.letterGen();
mysteryWord.wordString();

var game = function () {
    if (turns > 0) {
        inquirer
            .prompt([
                {
                    message: "Guess a letter!",
                    name: "letterGuess",
                    // need some kind of validation for if user enters non-letter key
                }
            ]).then(function (ans) {
                // mysteryWord.letterGen();
                // mysteryWord.guessTime(ans.letterGuess);
                var theGuess = ans.letterGuess.toUpperCase();
                for (var i in mysteryWord.theWord) {
                    if (theGuess === mysteryWord.theWord[i].character) {
                        console.log("Correct letter!");
                        console.log(turns);
                        mysteryWord.stringy = "";
                        // mysteryWord.theWord[i].userGuess(ans.letterGuess);
                        mysteryWord.guessTime(theGuess);
                        mysteryWord.wordString();
                        
                    } else {
                        // console.log("Wrong letter!");
                        mysteryWord.guessTime(theGuess);
                    }

                }
                if (mysteryWord.stringy === mysteryWord.shh) {
                    console.log("Congrats! On to the next word...");
                    mysteryWord = new Word(secret.randomWord());
                    mysteryWord.letterGen();
                    mysteryWord.wordString();
                    turns = 11;
                    game();
                } else{

                turns--;
                game();
                }
            }).catch(function (err) {
                console.log(err);
            })
    } else {
        console.log("Game Over!");
    }

}
game();