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

let playerSprite;
let computerSprite;

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
    resultText.textContent = "Choose!"
    // enables choice buttons
    choiceBtns.forEach(choiceBtn => {
        choiceBtn.disabled = false;
      });
    // disables restart button until user clicks a throw
    document.querySelector("#restartBtn").disabled = true;
    restartBtn.textContent = "Restart Game"

    // clicking on a button will run the runGame function
    choiceBtns.forEach(button => button.addEventListener("click", function() {
        resetAnimation();
        runGame(button);
    }));

}

function runGame(button){
    // sets the player object to match the button clicked
    player = button.textContent;
    setPlayerSprite();
    // randomly generates the computer's choice
    computerTurn();
    setComputerSprite();
    // sets the emoji on screen to match the choices made
    playerChoiceText.innerText = playerSprite;
    computerChoiceText.innerText = computerSprite;
    // compares the user's choice to the computer's choice to check for a winner. 
    // result is set with the "winner" variable
    checkWinner();

    // game anim insert
    gameAnim(winner);


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
    resetAnimation();
    playerScoreCount = 0;
    computerScoreCount = 0;
    playerScore.textContent = playerScoreCount.toString();
    computerScore.textContent = computerScoreCount.toString();
    playerChoiceText.innerText = '';
    computerChoiceText.innerText = '';
    winner = '';
    resultText.textContent = "Choose!"
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

function setPlayerSprite(){
    if (player == "Rock"){
        playerSprite = "🗿";
    }
    else if (player == "Paper"){
        playerSprite = "📄";
    }
    else {
        playerSprite = "✂️";
    }
}

function setComputerSprite(){
    if (computer == "Rock"){
        computerSprite = "🗿";
    }
    else if (computer == "Paper"){
        computerSprite = "📄";
    }
    else {
        computerSprite = "✂️";
    }
}

const playerAnim = document.getElementById("playerChoice");
const computerAnim = document.getElementById("computerChoice");


// when player clicks an option, the players attack one another. the winner grows, and the loser shrinks

function gameAnim(gameResult){
    if (gameResult == "You Win!"){
        computerChoiceText.style.opacity = 0.5;
        computerChoiceText.style.transform = "scale(.7)";
        computerChoiceText.style.transition = "all 0.5s ease";
        playerChoiceText.style.transform = "scale(1.1)";
        playerChoiceText.style.transition = "all 0.5s ease";
    }
    if (gameResult == "You Lose!"){
        playerChoiceText.style.opacity = 0.5;
        playerChoiceText.style.transform = "scale(.7)";
        playerChoiceText.style.transition = "all 0.5s ease";
        computerChoiceText.style.transform = "scale(1.1)";
        computerChoiceText.style.transition = "all 0.5s ease";
    }
    if (gameResult == "Draw!"){
        playerChoiceText.style.opacity = 0.5;
        playerChoiceText.style.transform = "scale(.7)";
        playerChoiceText.style.transition = "all 0.5s ease";
        computerChoiceText.style.opacity = 0.5;
        computerChoiceText.style.transform = "scale(.7)";
        computerChoiceText.style.transition = "all 0.5s ease";
    }
  }

function resetAnimation(){
    playerChoiceText.style.removeProperty('scale');
    playerChoiceText.style.removeProperty('opacity');
    playerChoiceText.style.removeProperty('transform');
    playerChoiceText.style.removeProperty('transition');
    computerChoiceText.style.removeProperty('scale');
    computerChoiceText.style.removeProperty('opacity');
    computerChoiceText.style.removeProperty('transform');
    computerChoiceText.style.removeProperty('transition');
  }
  