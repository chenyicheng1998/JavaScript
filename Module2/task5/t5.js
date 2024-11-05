'use strict';

const numbers = [];

while (true) {
  const num = parseInt(prompt('Enter a number:'));

  if (numbers.includes(num)) {
    console.log(
        `The number ${num} has already been given. Stopping the program.`);
    break;
  }

  numbers.push(num);
}

numbers.sort((a, b) => a - b);

console.log('The numbers you entered in ascending order:');
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}


