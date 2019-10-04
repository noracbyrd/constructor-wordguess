// our possible mystery words!
var secret = {
    words: ["TANGLED","FROZEN","CINDERELLA","MOANA","POCAHONTAS","SNOW WHITE AND THE SEVEN DWARFS","BEAUTY AND THE BEAST","THE LITTLE MERMAID","SLEEPING BEAUTY","THE PRINCESS AND THE FROG","OLIVER AND COMPANY","THE BLACK CAULDRON","FANTASIA","ENCHANTED","LADY AND THE TRAMP","ONE HUNDRED ONE DALMATIONS","THE LION KING","THE ARISTOCATS","BAMBI","THE FOX AND THE HOUND","ROBIN HOOD","THE JUNGLE BOOK","THE RESCUERS","PETES DRAGON","THE GREAT MOUSE DETECTIVE","LILO AND STITCH"]
}

// function to choose a random word from the above array:
var randomWord = function(){
    return secret.words[Math.floor(Math.random()*25)];
}


module.exports = {
    secret: secret,
    randomWord: randomWord
}

