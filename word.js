var Letter = require("./letter.js");
var secret = require("./secrets.js");


function Word(secretword) {
    var theWord = [];
    this.letterGen = function () {
        for (var i = 0; i < secretword.length; i++) {
            theWord.push(new Letter(secretWord[i],false));
        }
    }
    this.wordString = function(){
        for (var char in theWord){
            char.userGuessed();
        }
    }
    this.guessTime = function(char){
        //this function is a dumpster fire
        char.userGuess(char)
    }
}


console.log(secret.secret.words.length);
console.log(secret.secret.words[0]);
console.log(secret.randomWord());

var attempt = new Word(secret.randomWord());
attempt.test();