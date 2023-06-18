const choices = ['rock', 'paper', 'scissors'];
const computerSelection = getComputerChoice();
const playerSelection = getPlayerSelection();

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}


function getPlayerSelection(){
    let playerChoice = prompt("Enter your choice (Rock, Paper, or Scissors):");
    while (playerChoice == null) {
        playerChoice = prompt("You must choose! Enter your choice (Rock, Paper, or Scissors):");
    }
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) 
        return `Draw! You both chose ${computerSelection}`; 
    if (playerSelection == "rock" && computerSelection == "scissors") 
        return `You win! ${playerSelection} beats ${computerSelection}`; 
    if (playerSelection == "scissors" && computerSelection == "paper") 
        return `You win! ${playerSelection} beats ${computerSelection}`;
    if (playerSelection == "paper" && computerSelection == "rock") 
        return `You win! ${playerSelection} beats ${computerSelection}`;
    else return `You lose! ${computerSelection} beats ${playerSelection}`;
}


console.log(`Player chose: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`);
console.log(`Computer chose: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`);
console.log(playRound(playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1), computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)));