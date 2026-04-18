const MISSION_DURATION = window.MISSION_DURATION_OVERRIDE || 5 * 60 * 1000;

function initTimer() {
    const el = document.getElementById('game-timer');
    if (!el) return;

    const start = Date.now();

    function tick() {
        const left = Math.max(0, MISSION_DURATION - (Date.now() - start));
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
