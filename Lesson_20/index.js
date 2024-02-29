let time = 3600; // odin chas
const countDownEl = document.getElementById("countdown"); // nahodim el

setInterval(updateCountdown, 1000); // v parametri vveli function obnovleniya, i cherez 1000 milesecund

function updateCountdown(){
    const minutes = Math.floor(time / 60)
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countDownEl.innerHTML = `${minutes} : ${seconds}`;
    time--;
}

