

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
        outcomeMSG.textContent = 'It\'s a tie!';
        winner = 'none';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        outcomeMSG.textContent = 'You win! Scissors beats paper.';
        winner = 'player';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        outcomeMSG.textContent = 'You win! Paper beats rock.';
        winner = 'player';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        outcomeMSG.textContent = 'You win! Rock beats scissors.';
        winner = 'player';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        outcomeMSG.textContent = 'You lose! Rock beats scissors.';
        winner = 'computer';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        outcomeMSG.textContent = 'You lose! Scissors beats paper.';
        winner = 'computer';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        outcomeMSG.textContent = 'You lose! Paper beats rock.';
        winner = 'computer';
    } else {
        outcomeMSG.textContent = 'ERROR';
    }
};

    function changePlayerIMG() {
        if (playerSelection === 'rock') {
            playerIMG.src = 'photos/rock.png';
        } else if (playerSelection === 'paper') {
            playerIMG.src = 'photos/paper.png';
        } else {
            playerIMG.src = 'photos/scissors2.png';
        };

        if (computerSelection === 'rock') {
            computerIMG.src = 'photos/rock.png';
        } else if (computerSelection === 'paper') {
            computerIMG.src = 'photos/paper.png';
        } else {
            computerIMG.src = 'photos/scissors2.png';
        };
    }

    /*function game() {
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
    }*/

    function addScore() {
        if (winner === 'player') {
            playerScore++;
        } else if (winner === 'computer') {
            computerScore++;
        };
    };

    function checkWinner() {
        if (playerScore === 5) {
            outcomeMSG.textContent = 'You have won the game to 5. Congratulations!';
            bottomText.appendChild(resetButton);
        } else if (computerScore === 5) {
            outcomeMSG.textContent = 'You have lost the game to 5. Loser...';
            bottomText.appendChild(resetButton);
        };
    };

    function changeScore() {
        playerScoreView.textContent = playerScore;
        computerScoreView.textContent = computerScore;
    };

//changes to intoduce UI
let playerScore = 0
let computerScore = 0
let winner
let playerSelection
let computerSelection
const buttons = document.querySelectorAll('button:not(.resetbutton)');
const playerIMG = document.querySelector('#playerSelectionIMG');
const computerIMG = document.querySelector('#computerSelectionIMG');
const outcomeMSG = document.querySelector('.outcome');
const playerScoreView = document.querySelector('.playerScore');
const computerScoreView = document.querySelector('.computerScore');
const resetButton = document.createElement('button');
const bottomText = document.querySelector('.bottomText');

resetButton.textContent = 'Go again?';
resetButton.setAttribute('class', 'resetButton');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
    if (playerScore < 5 && computerScore < 5) {
        playerSelection = btn.id;
        computerSelection = getComputerSelection();
        playRound(playerSelection, computerSelection);
        changePlayerIMG();
        addScore();
        changeScore();
        checkWinner();
    }})});

    resetButton.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        changeScore();
        computerIMG.src = 'photos/qmark.jpg';
        playerIMG.src = 'photos/qmark.jpg';
        outcomeMSG.textContent = "Let's see if you can win... this time.";
        bottomText.removeChild(resetButton);
    });