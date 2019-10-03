function Letter(character,guessed) {
    this.character = character;
    this.guessed = false;
    this.isGuessed = function(){
        if (guessed){
            console.log(this.character);
            return this.character;
        } else {
            console.log("_");
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


