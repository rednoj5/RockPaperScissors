
let playerSelection
let computerSelection
let playerScore = 0
let computerScore = 0
let winner

function getComputerSelection() {
    let number = Math.floor(Math.random() * 3);
    return number;
}

function getPlayerSelection() {
    let input = prompt('Rock, paper or scissors?').toLowerCase();
    while (input !== 'rock' && input !== 'paper' && input !== 'scissors') {
        input = prompt('You must pick rock, paper or scissors. Nothing else will be tolerated!');
    };
    if (input === 'rock') {
        number = 0;
    } else if (input === 'paper') {
        number = 1;
    } else {
        number = 2;
    };
    return number;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerSelection();
    computerSelection = getComputerSelection();
    if (computerSelection === playerSelection) {
        alert('It\'s a tie!');
        winner = 'none';
    } else if (playerSelection === 2 && computerSelection === 1) {
        alert('You win! Scissors beats paper.');
        winner = 'player';
    } else if (playerSelection === 1 && computerSelection === 0) {
        alert('You win! Paper beats rock.');
        winner = 'player';
    } else if (playerSelection === 0 && computerSelection === 2) {
        alert('You win! Rock beats scissors.');
        winner = 'player';
    } else if (playerSelection === 2 && computerSelection === 0) {
        alert('You lose! Rock beats scissors.');
        winner = 'computer';
    } else if (playerSelection === 1 && computerSelection === 2) {
        alert('You lose! Scissors beats paper.');
        winner = 'computer';
    } else {
        alert('You lose! Paper beats rock.');
        winner = 'computer';
    };
}

function game() {
    alert('Welcome to the Rock, paper, scissors game. You will be fighting the computer. The game ends when you or the computer get 5 points.');
    while (playerScore < 5 && computerScore < 5) {
    playRound();
    if (winner === 'player') {
        playerScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
   }
   if (playerScore === 5) {
       alert('You have won the game to 5. Congratulations!');
   } else {
       alert('You have lost the game to 5. Loser...')
   };
}

game();
