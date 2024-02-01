const buttons = document.querySelectorAll('button');
const messageInvalidDiv = document.getElementById('error_message');
const correctSequence = ["green-button", "brown-button", "blue-button", "orange-button"];
let sequenceIndex = 0;

// Fonction pour réinitialiser la séquence sans afficher de message d'erreur
function resetSequence() {
    sequenceIndex = 0;
    buttons.forEach(button => {
        button.classList.add('active');
    });
    messageInvalidDiv.textContent = '';
}

// Fonction pour gérer les clics sur les boutons
function handleButtonClick(buttonId) {
    if (buttonId === correctSequence[sequenceIndex]) {
        sequenceIndex++;
        if (sequenceIndex === correctSequence.length) {
            openModal(); // Ouvre la modale si la séquence est correcte
        }
    } else {
        invalidSequence();
    }
}

// Fonction pour gérer une séquence incorrecte
function invalidSequence() {
    resetSequence();
    messageInvalidDiv.textContent = 'Olééééé ! l\'ordre n\'est pas le bon. Recommence du début.';
    // Supprimer le message d'erreur après 5 secondes
    setTimeout(() => {
        messageInvalidDiv.textContent = '';
    }, 2500); // Le message d'erreur sera supprimé après 5 secondes
}

/// Fonction pour ouvrir la modale "bravo-message"
function openModal() {
    const modal = document.getElementById('modal');
    const bravoMessage = document.querySelector('.bravo-message');

    bravoMessage.style.display = 'block'; // Affiche le message "Bravo !"
    modal.style.display = 'block'; // Affiche la modale
}

// Fonction pour fermer la modale
function closeModal() {
    const modal = document.getElementById('modal');
    const bravoMessage = document.querySelector('.bravo-message');

    bravoMessage.style.display = 'none'; // Masque le message "Bravo !"
    modal.style.display = 'none'; // Masque la modale

    // Réinitialise sequenceIndex ici
    sequenceIndex = 0;
}

// Ajouter un gestionnaire d'événement à chaque bouton
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (sequenceIndex < correctSequence.length) {
            handleButtonClick(button.id);
        }
    });
});

// Réinitialiser la séquence au chargement de la page
resetSequence(); // Réinitialise sans afficher de message d'erreur initial
