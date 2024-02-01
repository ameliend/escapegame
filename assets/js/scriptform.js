// Récupérez les modales et les éléments de fermeture
const modalBravo = document.getElementById("modalBravo");
const modalPerdu = document.getElementById("modalPerdu");
const closeBravoModal = document.querySelector("#modalBravo .close");
const closePerduModal = document.querySelector("#modalPerdu .close");

// Récupérez les champs du formulaire
const titreInput = document.getElementById("titre");
const nomInput = document.getElementById("nom");
const adresseInput = document.getElementById("adresse");
const emailInput = document.getElementById("email");
const telephoneInput = document.getElementById("telephone");

// Récupérez le bouton de validation
const validerButton = document.getElementById("valider");

// Écoutez l'événement de clic sur le bouton de validation
validerButton.addEventListener("click", () => {
    const nom = nomInput.value.trim().toLowerCase();
    const titre = titreInput.value.trim().toLowerCase();
    const adresse = adresseInput.value.trim().toLowerCase();
    const email = emailInput.value.trim().toLowerCase();
    const telephone = telephoneInput.value.trim().toLowerCase();

    // Vérifiez si tous les champs ont les bonnes valeurs (en minuscules)
    if (
        nom === "juiphe" &&
        titre === "docteur" &&
        adresse === "chupacabra" &&
        email === "docteur.juiphe@gmail.com" &&
        telephone === "06xxxxxxxx"
    ) {
        modalBravo.style.display = "block"; // Affiche la modal de succès (Bravo)
    } else {
        modalPerdu.style.display = "block"; // Affiche la modal d'échec (Perdu)
    }
});

// Écoutez l'événement de clic sur les éléments de fermeture des modales
closeBravoModal.addEventListener("click", () => {
    modalBravo.style.display = "none"; // Masque la modal de succès (Bravo)
});

closePerduModal.addEventListener("click", () => {
    modalPerdu.style.display = "none"; // Masque la modal d'échec (Perdu)
});
    

