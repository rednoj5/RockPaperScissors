let playerScore = 0
let computerScore = 0
let winner

function getComputerSelection() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return 'rock';
    } else if (number === 1) {
        return 'paper';
    } else if (number === 2) {
        return 'scissors';
    } else {
        return 'ERROR';
    };
};

//below useless since UI introduced
/*function getPlayerSelection() {
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
}*/

function playRound(playerSelection, computerSelection) {
    
    if (computerSelection === playerSelection) {
        alert('It\'s a tie!');
        winner = 'none';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert('You win! Scissors beats paper.');
        winner = 'player';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert('You win! Paper beats rock.');
        winner = 'player';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert('You win! Rock beats scissors.');
        winner = 'player';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert('You lose! Rock beats scissors.');
        winner = 'computer';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert('You lose! Scissors beats paper.');
        winner = 'computer';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert('You lose! Paper beats rock.');
        winner = 'computer';
    } else {
        alert('ERROR');
        console.log(playerSelection);
        console.log(computerSelection);
    }
};

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

//function declareWinner() {

//};

//game();

//changes to intoduce UI
let playerSelection
let computerSelection
const buttons = document.querySelectorAll('button');
const playerIMG = document.querySelector('#playerSelectionIMG');
const computerIMG = document.querySelector('#computerSelectionIMG');
const outcomeMSG = document.querySelector('.outcome');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        playerSelection = btn.id;
        computerSelection = getComputerSelection();
        playRound(playerSelection, computerSelection);
    })});