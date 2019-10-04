// Constructor for each letter of the mystery word!

function Letter(character) {
    this.character = character;
    // setting initial state - no one's guessed it yet, so guessed is false
    this.guessed = false;
    this.isGuessed = function(){
            // once the letter's been guessed, the guessed flag is true, and we return the underlying character
        if (this.guessed){
            return this.character;
        // otherwise we'll show the placeholder underscore
        } else {
            return "_ ";
        }
    }
    this.userGuess = function(guess){
        // when the user guesses the right letter, we swap the guessed flag and display the hidden letter
        if (guess === this.character){
            this.guessed = true;
            this.isGuessed();
        } 
    }
}

module.exports = Letter;


