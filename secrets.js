var secret = {
    words: ["TANGLED","FROZEN","CINDERELLA","MOANA","POCAHONTAS","SNOW WHITE","BEAUTY AND THE BEAST", "THE LITTLE MERMAID"]
}

var randomWord = function(){
    return secret.words[Math.floor(Math.random()*6)];
}


module.exports = {
    secret: secret,
    randomWord: randomWord
}

