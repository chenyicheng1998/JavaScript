'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const resultsDiv = document.getElementById('results');

  form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const value_from_input = document.getElementById('query').value;

    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`);
      const data = await response.json();
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
        link.target = '_blank';
        link.textContent = 'View Details';

        if (show.image?.medium) {
          image.src = show.image.medium;
          image.alt = show.name;
        }

        summaryDiv.innerHTML = show.summary ||
            'No summary available';

        // Append elements to article
        article.appendChild(title);
        article.appendChild(link);
        if (show.image?.medium) article.appendChild(image);
        article.appendChild(summaryDiv);

        // Append article to resultsDiv
        resultsDiv.appendChild(article);
      });
    } catch (error) {
      console.log(error.message);
    }
  });
});


