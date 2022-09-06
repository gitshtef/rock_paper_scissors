

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return 'Rock'
    } else if (randomNumber === 2) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {

    playerSelection = prompt('Input your selection', 'Enter Rock, Paper or Scissors');
    computerSelection = getComputerChoice();


    if (playerSelection === computerSelection) {
        return 'It is a tie';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You win';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'Computer wins';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You win';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'Computer wins';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You win';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'Computer wins';
    } else {
        return 'Something went wrong. Try again.';
    }
}

let computerScore = 0;
let playerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        let gameResult = playRound();
        if(gameResult === 'Computer wins') {
            console.log('Computer won round');
            computerScore++;
        } else if(gameResult === 'You won round') {
            console.log('You win');
            playerScore++;
        } else if(gameResult === 'It is a tie') {
            console.log('Its a tie');
        } else {
            console.log('Error');
        }

        console.log('Computer score = ' + computerScore + ' ' + 'Player score = ' + playerScore);
    }

    if (computerScore > playerScore) {
        console.log('Computer won the game!');
    } else if (playerScore > computerScore) {
        console.log('Player won the game!');
    } else {
        console.log('Its a tie');
    }
}


game();


