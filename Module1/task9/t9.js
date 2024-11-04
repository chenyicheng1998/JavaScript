'use strict';

const number = parseInt(prompt("Enter an integer:"));

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

if (isPrime(number) === true) {
    document.querySelector('#target').innerHTML = number + ' is a prime number.';
} else {
    document.querySelector('#target').innerHTML = number + ' is NOT a prime number.';
}

