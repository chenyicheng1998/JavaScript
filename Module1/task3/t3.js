'use strict';

const first = parseInt(prompt('Type first integer:'));
const second = parseInt(prompt('Type second integer:'));
const third = parseInt(prompt('Type third integer:'));

const sum = first + second + third;

document.querySelector('#target').innerHTML = 'The sum is ' + sum;