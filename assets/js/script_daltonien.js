const buttons = document.querySelectorAll('button');
const messageInvalidDiv = document.getElementById('error_message');
const correctSequence = ["green-button", "brown-button", "blue-button", "orange-button"];
let sequenceIndex = 0;

function resetSequence() {
    sequenceIndex = 0;
    buttons.forEach(button => {
        button.classList.remove('correct-btn');
    });
    messageInvalidDiv.textContent = '';
}

function handleButtonClick(button) {
    if (button.id === correctSequence[sequenceIndex]) {
        button.classList.add('correct-btn');
        sequenceIndex++;
        if (sequenceIndex === correctSequence.length) {
            openModal();
        }
    } else {
        invalidSequence();
    }
}

function invalidSequence() {
    resetSequence();
    messageInvalidDiv.textContent = 'Olééééé ! L\'ordre n\'est pas le bon. Recommence du début.';
    setTimeout(() => {
        messageInvalidDiv.textContent = '';
    }, 2500);
}

function openModal() {
    const modal = document.getElementById('modal');
    const bravoMessage = document.querySelector('.bravo-message');
    bravoMessage.style.display = 'block';
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    const bravoMessage = document.querySelector('.bravo-message');
    bravoMessage.style.display = 'none';
    modal.style.display = 'none';
    resetSequence();
}

function handleCloseButtonKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') closeModal();
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (sequenceIndex < correctSequence.length) {
            handleButtonClick(button);
        }
    });
});
