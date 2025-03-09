import { getVideos } from './api.js';

function displayResults(results) {
    const tableBody = document.querySelector("#resultsTable tbody");
    tableBody.innerHTML = ""; // Clear previous results

    results.forEach(video => {
        const row = document.createElement("tr");
        const youtubeURL = `https://www.youtube.com/watch?v=${video.id}`; // Construct URL
        row.innerHTML = `
            <td>${video.title}</td>
            <td>${video.views}</td>
            <td>${video.likes}</td>
            <td>${video.comments}</td>
            <td><a href="${youtubeURL}" target="_blank">Watch</a></td>
        `;
        tableBody.appendChild(row);
    });
}

document.getElementById("searchButton").addEventListener("click", () => {
    const category = document.getElementById("category").value;
    const maxResults = parseInt(document.getElementById("maxResults").value, 10);

    if (category && !isNaN(maxResults)) {
        getVideos(category, maxResults)
            .then(results => displayResults(results))
            .catch(error => {
                console.error("Error fetching videos:", error);
                alert("An error occurred while fetching videos.");
            });
    } else {
        alert("Please enter a category and a valid number for max results.");
    }
});
