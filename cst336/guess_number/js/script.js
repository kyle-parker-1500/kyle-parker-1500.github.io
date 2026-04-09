//Global variables
let randomNumber;
let attempts = 0;
let wins = 0;
let losses = 0;

//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initalizeGame);

initalizeGame();

function initalizeGame() {
    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log("randomNumber: ", randomNumber);
    attempts = 0;
    
    // hiding the reset button
    document.querySelector("#resetBtn").style.display = "none";
    
    // showing the guess button
    document.querySelector("#guessBtn").style.display = "inline";

    let playerGuess = document.querySelector("#playerGuess");
    playerGuess.focus(); //adding focus to textbox
    playerGuess.value = ""; // clearing the textbox
    
    let feedback = document.querySelector("#feedback");
    feedback.textContent = ""; //clearing the feedback
    
    //clearing the previous guesses
    document.querySelector("#guesses").textContent = "";
}

function checkGuess() {
    let feedback = document.querySelector("#feedback");
    let displayAttempts = document.querySelector("#attempts");
    feedback.textContent = "";
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player guess: " + guess);
    if (guess < 1 || guess > 99) {
        feedback.textContent = "Enter a number between 1 and 99!";
        feedback.style.color = "red";
        return;
    }
    attempts++;
    
    // display attempts
    displayAttempts.textContent = attempts;

    console.log("Attempts: " + attempts);
    feedback.style.color = "orange";
    if (guess == randomNumber) {
        feedback.textContent = "You guessed it! You Won!";
        feedback.style.color = "darkgreen";
        // update wins
        wins++;
        document.querySelector("#wins").textContent = wins;
        gameOver();
    } else {
        document.querySelector("#guesses").textContent += guess + " ";
        if (attempts == 7) {
            feedback.textContent = "Sorry, you lost!";
            feedback.style.color = "red";
            // update losses
            losses++;
            document.querySelector("#feedback").textContent += "\nThe number was: " + randomNumber;
            document.querySelector("#losses").textContent = losses;
            gameOver();
        } else if (guess > randomNumber) {
            feedback.textContent = "Guess was high";
        } else {
            feedback.textContent = "Guess was low";
        }
    }
}

function gameOver() {
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    document.querySelector("#attempts").textContent = 0;
    guessBtn.style.display = "none"; // hides Guess button
    resetBtn.style.display = "inline"; // displays Reset button
}
