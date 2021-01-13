let draw = 0;
let win = 0;
let loss = 0;
const gameResults = document.getElementById('game-results');
const drawSpan = document.getElementById('draw');
const winSpan = document.getElementById('win');
const lossSpan = document.getElementById('loss');

export function makeRPS(computerThrow) {
    if (computerThrow === 1) {
        return 'rock';
    }
    else if (computerThrow === 2) {
        return 'paper';
    }
    else if (computerThrow === 3) {
        return 'scissors';
    }
}
export function compareChoices(userThrow, computerThrow) {
    //draw throw
    if (userThrow === computerThrow) {
        draw++;
        gameResults.textContent = 'You and the computer threw the same thing!';
        drawSpan.textContent = draw; 
    }
    //wins
    if (userThrow === 'rock' && computerThrow === 'scissors') {
        win++;
        gameResults.textContent = 'You Won!';
        winSpan.textContent = win;
    }
    if (userThrow === 'scissors' && computerThrow === 'paper') {
        win++;
        gameResults.textContent = 'You Won!';
        winSpan.textContent = win;
    }
    if (userThrow === 'paper' && computerThrow === 'rock') {
        win++;
        gameResults.textContent = 'You Won!';
        winSpan.textContent = win;
    }
    //loose
    if (userThrow === 'scissors' && computerThrow === 'rock') {
        loss++;
        gameResults.textContent = 'You loss!';
        lossSpan.textContent = loss;
    }
    if (userThrow === 'paper' && computerThrow === 'scissors') {
        loss++;
        gameResults.textContent = 'You loss!';
        lossSpan.textContent = loss;
    }
    if (userThrow === 'rock' && computerThrow === 'paper') {
        loss++;
        gameResults.textContent = 'You loss!';
        lossSpan.textContent = loss;
    }
}
