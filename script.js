

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


const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

const resultText = document.createElement('div');
const winnerText = document.createElement('div');



let btn = buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent;
        resultText.textContent = playRound();
        game();
        result.appendChild(resultText); 
        playerScore.textContent = player;
        computerScore.textContent = computer;
        winnerText.textContent = winner();
        result.appendChild(winnerText);
    })
});

let playerSelection;

let player = 0;
let computer = 0;

function playRound() {


    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        return 'It is a tie';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats Scissors';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'Computer wins! Paper beats Rock';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You win! Paper beats Rock';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'Computer wins! Scissors beats Paper';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You win! Scissors beats Paper';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'Computer wins! Rock beats Scissors';
    } else {
        return 'Something went wrong. Try again.';
    }

}


function game() {
    let gameResult = resultText.textContent

    if (gameResult === 'Computer wins! Paper beats Rock') {
        computer++;
    } else if (gameResult === 'Computer wins! Rock beats Scissors') {
        computer++;
    } else if (gameResult === 'Computer wins! Scissors beats Paper') {
        computer++;
    } else if (gameResult === 'You win! Rock beats Scissors') {
        player++;
    } else if (gameResult === 'You win! Paper beats Rock') {
        player++;
    } else if (gameResult === 'You win! Scissors beats Paper') {
        player++;
    }
}

function winner() {
    if (player === 5) {
        player = 0;
        computer = 0;
        return 'You won the game!';
    } else if (computer === 5) {
        player = 0;
        computer = 0;
        return 'Computer won the game!';
    }
}
