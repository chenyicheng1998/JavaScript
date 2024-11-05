document.addEventListener('DOMContentLoaded', function() {
  const calculationInput = document.getElementById('calculation');
  const resultParagraph = document.getElementById('result');
  const calculateButton = document.getElementById('start');

  calculateButton.addEventListener('click', function() {
    const calculation = calculationInput.value.trim();

    let num1, num2, operator, result;

    if (calculation.includes('+')) {
      [num1, num2] = calculation.split('+').map(Number);
      operator = '+';
    } else if (calculation.includes('-')) {
      [num1, num2] = calculation.split('-').map(Number);
      operator = '-';
    } else if (calculation.includes('*')) {
      [num1, num2] = calculation.split('*').map(Number);
      operator = '*';
    } else if (calculation.includes('/')) {
      [num1, num2] = calculation.split('/').map(Number);
      operator = '/';
    } else {
      result = 'Invalid input';
    }

    if (!isNaN(num1) && !isNaN(num2)) {
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          if (num2 !== 0) {
            result = num1 / num2;
          } else {
            result = 'Cannot divide by zero';
          }
          break;
        default:
          result = 'Invalid operation';
      }
    } else if (result !== 'Invalid input') {
      result = 'Please enter valid integers';
    }

    resultParagraph.textContent = result;
  });
});