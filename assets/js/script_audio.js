const audio = document.getElementById('audio-player');
const audioSource = document.getElementById('audio-source');
const playBtn = document.getElementById('play-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const rewindBtn = document.getElementById('rewind-btn');
const forwardBtn = document.getElementById('forward-btn');
const progressBar = document.getElementById('progress-bar');
const seekbarFill = document.getElementById('seekbar-fill');
const currentTimeEl = document.getElementById('current-time');
const totalTimeEl = document.getElementById('total-time');
const btnAudioTrack = document.getElementById('btn-audio-track');
const modalAudioTrack = document.getElementById('modal-audio-track');
const modalSuccess = document.getElementById('modal-success');
const passwordForm = document.getElementById('password-form');
const errorMsg = document.getElementById('error-msg');
const failedOverlay = document.getElementById('audio-failed-overlay');
const playerPoster = document.getElementById('player-poster');
const playerNoVisual = document.getElementById('player-no-visual');

const validAnswers = ['une araignée violette', 'araignée violette', 'tarentule violette', 'une tarentule violette'];
let adTrackActive = false;
let attemptsLeft = 3;

function formatTime(secs) {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return m + ':' + String(s).padStart(2, '0');
}

function setPlaying(playing) {
    playIcon.style.display = playing ? 'none' : 'block';
    pauseIcon.style.display = playing ? 'block' : 'none';
    playBtn.setAttribute('aria-label', playing ? 'Pause' : 'Lecture');
    playerPoster.style.display = playing ? 'none' : 'block';
    playerNoVisual.style.display = playing ? 'flex' : 'none';
}

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        setPlaying(true);
    } else {
        audio.pause();
        setPlaying(false);
    }
});

rewindBtn.addEventListener('click', () => {
    audio.currentTime = Math.max(0, audio.currentTime - 10);
});

forwardBtn.addEventListener('click', () => {
    audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 10);
});

audio.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    seekbarFill.style.width = pct + '%';
    progressBar.value = pct;
    currentTimeEl.textContent = formatTime(audio.currentTime);
});

audio.addEventListener('loadedmetadata', () => {
    totalTimeEl.textContent = formatTime(audio.duration);
});

audio.addEventListener('ended', () => setPlaying(false));

progressBar.addEventListener('input', () => {
    if (!audio.duration) return;
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

document.getElementById('fullscreen-btn').addEventListener('click', () => {
    const player = document.querySelector('.custom-player');
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        player.requestFullscreen();
    }
});

btnAudioTrack.addEventListener('click', () => {
    modalAudioTrack.style.display = 'block';
});

function closeAudioModal() {
    modalAudioTrack.style.display = 'none';
}

function applyAudioTrack() {
    const selected = document.querySelector('input[name="audio-track"]:checked').value;
    adTrackActive = selected === 'ad';
    const wasPlaying = !audio.paused;
    const currentTime = audio.currentTime;
    audioSource.src = adTrackActive ? 'assets/audio/AD.mp3' : 'assets/audio/SansAD.mp3';
    audio.load();
    audio.currentTime = currentTime;
    if (wasPlaying) audio.play();
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
        errorMsg.textContent = '';
        return;
    }

    attemptsLeft--;
    if (attemptsLeft <= 0) {
        failedOverlay.style.display = 'flex';
    } else {
        const mot = attemptsLeft === 1 ? 'chance' : 'chances';
        errorMsg.textContent = `⚠ Mauvais mot de passe, plus que ${attemptsLeft} ${mot}.`;
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
