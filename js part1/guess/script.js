// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;
console.log(targetNumber)

const guessSubmit = document.getElementById('guessSubmit');
const guessInput = document.getElementById('guessInput');
const message = document.querySelector('.message');

let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts++;

    if (userGuess === targetNumber) {
        message.textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
        guessInput.disabled = true;
        guessSubmit.disabled = true;
        guessInput.style.borderColor = 'green';
    } else if (userGuess < targetNumber) {
        message.textContent = 'Too low! Try again.';
        guessInput.style.borderColor = 'red';
        guessInput.value = '';
    } else {
        message.textContent = 'Too high! Try again.';
        guessInput.style.borderColor = 'red';
        guessInput.value = '';
    }
}

guessSubmit.addEventListener('click', checkGuess);
