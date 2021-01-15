let draw = 0;
let win = 0;
let loss = 0;
let resetCounter = 0;
const gameResults = document.getElementById('game-results');
const drawSpan = document.getElementById('draw');
const winSpan = document.getElementById('win');
const lossSpan = document.getElementById('loss');
const userChoice = document.getElementById('user-choice');
const resetCounterSpan = document.getElementById('reset-counter');

const computerChoiceSpan = document.getElementById('computer-choice');

export function doesUserWin(userThrow, computerThrow) {
    //draw throw
    if (userThrow === computerThrow) {
        draw++;
        gameResults.textContent = 'You and the computer threw the same thing!';
        drawSpan.textContent = draw;
    }
    //wins
    if ((userThrow === 'rock' && computerThrow === 'scissors') ||
        (userThrow === 'scissors' && computerThrow === 'paper') ||
        (userThrow === 'paper' && computerThrow === 'rock')) {
        win++;
        gameResults.textContent = 'You Won!';
        winSpan.textContent = win;
    }
    if ((userThrow === 'scissors' && computerThrow === 'rock') ||
        (userThrow === 'paper' && computerThrow === 'scissors') ||
        (userThrow === 'rock' && computerThrow === 'paper')) {
        loss++;
        gameResults.textContent = 'You loss!';
        lossSpan.textContent = loss;
    }
}
export function resetTheGame() {
    draw = 0;
    win = 0;
    loss = 0;
    drawSpan.textContent = draw;
    winSpan.textContent = win;
    lossSpan.textContent = loss;
    gameResults.textContent = '';
    userChoice.textContent = '';
    computerChoiceSpan.textContent = '';
    resetCounter++;
    resetCounterSpan.textContent = resetCounter;
}