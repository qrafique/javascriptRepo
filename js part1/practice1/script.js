const message = document.getElementById("msg");
const button1 = document.getElementById("guessSubmit");
const valueEntered = document.getElementById("inputField")
let targetGuess = 2;

function guessNumber() {
    const guess = parseInt(valueEntered.value);
    //alert("button press")
    if (isNaN(guess) || guess < 0) {
        message.innerHTML = "enter valid number";
        return;
    }
    console.log(`you have entered ${guess}`)
    if (targetGuess == guess) {
        message.innerHTML = "congradulation your guess is right!";
        document.getElementById("main").style.background = "rgb(190, 223, 105)";
    } else {
        message.innerHTML = "try again !";
    }




}
button1.addEventListener("click", guessNumber);