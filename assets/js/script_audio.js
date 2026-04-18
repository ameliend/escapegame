const player = document.getElementById('audio-player');
const audioSource = document.getElementById('audio-source');
const btnAudioTrack = document.getElementById('btn-audio-track');
const modalAudioTrack = document.getElementById('modal-audio-track');
const modalSuccess = document.getElementById('modal-success');
const passwordForm = document.getElementById('password-form');

const validAnswers = ['une araignée', 'araignée', 'tarentule', 'une tarentule'];

btnAudioTrack.addEventListener('click', () => {
    modalAudioTrack.style.display = 'block';
    modalAudioTrack.focus();
});

function closeAudioModal() {
    modalAudioTrack.style.display = 'none';
}

function applyAudioTrack() {
    const selected = document.querySelector('input[name="audio-track"]:checked').value;
    const currentTime = player.currentTime;
    audioSource.src = selected === 'ad' ? 'assets/audio/AD.mp3' : 'assets/audio/SansAD.mp3';
    player.load();
    player.currentTime = currentTime;
    closeAudioModal();
}

function closeSuccessModal() {
    modalSuccess.style.display = 'none';
}

passwordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const answer = document.getElementById('reponse').value.trim().toLowerCase();
    if (validAnswers.includes(answer)) {
        modalSuccess.style.display = 'block';
        modalSuccess.focus();
    }
});

window.addEventListener('click', (e) => {
    if (e.target === modalAudioTrack) closeAudioModal();
    if (e.target === modalSuccess) closeSuccessModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAudioModal();
        closeSuccessModal();
    }
});
