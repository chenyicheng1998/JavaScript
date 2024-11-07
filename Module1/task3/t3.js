'use strict';

const first = parseInt(prompt('Type first integer:'));
const second = parseInt(prompt('Type second integer:'));
const third = parseInt(prompt('Type third integer:'));

const sum = first + second + third;
const product = first * second * third;
const average = sum/3;

document.querySelector('#target').innerHTML = `
The sum is ${sum} <br>
The product is ${product} <br>
The average is ${average.toFixed(2)}
`
;