/**
 * This script sets up and manages the card matching game.
 * It handles card flipping, timer management, game state tracking, and game reset.
 */
document.addEventListener("DOMContentLoaded", () => {//add event listener to load content on DOM
  // --- DOM Element References ---
  const resetButton = document.getElementById("restart"); // Button to reset/restart the game.
  const displayTimer = document.getElementById("timer"); // Element to display the game timer.
  const modalGameOver = document.getElementById("gameOverContainer"); // Modal to display game over message.
  const messageGameOver = document.querySelector(".gameOver"); // Text area within modal to display result.
  const cardElements = document.querySelectorAll(".card"); // All card elements in the game.

  // --- Game Constants ---
  const TOTAL_CARD_PAIRS = 8; // The total number of matching pairs of cards.
  const GAME_TIME_LIMIT = 60; // The total duration of the game in seconds.

  // --- Game State Variables ---
  let gameTimer; // Variable to store the interval ID for the game timer.
  let remainingTime = GAME_TIME_LIMIT; // The amount of time left in the game.
  let isTimerActive = false; // Flag to track if the game timer is running.
  let currentlySelectedCards = []; // Array to store the cards currently clicked by the user.
  let numberOfMatchedPairs = 0; // Number of pairs of cards that have been matched.
  let cardValues = []; // Array to store the numbers assigned to each card, randomly shuffled.

  /**
   * Generates and shuffles the numbers for the cards.
   * Each number represents a pair, and each pair is duplicated.
   */
  const generateCardValues = () => {
    cardValues = [...Array(TOTAL_CARD_PAIRS)].flatMap((_, index) => [index + 1, index + 1]);
    cardValues.sort(() => Math.random() - 0.5); // Shuffle the numbers randomly.
  };

  /**
   * Starts the game timer.
   * Updates the timer display every second and ends the game if time runs out.
   */
  const initializeGameTimer = () => {
    isTimerActive = true;
    gameTimer = setInterval(() => {
      remainingTime--;
      updateGameTimerDisplay();
      if (remainingTime <= 0) {
        concludeGame(false); // End the game if time runs out.
      }
    }, 1000);
  };

  /**
   * Updates the game timer display with the current time remaining.
   * Formats the time in minutes and seconds.
   */
  const updateGameTimerDisplay = () => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    displayTimer.textContent = `Time left: ${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  /**
   * Resets the game state to its initial values.
   * Resets the timer, shuffles the cards, and removes flipped class from the cards.
   */
  const resetGame = () => {
    modalGameOver.classList.remove("show"); // Hide the game over modal.
    clearInterval(gameTimer); // Clear the timer interval.
    remainingTime = GAME_TIME_LIMIT; // Reset the time left.
    isTimerActive = false; // Reset the timer status.
    numberOfMatchedPairs = 0; // Reset the number of matched pairs.
    currentlySelectedCards = []; // Clear the selected cards.
    updateGameTimerDisplay(); // Update the timer display to the initial value.
    generateCardValues(); // Regenerate and shuffle the card numbers.
    cardElements.forEach((card, index) => {
      const front = card.querySelector(".card-front");
      front.textContent = cardValues[index]; // Set the new card values.
      card.classList.remove("flipped"); // Unflip all cards.
    });
  };

  /**
   * Concludes the game, either with a win or a loss.
   * Displays the game over modal with an appropriate message.
   * @param {boolean} hasWon - True if the player won, false if they lost.
   */
  const concludeGame = (hasWon) => {
    clearInterval(gameTimer); // Stop the timer.
    messageGameOver.textContent = hasWon ? "Congratulations! You won!" : "You have failed!";
    messageGameOver.style.color = hasWon ? "gold" : "red";
    modalGameOver.classList.add("show"); // Show the game over modal.
  };

  /**
   * Handles the logic when a card is flipped.
   * Starts the timer if it's not started, tracks clicked cards, and checks for matches.
   * @param {HTMLElement} card - The card element that was clicked.
   */
  const handleCardFlip = (card) => {
    if (!isTimerActive) {
      initializeGameTimer(); // Start the timer if it's not already started.
    }

    card.classList.add("flipped"); // Flip the clicked card.
    currentlySelectedCards.push(card); // Add the card to the selected cards.

    if (currentlySelectedCards.length === 2) {
      // If two cards are selected, check if they match.
      const [cardOne, cardTwo] = currentlySelectedCards;
      const valueOne = cardOne.querySelector(".card-front").textContent;
      const valueTwo = cardTwo.querySelector(".card-front").textContent;

      if (valueOne === valueTwo) {
        // If the cards match, increment the matched pairs and clear the selected cards.
        numberOfMatchedPairs += 2;
        currentlySelectedCards = [];
        if (numberOfMatchedPairs === cardElements.length) {
          // If all pairs are matched, the player wins.
          concludeGame(true);
        }
      } else {
        // If the cards do not match, unflip them after a delay.
        setTimeout(() => {
          currentlySelectedCards.forEach((c) => c.classList.remove("flipped"));
          currentlySelectedCards = [];
        }, 1000);
      }
    }
  };

  // --- Game Initialization ---
  generateCardValues(); // Generate the initial card values.
  cardElements.forEach((card, index) => {
    const front = card.querySelector(".card-front");
    front.textContent = cardValues[index]; // Set the card number.
    card.addEventListener("click", () => handleCardFlip(card)); // Add click event to flip cards.
  });

  resetButton.addEventListener("click", resetGame); // Add event listener to reset button.
});