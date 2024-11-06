'use strict';

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            console.log(data.value);  // Print only the joke to the console
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
});