
// Récupérez les modales et les éléments de fermeture
const modalCodeCorrect = document.getElementById("modalCodeCorrect");
const modalCodeIncorrect = document.getElementById("modalCodeIncorrect");
const closeCodeCorrectModal = document.getElementById("closeCodeCorrectModal");
const closeCodeIncorrectModal = document.getElementById("closeCodeIncorrectModal");

// Récupérez le champ de texte et le bouton de validation
const codeInput = document.getElementById("codeInput");
const validerCode = document.getElementById("validerCode");

// Écoutez l'événement de clic sur le bouton de validation
validerCode.addEventListener("click", () => {
    const codeSaisi = codeInput.value.toLowerCase(); // Convertissez le code saisi en minuscules

    // Vérifiez si le code est correct (par exemple, "victoire")
    if (codeSaisi === "victoire") {
        modalCodeCorrect.style.display = "block"; // Affiche la modal de code correct
    } else {
        modalCodeIncorrect.style.display = "block"; // Affiche la modal de code incorrect
    }
});

// Écoutez l'événement de clic sur les éléments de fermeture des modales
closeCodeCorrectModal.addEventListener("click", () => {
    modalCodeCorrect.style.display = "none"; // Masque la modal de code correct
});

closeCodeIncorrectModal.addEventListener("click", () => {
    modalCodeIncorrect.style.display = "none"; // Masque la modal de code incorrect
});


// Fonction pour ouvrir une modale avec un titre et un contenu donnés
function openModal(title, content) {
    // Créez la modale
    const modal = document.createElement("div");
    modal.className = "modal";
    
    // Contenu de la modale
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>${title}</h2>
            <p>${content}</p>
        </div>
    `;

    // Ajoutez la modale à la page
    document.body.appendChild(modal);

    // Écoutez l'événement de clic sur le bouton de fermeture
    const closeButton = modal.querySelector(".close");
    closeButton.addEventListener("click", () => {
        // Supprimez la modale lorsque le bouton de fermeture est cliqué
        modal.remove();
    });
}


// Fonction pour fermer la modale
function closeModal() {
    modalCodeCorrect.style.display = "none";
    modalCodeIncorrect.style.display = "none";
}

// Écoutez l'événement "keydown" sur le document
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal(); // Appel à la fonction pour fermer la modale
    }
});

// Vous pouvez également ajouter un gestionnaire d'événements au bouton de fermeture de la modale
const closeButtonCodeCorrect = document.getElementById("closeCodeCorrectModal");
const closeButtonCodeIncorrect = document.getElementById("closeCodeIncorrectModal");

closeButtonCodeCorrect.addEventListener("click", closeModal);
closeButtonCodeIncorrect.addEventListener("click", closeModal);

//Récupérez tous les liens vers les pages de missions
const missionLinks = document.querySelectorAll(".missions a");

// Écoutez l'événement de clic sur chaque lien
missionLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        // Ouvrez le lien dans un nouvel onglet ou une nouvelle fenêtre
        window.open(link.href, '_blank');
        
        // Empêchez le comportement par défaut du lien
        e.preventDefault();
    });
});


// Récupérez le formulaire
const codeForm = document.getElementById("codeForm");

// Écoutez l'événement de soumission du formulaire
codeForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Empêchez la soumission du formulaire par défaut

    const codeSaisi = codeInput.value.toLowerCase(); // Convertissez le code saisi en minuscules

    // Vérifiez si le code est correct (par exemple, "victoire")
    if (codeSaisi === "victoire") {
        modalCodeCorrect.style.display = "block"; // Affiche la modal de code correct
    } else {
        modalCodeIncorrect.style.display = "block"; // Affiche la modal de code incorrect
    }
});


// Récupérez l'élément overlay-index, le bouton Valider, et l'élément de saisie de code
const overlayIndex = document.getElementById("overlay-index");
const validerpremierCodeButton = document.getElementById("validerpremierCode");
const premiercodeInput = document.getElementById("premiercodeInput");

// Ajoutez un gestionnaire d'événements au bouton Valider
validerpremierCodeButton.addEventListener("click", function() {
    // Vérifiez si le code est correct (par exemple, "1234" dans cet exemple)
    const codeCorrect = "2211"; // Remplacez par votre code correct

    if (premiercodeInput.value === codeCorrect) {
        // Si le code est correct, masquez l'élément overlay-index
        overlayIndex.style.display = "none";
    } else {
        // Affichez un message d'erreur (vous pouvez personnaliser cela)
        alert("Code incorrect. Veuillez réessayer.");
    }
});

