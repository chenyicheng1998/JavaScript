'use strict';

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let roll;
let listHTML = "<ul>";

do {
    roll = rollDice();
    listHTML += `<li>${roll}</li>`;
} while (roll !== 6);

listHTML += "</ul>";

document.querySelector('#target').innerHTML = listHTML;