let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;

document.getElementById("start-btn").addEventListener("click", function () {
    timer = setInterval(updateTime, 10);
});
document.getElementById("stop-btn").addEventListener("click", function () {
    clearInterval(timer);
});
document.getElementById("reset-btn").addEventListener("click", function () {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
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