// Function to fetch recommendations
async function fetchRecommendations() {
  try {
      const response = await fetch('./travel_recommendation_api.json');
      const recommendations = await response.json();
      displayRecommendations(recommendations);
  } catch (error) {
      console.error('Error fetching recommendations:', error);
  }
}

// Function to display recommendations
function displayRecommendations(recommendations) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = ''; // Clear previous results

  recommendations.forEach(recommendation => {
      const recommendationDiv = document.createElement('div');
      recommendationDiv.classList.add('recommendation');

      const img = document.createElement('img');
      img.src = recommendation.imageUrl;
      img.alt = recommendation.name;

      const name = document.createElement('h3');
      name.textContent = recommendation.name;

      const description = document.createElement('p');
      description.textContent = recommendation.description;

      recommendationDiv.appendChild(img);
      recommendationDiv.appendChild(name);
      recommendationDiv.appendChild(description);

      resultsDiv.appendChild(recommendationDiv);
  });
}

// Call fetchRecommendations when the page loads
document.addEventListener('DOMContentLoaded', fetchRecommendations);

// Function to search for a keyword in the travel data
function searchKeyword() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    const result = travelData.find(item => item.keyword === input);

    if (result) {
        result.recommendations.forEach(recommendation => {
            const resultElement = document.createElement('div');
            resultElement.innerHTML = `
                <h2>${recommendation.name}</h2>
                <img src="${recommendation.imageUrl}" alt="${recommendation.name}">
                <p>${recommendation.description}</p>
            `;
            resultsDiv.appendChild(resultElement);
        });
    } else {
        resultsDiv.innerHTML = 'No results found';
    }
}

// Function to clear the search results
function clearResults() {
  document.getElementById('btnClear').value = ''; // Clear the input field
  document.getElementById('results').innerHTML = ''; // Clear the results div
}





// Function to clear the search results
function clearResults() {
  // Get the element that contains the results
  const resultsDiv = document.getElementById('results');
  
  // Clear the content of the resultsDiv
  resultsDiv.innerHTML = '';
}

// Function to search for keywords (example implementation)
function searchKeyword() {
  const searchBox = document.querySelector('.search-box');
  const query = searchBox.value;
  
  // Example: Display search query in the results div
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `<p>Searching for: ${query}</p>`;
}
// Add event listeners to buttons
document.getElementById('btnSearch').addEventListener('click', searchKeyword);
document.getElementById('btnClear').addEventListener('click', clearResults);

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted successfully!');
  // Here you can add code to handle the form submission, e.g., sending the data to a server
});