function Letter(character) {
    this.character = character;
    this.guessed = false;
    this.isGuessed = function(){
        if (this.guessed){
            return this.character;
        } else {
            return "_ ";
        }
    }
    this.userGuess = function(guess){
        if (guess === this.character){
            this.guessed = true;
            this.isGuessed();
        } 
    }
}

module.exports = Letter;


