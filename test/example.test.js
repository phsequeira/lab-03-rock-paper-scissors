// IMPORT MODULES under test here:
// import { example } from '../example.js';
import getRandomThrow from '../get-random-throw.js';

const test = QUnit.test;

test('to get rock when random throw is 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'rock';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('to get paper when random throw is 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'paper';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('to get scissors when random throw is 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'scissors';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

