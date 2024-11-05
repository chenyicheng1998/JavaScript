document.addEventListener('DOMContentLoaded', function() {
  const num1Input = document.getElementById('num1');
  const num2Input = document.getElementById('num2');
  const operationSelect = document.getElementById('operation');
  const resultParagraph = document.getElementById('result');
  const calculateButton = document.getElementById('start');

  calculateButton.addEventListener('click', function() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operation = operationSelect.value;

    let result;

    if (isNaN(num1) || isNaN(num2)) {
      result = 'Please enter valid numbers';
    } else {
      switch (operation) {
        case 'add':
          result = num1 + num2;
          break;
        case 'sub':
          result = num1 - num2;
          break;
        case 'multi':
          result = num1 * num2;
          break;
        case 'div':
          if (num2 !== 0) {
            result = num1 / num2;
          } else {
            result = 'Cannot divide by zero';
          }
          break;
        default:
          result = 'Invalid operation';
      }
    }

    resultParagraph.textContent = result;
  });
});