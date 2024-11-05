'use strict';

const numbers = [];

for (let i = 0; i < 5; i++) {
  const num = parseInt(prompt(`Enter number ${i + 1}:`));
  numbers.push(num);
}

console.log('The numbers in reverse order are:');
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}