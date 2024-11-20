'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const article = document.getElementById('article');

    // Fetch a random joke on load and log it to the console
    // fetch('https://api.chucknorris.io/jokes/random')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data.value); // Log a random joke to the console
    //     })
    //     .catch(error => {
    //         console.error('Error fetching joke:', error);
    //     });

    // Listen for form submissions
    form.addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        const value_from_input = document.getElementById('query').value;

        // Fetch jokes based on the search term
        try {
            const request = await fetch(`https://api.chucknorris.io/jokes/search?query=${value_from_input}`);
            const data = await request.json();
            article.innerHTML = ''; // Clear previous jokes

                if (data.result.length === 0) {
                    article.innerHTML = '<p>No jokes found.</p>';
                } else {
                    data.result.forEach(joke => {
                        const jokeElement = document.createElement('p');
                        jokeElement.textContent = joke.value;
                        article.appendChild(jokeElement);
                    });
                }
        } catch (error) {
            console.log(error.message);
            article.innerHTML = '<p>Failed to load jokes.</p>';
        }

    });
});