var secret = {
    words: ["THE PRINCESS AND THE FROG","SLEEPING BEAUTY","TANGLED","FROZEN","SNOW WHITE AND THE SEVEN DWARFS","THE LITTLE MERMAID","CINDERELLA","MOANA","POCAHONTAS","BEAUTY AND THE BEAST"]
}

var randomWord = function(){
    return secret.words[Math.floor(Math.random()*9)];
}


module.exports = {
    secret: secret,
    randomWord: randomWord
}

