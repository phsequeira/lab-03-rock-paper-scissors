// import functions and grab DOM elements
import { doesUserWin, resetTheGame } from './utils.js';
import getRandomThrow from './get-random-throw.js';

const throwButton = document.getElementById('throw');

const resetButton = document.getElementById('reset-button');

const userChoice = document.getElementById('user-choice');

const computerChoiceSpan = document.getElementById('computer-choice');


throwButton.addEventListener('click', () => {
    const computerThrow = Math.ceil(Math.random() * 3);
    const computerChoice = getRandomThrow(computerThrow);
    const selectedRadioButton = document.querySelector('input[type="radio"]:checked');
    userChoice.textContent = selectedRadioButton.value;
    computerChoiceSpan.textContent = computerChoice;
    doesUserWin(selectedRadioButton.value, computerChoice);

});

resetButton.addEventListener('click', resetTheGame);

