const startBtn = document.getElementById('btn-start');
const clock = document.getElementById('div-clock');
let clockInterval = null;

function updateClock() {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
}

startBtn.addEventListener('click', () => { 
    alert("Clock Started");
    updateClock();
    clockInterval = setInterval(updateClock, 1000);
    startBtn.disabled = true;
    clock.style.color = 'black';
});

document.addEventListener('keydown', (event) => {
    if (event.altKey && event.key.toLowerCase() === 'w' && clockInterval) {        
        clearInterval(clockInterval);
        alert("Clock stopped");
        if (clock) clock.style.color = 'red';
        startBtn.disabled = false;
    }
});