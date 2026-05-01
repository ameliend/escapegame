// Récupérer le bouton "win-button"
const winButton = document.getElementById("win-button");

// Récupérer la modale "win-modal"
const winModal = document.getElementById("win-modal");

// Récupérer le bouton de fermeture de la modale
const closeWinModalButton = document.getElementById("close-win-modal");

// mousedown est déclenché uniquement par la souris, jamais par Entrée/Espace au clavier
let winButtonMouseDown = false;
winButton.addEventListener("mousedown", function() { winButtonMouseDown = true; });
winButton.addEventListener("click", function() {
    if (winButtonMouseDown) { winButtonMouseDown = false; return; }
    winModal.style.display = "block";
    closeWinModalButton.focus();
});

let closeModalMouseDown = false;
closeWinModalButton.addEventListener("mousedown", function() { closeModalMouseDown = true; });
closeWinModalButton.addEventListener("click", function() {
    if (closeModalMouseDown) { closeModalMouseDown = false; return; }
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


