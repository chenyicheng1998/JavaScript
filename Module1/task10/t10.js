'use strict';

const numDice = parseInt(prompt('Enter the number of dice:'));
const targetSum = parseInt(prompt('Enter the sum of the eye:'));
const numSimulations = 10000;

let successCount = 0;

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

for (let i = 0; i < numSimulations; i++) {
  let sum = 0;

  for (let j = 0; j < numDice; j++) {
    sum += rollDie();
  }

  if (sum === targetSum) {
    successCount++;
  }
}

const probability = (successCount / numSimulations) * 100;

document.querySelector('#target').innerHTML = 'Probability to get sum ' +
    targetSum + ' with ' + numDice + ' dice is ' + probability.toFixed(2) + '%';


