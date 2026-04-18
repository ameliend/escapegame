const GAME_DURATION = 30 * 60 * 1000;

function initTimer() {
    const el = document.getElementById('game-timer');
    if (!el) return;

    function tick() {
        const start = parseInt(localStorage.getItem('gameStart') || '0');
        if (!start) {
            el.textContent = '30:00';
            return;
        }
        const left = Math.max(0, GAME_DURATION - (Date.now() - start));
        const m = Math.floor(left / 60000);
        const s = Math.floor((left % 60000) / 1000);
        el.textContent = String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
        if (left === 0) {
            window.location.href = 'timeout.html';
        }
    }

    tick();
    setInterval(tick, 1000);
}

document.addEventListener('DOMContentLoaded', initTimer);
