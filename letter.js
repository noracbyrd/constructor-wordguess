function Letter(character,guessed) {
    this.character = character;
    this.guessed = false;
    this.isGuessed = function(){
        if (guessed){
            return this.character;
        } else {
            return "_";
        }
    }
    this.userGuess = function(guess){
        if (guess === this.character){
            this.guessed = true;
        } 
    }
}

module.exports = Letter;