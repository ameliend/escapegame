function checkImage(link) {
    if (link.innerText === "011344449_922.jpg") {
        // Afficher la modale "Bravo" si la bonne image est sélectionnée
        const modal = document.getElementById("win-modal");
        showModal(modal);
    } else {
        // Afficher la modale "Perdu" si une autre image est sélectionnée
        const modal = document.getElementById("lose-modal");
        showModal(modal);
    }
}

function showModal(modal) {
    // Afficher la modale en modifiant son style
    modal.style.display = "block";

    // Ajouter l'attribut aria-hidden à toutes les autres modales
    const modals = document.querySelectorAll(".modal:not(#" + modal.id + ")");
    modals.forEach(modal => {
        modal.setAttribute("aria-hidden", "true");
    });

    // Empêcher la navigation hors de la modale avec le clavier
    modal.addEventListener("keydown", function (event) {
        if (event.key === "Tab" && !event.shiftKey) {
            // Empêcher la tabulation avant la première focale
            event.preventDefault();
            modal.focus();
        } else if (event.key === "Escape") {
            // Fermer la modale lorsque la touche "Echap" est enfoncée
            closeModal();
        }
    });
}




// Fonction pour fermer la modale
function closeModal() {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true"); // Ajouter l'attribut aria-hidden
    });
}


// Ajoutez un gestionnaire d'événements pour la touche "Echap"
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

function handleKeyPress(event, link) {
    if (event.key === "Enter") {
        checkImage(link);
    }
}

