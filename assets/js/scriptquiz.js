// Récupérez le formulaire et les modales
const quizForm = document.getElementById('quizForm');
const modalCorrect = document.getElementById('win-modal');
const modalIncorrect = document.getElementById('lose-modal');

// Événement de soumission du formulaire
quizForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Empêchez le formulaire de se soumettre normalement

  // Compteur de réponses correctes
  let correctAnswersCount = 0;

  // Créez un objet JavaScript qui associe chaque question à sa réponse correcte
  const correctAnswers = {
    q1: 1, // Question 1 a la réponse 1 (B) de correcte
    q2: 2, // Question 2 a la réponse 2 (C) de correcte
    q3: 1, // Question 7 a la réponse 3 (C) de correcte
    q4: 2, // Question 7 a la réponse 3 (C) de correcte
    q5: 2, // Question 7 a la réponse 3 (C) de correcte
    q6: 2, // Question 7 a la réponse 3 (C) de correcte
    q7: 2, // Question 7 a la réponse 3 (C) de correcte
    q8: 1, // Question 8 a la réponse 1 (B) de correcte
    q9: 3, // Question 9 a la réponse 4 (D) de correcte
    q10: 1, // Question 1 a la réponse 1 (B) de correcte
    // Ajoutez d'autres questions et réponses correctes ici
  };

  // Récupérez toutes les réponses du formulaire
  const answers = quizForm.querySelectorAll('input[type="radio"]:checked');

  // Vérifiez chaque réponse
  answers.forEach(function (answer) {
    const questionNumber = answer.name;
    const selectedAnswer = parseInt(answer.value);
    const correctAnswer = correctAnswers[questionNumber];

    if (selectedAnswer === correctAnswer) {
      correctAnswersCount++;
    }
  });

  // Affichez la modal appropriée en fonction du nombre de réponses correctes
  if (correctAnswersCount === 10) {
    // Toutes les réponses sont correctes
    modalCorrect.style.display = 'block';
  } else {
    // Au moins une réponse est incorrecte
    modalIncorrect.style.display = 'block';
    const wrongAnswersCount = 10 - correctAnswersCount;
    document.getElementById('wrong-answers-count').textContent = `Il y a ${wrongAnswersCount} réponse(s) incorrecte(s).`;
  }
});

// Fonction pour fermer la modale
function closeModal(modal) {
  modal.style.display = 'none';
}

// Écoutez l'événement de touche Echap
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal(modalCorrect);
    closeModal(modalIncorrect);
  }
});

// Écoutez l'événement de clic à l'extérieur de la modale pour la fermer
window.addEventListener('click', function (event) {
  if (event.target === modalCorrect) {
    closeModal(modalCorrect);
  }
  if (event.target === modalIncorrect) {
    closeModal(modalIncorrect);
  }
});

// Écoutez les événements de clic sur les boutons de fermeture
modalCorrect.querySelector('.close').addEventListener('click', function () {
  closeModal(modalCorrect);
});

modalIncorrect.querySelector('.close').addEventListener('click', function () {
  closeModal(modalIncorrect);
});


// Vérifiez chaque réponse
answers.forEach(function (answer) {
  const questionNumber = answer.name;
  const selectedAnswer = parseInt(answer.value);
  const correctAnswer = correctAnswers[questionNumber];

  if (selectedAnswer !== correctAnswer) {
    // Si la réponse est incorrecte, augmentez le compteur de mauvaises réponses
    wrongAnswersCount++;
  }
});

// Affichez la modal appropriée en fonction du nombre de réponses correctes
if (correctAnswersCount === 10) {
  // Toutes les réponses sont correctes
  modalCorrect.style.display = 'block';
} else {
  // Au moins une réponse est incorrecte
  modalIncorrect.style.display = 'block';
  // Mettez à jour le contenu de l'élément "wrong-answers-count"
  document.getElementById('wrong-answers-count').textContent = `Il y a ${wrongAnswersCount} réponse(s) incorrecte(s).`;
}



