'use strict';

const wantsSquareRoot = confirm('Should I calculate the square root?');

if (wantsSquareRoot === true) {
  const number = parseFloat(prompt('Enter a number:'));

  if (number >= 0) {
    const squareRoot = Math.sqrt(number);
    document.querySelector('#target').innerHTML = 'The square root of ' +
        number + ' is ' + squareRoot + '.';
  } else {
    document.querySelector(
        '#target').innerHTML = 'The square root of a negative number is not defined.';
  }
} else {
  document.querySelector(
      '#target').innerHTML = 'The square root is not calculated.';
}


