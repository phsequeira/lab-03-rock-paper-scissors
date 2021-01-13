export default function getRandomThrow(computerThrow) {
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