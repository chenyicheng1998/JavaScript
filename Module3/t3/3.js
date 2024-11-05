'use strict';
const names = ['John', 'Paul', 'Jones'];

let listItems = '';
for (let i = 0; i < names.length; i++) {
  listItems += `<li>${names[i]}</li>`;
}

document.getElementById('target').innerHTML = listItems;

