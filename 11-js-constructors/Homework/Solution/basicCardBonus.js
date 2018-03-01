// Requiring our basic card constructor, our cardData JSON, and the inquirer package for prompts
var BasicCard = require("./lib/BasicCard");
var cardData = require("./basic.json");
var inquirer = require("inquirer");


// Starting the game for the first time
initGame();

function initGame() {
  // Creating variables to initialize our cards, score, and initial card index
  var currentCard;
  var cardArray = [];
  var initialScore = 0;
  var initialIndex = 0;
  // Creating a new card for each question using our BasicCard constructor
  for (var i = 0; i < cardData.length; i++) {
    currentCard = new BasicCard(cardData[i].front, cardData[i].back);
    cardArray.push(currentCard);
  }
  // Play the first round
  playRound(initialScore, cardArray, initialIndex);
}

function endGame(score) {
  // Alert user of their final score
  console.log("Game Over!");
  console.log("Your score is:", score);
  inquirer.prompt([{
    type: "input",
    name: "text",
    message: "Play again?"
  }]).then(function(answer) {
    // This lets the user just type in "y" to continue.
    // Will also work for "yes" or "yeah" or any answer begining with "y"
    if (answer.text.charAt(0).toLowerCase() === "y") {
      // Restarts the game from scratch if desired
      initGame();
    } 
    else {
      // Otherwise the game ends here since we aren't calling any other functions
      console.log("Thanks for playing!");
      console.log("Goodbye!");
    }
  });
}

function playRound(currentScore, cardArray, currentIndex) {
  // If we have't gone through all the cards, ask the user the next question
  if (currentIndex < cardArray.length) {
    promptUser(cardArray, currentIndex, currentScore);
  }
  // Otherwise end the game
  else {
    endGame(currentScore);
  }
}

function promptUser(cardArray, currentIndex, currentScore) {
  // Storing our current card in the card variable
  var card = cardArray[currentIndex];
  // Show the user the front of the card, ask for an answer
  inquirer.prompt([{
    type: "input",
    name: "text",
    message: card.front + "\nAnswer:"
  }]).then(function(answer) {
    // Checking to see if their answer was correct, regardless of casing
    if (answer.text.trim().toLowerCase() === card.back.trim().toLowerCase()) {
      // If the user is correct, increase the score by 1
      currentScore++;
      console.log("You are correct!");
    } 
    else {
      // Otherwise let them know they were incorrect
      console.log("Incorrect! The correct answer is '" + card.back + "'.");
    }
    // Increase our current card index
    currentIndex++;
    // Just a seperator
    console.log("-------------------------");
    // Play the next round with our updated score and card index
    playRound(currentScore, cardArray, currentIndex);
  });
}
