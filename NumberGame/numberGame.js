
let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
let guessBtn = document.getElementById("guess-btn");
function game() {
    if (document.getElementById("guess-input").value === "") {
        return;
    }
    let inputNumber = document.getElementById("guess-input");
    let message = document.getElementById("message");
    let win = Number(inputNumber.value) == randomNumber;
    console.log(win

    );
    console.log(inputNumber.value, randomNumber);
    attempts++;
    if (win) {
        message.style.color = 'green';
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts!`;
        guessBtn.disabled = true;
    } else {
        message.style.color = 'red';
        message.textContent = inputNumber.value < randomNumber ? "Too low! Try again." : "Too high! Try again.";
    }
}
guessBtn.addEventListener("click", game);
addEventListener("keydown", function (event) {
    switch (event.key) {
        case "Enter":
            game();
            break;
        case "ArrowUp":
            document.getElementById("guess-input").value = Number(document.getElementById("guess-input").value) + 1;
            break;
        case "ArrowDown":
            document.getElementById("guess-input").value = Number(document.getElementById("guess-input").value) - 1;
            break;
    }


})