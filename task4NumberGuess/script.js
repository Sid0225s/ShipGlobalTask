document.addEventListener("DOMContentLoaded", () => {
  const minRange = 1;
  const maxRange = 100;
  let randomNumber = generateRandomNumber(minRange, maxRange);
  let attempts = 0;

  const guessInput = document.getElementById("guess");
  const submitButton = document.getElementById("submit");
  const restartButton = document.getElementById("restart");
  const feedback = document.getElementById("feedback");
  const attemptsDisplay = document.getElementById("attempts");

  submitButton.addEventListener("click", () => {
    const userGuess = Number(guessInput.value);
    if (userGuess < minRange || userGuess > maxRange) {
      feedback.textContent = `Please enter a number between ${minRange} and ${maxRange}.`;
      return;
    }
    attempts++;
    attemptsDisplay.textContent = attempts;
    if (userGuess === randomNumber) {
      feedback.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    } else if (userGuess < randomNumber) {
      feedback.textContent = "Your Number is Low!";
    } else {
      feedback.textContent = "Your Number is High!";
    }
  });

  restartButton.addEventListener("click", () => {
    randomNumber = generateRandomNumber(minRange, maxRange);
    attempts = 0;
    attemptsDisplay.textContent = attempts;
    feedback.textContent = "";
    guessInput.value = "";
  });

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
});
