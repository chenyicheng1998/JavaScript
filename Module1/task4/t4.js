'use strict';

const studentName = prompt("Enter your name:");

const randomHouse = Math.floor(Math.random() * 4) + 1;

let house;
if (randomHouse === 1) {
    house = "Gryffindor";
} else if (randomHouse === 2) {
    house = "Slytherin";
} else if (randomHouse === 3) {
    house = "Hufflepuff";
} else {
    house = "Ravenclaw";
}

document.querySelector('#target').innerHTML = studentName + ', you are ' + house;