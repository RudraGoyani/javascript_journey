let clock = document.getElementById('clock');

setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let time;
    if (hour !== 0 &&hour!==12) {
        time = String(hour % 12).padStart(2, "0") + ":" + String(minute).padStart(2, "0") + ":" + String(second).padStart(2, "0")+`${hour<12?"AM":"PM"}`;
    } else {
        time = 12+ ":" + String(minute).padStart(2, "0") + ":" + String(second).padStart(2, "0")+`${hour<12?"AM":"PM"}`;
    }
    clock.innerHTML = time;
    console.log(time);
}, 1000);
