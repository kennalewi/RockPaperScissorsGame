// Selecting items
const playerChoiceText = document.querySelector("#playerChoice");
const computerChoiceText = document.querySelector("#computerChoice");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll("#choiceBtn");
const restartBtn = document.querySelector("#restartBtn")

let player;
let computer;
let result;

let playerScoreCount = 0;
let computerScoreCount = 0;
let winner = "";

choiceBtns.forEach(choiceBtn => { // choice buttons set as disabled
    choiceBtn.disabled = true;
  });

// restart button (start) is listening for a click to call setGame
restartBtn.addEventListener("click", setGame);

// asks user to choose an option, 
function setGame(){
    resultText.textContent = "Choose a throw!"
    // enables choice buttons
    choiceBtns.forEach(choiceBtn => {
        choiceBtn.disabled = false;
      });
    // disables restart button until user clicks a throw
    document.querySelector("#restartBtn").disabled = true;
    restartBtn.textContent = "Restart Game"

    // clicking on a button will run the runGame function
    choiceBtns.forEach(button => button.addEventListener("click", function() {
        runGame(button);
    }));

}

function runGame(button){
    // sets the player object to match the button clicked
    player = button.textContent;
    // randomly generates the computer's choice
    computerTurn();
    // sets the text on screen to match the choices made
    playerChoiceText.textContent = `Player: ${player}`;
    computerChoiceText.textContent = `Computer: ${computer}`;
    // compares the user's choice to the computer's choice to check for a winner. 
    // result is set with the "winner" variable
    checkWinner();
    // result text on screen shows the winner variable
    resultText.textContent = winner;
    // player and computer score counts are displayed on screen. 
    playerScore.textContent = playerScoreCount.toString();
    computerScore.textContent = computerScoreCount.toString();
    // restart button is set back to enabled.
    document.querySelector("#restartBtn").disabled = false;
    restartBtn.removeEventListener("click", restartGame);
    restartBtn.addEventListener("click", restartGame);
}

function restartGame(){
    playerScoreCount = 0;
    computerScoreCount = 0;
    playerScore.textContent = playerScoreCount.toString();
    computerScore.textContent = computerScoreCount.toString();
    resultText.textContent = "Choose a throw!"
    runGame();
}

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch(randNum){
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
    }
}

function checkWinner(){
    if(player == computer){
        winner = "Draw!";
    }
    else if(computer == "Rock"){
        if(player == "Paper"){
            winner = "You Win!";
            playerScoreCount += 1;
        }
        else {
            winner = "You Lose!";
            computerScoreCount += 1;
        }
    }
    else if(computer == "Paper"){
        if(player == "Scissors"){
            winner = "You Win!";
            playerScoreCount += 1;
        }
        else {
            winner = "You Lose!";
            computerScoreCount += 1;
        }
    }
    else if(computer == "Scissors"){
        if(player == "Rock"){
            winner = "You Win!";
            playerScoreCount += 1;
        }
        else {
            winner = "You Lose!";
            computerScoreCount += 1;
        }
    }
}