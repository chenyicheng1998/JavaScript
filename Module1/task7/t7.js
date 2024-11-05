'use strict';

const numberOfRolls = parseInt(prompt('Enter the number of dice rolls:'));

let sum = 0;

for (let i = 0; i < numberOfRolls; i++) {
  const roll = Math.floor(Math.random() * 6) + 1;
  sum += roll;
}

document.querySelector('#target').innerHTML = 'The sum of ' + numberOfRolls +
    ' dice rolls is ' + sum + '.';



