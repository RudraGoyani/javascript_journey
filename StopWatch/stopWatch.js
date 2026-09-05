let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;
let isRunning = false;

document.getElementById("start-btn").addEventListener("click", function () {
    if (!isRunning) {
        timer = setInterval(updateTime, 10);
        isRunning = true;
    }
});
document.getElementById("stop-btn").addEventListener("click", function () {
    clearInterval(timer);
    isRunning = false;
});
document.getElementById("reset-btn").addEventListener("click", function () {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    isRunning = false;
    document.getElementById("display").textContent = String(minutes).padStart(2, '0') + " : " + String(seconds).padStart(2, '0') + " : " + String(milliseconds).padStart(2, '0');
});
function updateTime() {
    milliseconds++;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    document.getElementById("display").textContent = String(minutes).padStart(2, '0') + " : " + String(seconds).padStart(2, '0') + " : " + String(milliseconds).padStart(2, '0');
}