// Récupérer le bouton "win-button"
const winButton = document.getElementById("win-button");

// Récupérer la modale "win-modal"
const winModal = document.getElementById("win-modal");

// Récupérer le bouton de fermeture de la modale
const closeWinModalButton = document.getElementById("close-win-modal");

// Écouter l'événement clic sur le bouton "win-button"
winButton.addEventListener("click", function(e) {
    if (e.detail > 0) return; // ignorer les clics souris
    winModal.style.display = "block";
    closeWinModalButton.focus();
});

// Fermer la modale lorsque l'utilisateur clique sur le bouton de fermeture
closeWinModalButton.addEventListener("click", function(e) {
    if (e.detail > 0) return; // ignorer les clics souris
    winModal.style.display = "none";
});

// Fermer la modale lorsque l'utilisateur appuie sur la touche Échap (Escape)
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" || event.key === "Esc") {
        // Masquer la modale "Bravo" si elle est visible
        if (winModal.style.display === "block") {
            winModal.style.display = "none";
        }
    }

    // Fermer la modale lorsque l'utilisateur appuie sur la touche "Entrée" (Enter)
    if (event.key === "Enter") {
        // Masquer la modale "Bravo" si elle est visible
        if (winModal.style.display === "block") {
            winModal.style.display = "none";
        }
    }
});


