// constructor for the overall secret word!

var Letter = require("./letter.js");

function Word(secretword) {
    // creating the empty array for storing the Letter objects:
    this.theWord = [];
    // creating the empmty string for storing the string version of the mystery word:
    this.stringy = "";
    // storing the string version of the word, so that later we can compare it to "stringy" and know when the user guessed the whole word:
    this.shh = secretword;
    // function to push the letter objects to our array:
    this.letterGen = function () {
        for (var i = 0; i < secretword.length; i++) {
            // if the word has a space in it, this will make sure we just push the empty space instead of a separate character the user would have to guess
            if (secretword[i]  === " "){
                this.theWord.push(" ");
            } else{
            // pushing normal letters to our array
            this.theWord.push(new Letter(secretword[i]));
            }
        } 
    }
    // function to build the word-in-progress as the user guesses letters:
    this.wordString = function(){
        for (var i = 0; i<this.theWord.length; i++){
            // again accounting for if the mystery word has a space in it, making sure that "stringy" has a space instead of a space character:
            if (this.theWord[i] === " "){
                this.stringy += " ";
            // when the user guesses a letter, we call the method from Letter since the letter has officially been guessed, and add the resulting character to our word-in-progress:
            } else{
            this.stringy += this.theWord[i].isGuessed();
            }
        } 
        // actually printing the word-in-progress to the console, so the user can see how much of the word they've guessed so far:
        console.log(this.stringy);
        return this.stringy;
    }

    this.guessTime = function(char){
        // function that takes the user guess and checks if it's a correct guess, and returning the appropriate character. Also, see below for a comment I wrote when I was in the middle of programming this game. I'm leaving it here as a record of my strugglebussing:
        //this function is a dumpster fire
        for (var i=0; i<this.theWord.length; i++) {
            // accounting for if there is a space in the mystery word
            if (this.theWord[i] === " "){
            } else {
            this.theWord[i].userGuess(char);
            }
    } 
}
}

module.exports = Word;