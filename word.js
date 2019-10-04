var Letter = require("./letter.js");


function Word(secretword) {
    this.theWord = [];
    this.stringy = "";
    this.shh = secretword;
    this.letterGen = function () {
        for (var i = 0; i < secretword.length; i++) {
            this.theWord.push(new Letter(secretword[i]));
        } 
    }
    this.wordString = function(){
        for (var i = 0; i<this.theWord.length; i++){
            this.stringy += this.theWord[i].isGuessed();
        } 
        console.log(this.stringy);
        return this.stringy;
    }
    // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    this.guessTime = function(char){
        //this function is a dumpster fire
        for (var i=0; i<this.theWord.length; i++) {
            this.theWord[i].userGuess(char);
    } 
}
}

// var special = new Word("special");
// special.letterGen();
// special.wordString();
// special.guessTime("A");

module.exports = Word;