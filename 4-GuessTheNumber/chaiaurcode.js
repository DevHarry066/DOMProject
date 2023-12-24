let previousGuessedNum;
let guessesRemaining = 10;
let sbm = document.querySelector('.guessSubmit');
let results = document.querySelector('.resultParas');
let previousGuessDOM = document.querySelector('.guesses');
let guessRemainingDOM = document.querySelector('.lastResult');
let submitButton = document.querySelector('#subt');

sbm.addEventListener('click', function (e) {
    e.preventDefault();
    const guessedNumber = document.querySelector('.guessField').value;
    let randomNumber = parseInt(Math.random() * 100);
    if (randomNumber == guessedNumber) {
        submitButton.disabled = true;
        submitButton.style.backgroundColor = 'white';
        submitButton.style.color = 'black';
        results.innerHTML = 'You have guessed the number correctly';
    } else if (guessesRemaining > 1) {
        previousGuessDOM.innerHTML = guessedNumber;
        guessesRemaining = guessesRemaining - 1;
        guessRemainingDOM.innerHTML = guessesRemaining;
    } else {
        submitButton.disabled = true;
        submitButton.style.backgroundColor = 'white';
        submitButton.style.color = 'black';
        results.innerHTML =
            'You have failed to guess the number, Refresh to play again';
        results.style.fontSize = '10px';
    }
});
