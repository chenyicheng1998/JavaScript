'use strict';

function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

const sides = parseInt(prompt("Enter the number of sides on the dice:"));

let roll;
let listHTML = "<ul>";

do {
    roll = rollDice(sides);
    listHTML += `<li>${roll}</li>`;
} while (roll !== sides);

listHTML += "</ul>";

document.querySelector('#target').innerHTML = listHTML;