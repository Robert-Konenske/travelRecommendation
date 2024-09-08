// URL to the JSON file
const apiUrl = './travel_recommendation_api.json';

// Function to fetch data from the API
function fetchData() {
    fetch(apiUrl)
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Parse the JSON from the response
        })
        .then(data => {
            console.log(data); // Log the data to the console
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Call the fetchData function
fetchData();

// Function to search for a keyword in the travel data
function searchKeyword() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = ''; // Clear previous results

  const results = travelData.filter(item => {
      return item.destination.toLowerCase().includes(input) || 
             item.description.toLowerCase().includes(input);
  });

  if (results.length > 0) {
      results.forEach(result => {
          const resultElement = document.createElement('div');
          resultElement.innerHTML = `<strong>${result.destination}</strong>: ${result.description}`;
          resultsDiv.appendChild(resultElement);
      });
  } else {
      resultsDiv.innerHTML = 'No results found';
  }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted successfully!');
  // Here you can add code to handle the form submission, e.g., sending the data to a server
});