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


setGame()

function setGame(){
    resultText.textContent = "Choose a throw!"
    document.querySelector("#restartBtn").disabled = true;
    choiceBtns.forEach(button => button.addEventListener("click", () => {
        player = button.textContent;
        computerTurn();
        playerChoiceText.textContent = `Player: ${player}`;
        computerChoiceText.textContent = `Computer: ${computer}`;
        checkWinner();
        resultText.textContent = winner;
        playerScore.textContent = playerScoreCount.toString();
        computerScore.textContent = computerScoreCount.toString();
        document.querySelector("#restartBtn").disabled = false;
    }));

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