// import functions and grab DOM elements
import { makeRPS, compareChoices } from "./utils.js"; 
const throwButton = document.getElementById('throw');

const drawSpan = document.getElementById('draw');
const userChoice = document.getElementById('user-choice');
//fix this
const computerChoiceSpan = document.getElementById('computer-choice');
const gameResults = document.getElementById('game-results');

let win = 0;
let loss = 0;
let draw = 0;



throwButton.addEventListener('click', () => {
    console.log('it works');
    const computerThrow = Math.ceil(Math.random() * 3);
    const computerChoice = makeRPS(computerThrow);
    console.log(computerChoice);

    const selectedRadioButton = document.querySelector('input[type="radio"]:checked');
    console.log(selectedRadioButton.value);

    userChoice.textContent = selectedRadioButton.value;
    computerChoiceSpan.textContent = computerChoice;

    compareChoices(selectedRadioButton.value, computerChoice);


});

