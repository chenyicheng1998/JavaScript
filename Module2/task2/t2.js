'use strict';

const numParticipants = parseInt(prompt('Enter the number of participants:'));
const participants = [];

for (let i = 0; i < numParticipants; i++) {
  const name = prompt(`Enter the name of participant ${i + 1}:`);
  participants.push(name);
}

participants.sort();

let listHTML = '<ol>';
for (let i = 0; i < participants.length; i++) {
  listHTML += `<li>${participants[i]}</li>`;
}
listHTML += '</ol>';

document.querySelector('#target').innerHTML = listHTML;
