function scrambleText(text) {
    var words = text.split(' ');
    var scrambledWords = [];

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.length > 3) {
            var firstChar = word.charAt(0);
            var lastChar = word.charAt(word.length - 1);
            var middleChars = word.substring(1, word.length - 1).split('');

            // Shuffle the middle characters
            for (var j = middleChars.length - 1; j > 0; j--) {
                var randomIndex = Math.floor(Math.random() * (j + 1));
                var temp = middleChars[j];
                middleChars[j] = middleChars[randomIndex];
                middleChars[randomIndex] = temp;
            }

            // Reassemble the word
            word = firstChar + middleChars.join('') + lastChar;
        }

        scrambledWords.push(word);
    }

    return scrambledWords.join(' ');
}

function updateText() {
    var originalText = "Je suis membre de l'AAQFB, Association des Aveugles Qui Font du Bowling. Ah oui, je fais aussi partie de l'Association des Aveugles Qui Font du Billard. Oui, l'Association des Aveugles Qui Font de la Machine à Grappe. Oui, l'Association des Aveugles Qui Font du Basket. J'ai un p'tit niveau. Ouais, et l'Association des Aveugles Qui Embrassent. Pour sortir d'ici, il suffit de cliquer sur le lien 'Orchidée' ";
    var scrambledText = scrambleText(originalText);
    document.getElementById('dyslexia-text').textContent = scrambledText;
}

// Update the text initially and then at regular intervals
updateText();
setInterval(updateText, 350); // Change every 2 seconds
