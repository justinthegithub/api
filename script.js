//https://github.com/davemachado/public-api

const fetchButton = document.getElementById('fetch-button');
const apiDataDiv = document.getElementById('api-data');

fetchButton.addEventListener('click', () => {
  fetch('https://api.publicapis.org/random')
    .then(response => response.json())
    .then(data => {
      const firstEntry = data.entries[0];
      const output = `
        <p>API: ${firstEntry.API}</p>
        <p>Description: ${firstEntry.Description}</p>
        <p>Auth: ${firstEntry.Auth}</p>
      `;
      apiDataDiv.innerHTML = output;
    });
});
