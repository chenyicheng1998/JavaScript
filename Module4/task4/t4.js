'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const resultsDiv = document.getElementById('results');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const value_from_input = document.getElementById('query').value;

        fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`)
            .then(response => response.json())
            .then(data => {
                resultsDiv.innerHTML = '';  // Clear old results

                data.forEach(tvShow => {
                    const show = tvShow.show;

                    // Create elements
                    const article = document.createElement('article');
                    const title = document.createElement('h2');
                    const link = document.createElement('a');
                    const image = document.createElement('img');
                    const summaryDiv = document.createElement('div');

                    // Populate elements with data
                    title.textContent = show.name;
                    link.href = show.url;
                    link.target = "_blank";
                    link.textContent = "View Details";

                    image.src = show.image ? show.image.medium : "https://via.placeholder.com/210x295?text=Not%20Found";
                    image.alt = show.name;

                    summaryDiv.innerHTML = show.summary || "No summary available";

                    // Append elements to article
                    article.appendChild(title);
                    article.appendChild(link);
                    article.appendChild(image);
                    article.appendChild(summaryDiv);

                    // Append article to resultsDiv
                    resultsDiv.appendChild(article);
                });
            })
            .catch(error => {
                    console.error('Error fetching data:', error);
            });
    });
});