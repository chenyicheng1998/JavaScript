'use strict';

const dogNames = [];

for (let i = 0; i < 6; i++) {
    const name = prompt(`Enter the name of dog ${i + 1}:`);
    dogNames.push(name);
}

dogNames.sort().reverse();

let listHTML = "<ul>";
for (let i = 0; i < dogNames.length; i++) {
    listHTML += `<li>${dogNames[i]}</li>`;
}
listHTML += "</ul>";

document.querySelector('#target').innerHTML = listHTML;
