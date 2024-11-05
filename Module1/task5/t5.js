'use strict';

const year = prompt('Enter a year:');

let isLeapYear;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  isLeapYear = true;
} else {
  isLeapYear = false;
}

if (isLeapYear === true) {
  document.querySelector('#target').innerHTML = 'Your input year is ' + year +
      ', this is a leap year.';
} else {
  document.querySelector('#target').innerHTML = 'Your input year is ' + year +
      ', this is NOT a leap year.';
}
