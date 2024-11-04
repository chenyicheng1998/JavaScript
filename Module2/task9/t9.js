'use strict';

function even(numbers) {
    const evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

const originalArray = [2, 7, 4, 9, 10, 15, 18];

const evenArray = even(originalArray);

console.log("Original array: ", originalArray);
console.log("Even numbers array: ", evenArray);

