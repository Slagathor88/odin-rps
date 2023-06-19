const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}


function getPlayerSelection(){
    let playerChoice = prompt("Choose your weapon! Rock, Paper, or Scissors?");
    while (playerChoice == null || playerChoice == "") {
        playerChoice = prompt("No backing out now! You must choose! Rock, Paper, or Scissors?:");
    }
    while (choices.indexOf(playerChoice.toLowerCase()) === -1) {
        playerChoice = prompt("Your only choices are Rock, Paper, and Scissors. Choose wisely!");
    }
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `Bah! A Draw! You both chose ${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1)}`; 
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return `Winner! ${playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1)}`; 
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return `Winner! ${playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1)}`;
    } else if (playerSelection == "paper" && computerSelection == "rock") 
        return `Winner! ${playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1)}}`;
    else {return `Pathetic Loser! ${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1)}`;}
}


function game (){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerSelection();
        const result = playRound (playerSelection, computerSelection);
        
        console.log(`Round ${i+1}`)
        console.log(`You chose: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`);
        console.log(`Computer chose: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`);
        console.log(playRound(playerSelection, computerSelection));
        console.log(' ')

        if (result.includes('Winner')) {
            playerScore ++;
        } else if (result.includes('Loser')) {
            computerScore ++;
        } 
    }
    if (playerScore>computerScore) {
        return `You are the champion! ${playerScore} - ${computerScore}`
    } else if (playerScore<computerScore) {
        return `What a Loser! ${playerScore} - ${computerScore}`
    } else if (playerScore==computerScore) {
        return `A draw! Well-played! ${playerScore} - ${computerScore}`
    }

} 


console.log(game());



