'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const value_from_input = document.getElementById('query').value;

        await fetch(
            `https://api.tvmaze.com/search/shows?q=${value_from_input}`).
            then(response => response.json()).
            then(data => {
                console.log(data);
            }).
            catch(error => {
                console.error('Error fetching data:', error);
            });
    });
});