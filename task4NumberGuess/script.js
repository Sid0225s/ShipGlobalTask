document.addEventListener("DOMContentLoaded", () => {
  const minRange = 1; // Minimum value for the random number
  const maxRange = 100; // Maximum value for the random number
  let randomNumber = generateRandomNumber(minRange, maxRange); // Generate the initial random number
  let attempts = 0; // Initialize the number of attempts

  // Get references to DOM elements
  const guessInput = document.getElementById("guess");
  const submitButton = document.getElementById("submit");
  const restartButton = document.getElementById("restart");
  const feedback = document.getElementById("feedback");
  const attemptsDisplay = document.getElementById("attempts");

  // Event listener for the submit button
  submitButton.addEventListener("click", () => {
    const userGuess = Number(guessInput.value); // Get the user's guess and convert it to a number

    // Validate the user's guess
    if (userGuess < minRange || userGuess > maxRange) {
      feedback.textContent = `Please enter a number between ${minRange} and ${maxRange}.`;
      return;
    }

    attempts++; // Increment the number of attempts
    attemptsDisplay.textContent = attempts; // Display the number of attempts

    // Check if the user's guess is correct
    if (userGuess === randomNumber) {
      feedback.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    } else if (userGuess < randomNumber) {
      feedback.textContent = "Your Number is Low!";
    } else {
      feedback.textContent = "Your Number is High!";
    }
  });

  // Event listener for the restart button
  restartButton.addEventListener("click", () => {
    randomNumber = generateRandomNumber(minRange, maxRange); // Generate a new random number
    attempts = 0; // Reset the number of attempts
    attemptsDisplay.textContent = attempts; // Update the attempts display
    feedback.textContent = ""; // Clear the feedback message
    guessInput.value = ""; // Clear the input field
  });

  // Function to generate a random number between min and max (inclusive)
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
});
