// import functions and grab DOM elements
import { makeRPS, compareChoices } from './utils.js'; 
const throwButton = document.getElementById('throw');


const userChoice = document.getElementById('user-choice');

const computerChoiceSpan = document.getElementById('computer-choice');


throwButton.addEventListener('click', () => {
    const computerThrow = Math.ceil(Math.random() * 3);
    const computerChoice = makeRPS(computerThrow);
    const selectedRadioButton = document.querySelector('input[type="radio"]:checked');
    userChoice.textContent = selectedRadioButton.value;
    computerChoiceSpan.textContent = computerChoice;
    compareChoices(selectedRadioButton.value, computerChoice);

});

