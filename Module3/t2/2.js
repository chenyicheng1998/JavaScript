const firstItem = document.createElement('li');
firstItem.textContent = 'First item';

const secondItem = document.createElement('li');
secondItem.textContent = 'Second item';
secondItem.classList.add('my-item'); // Add class to the second item

const thirdItem = document.createElement('li');
thirdItem.textContent = 'Third item';

const target = document.getElementById('target');
target.appendChild(firstItem);
target.appendChild(secondItem);
target.appendChild(thirdItem);