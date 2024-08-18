document.getElementById('fetchButton').addEventListener('click', async () => {
    const contiName = document.getElementById('continentInput').value;
    let about

    try {
        let API = await fetch('https://dummy-json.mock.beeceptor.com/continents');
        if (!API.ok) throw new Error('Failed to fetch data');

        const data = await API.json();
        displayCountryDetails(data, contiName);
    } catch (error) {
        document.getElementById('countryDetails').innerHTML = `<p>${error.message}</p>`;
    }
});

function displayCountryDetails(data, contiName) {
    const continent = data.find(c => c.name.toLowerCase() === contiName.toLowerCase());
    let detailsDiv = document.querySelector('#countryDetails');
    

    detailsDiv.innerHTML = `
        <h2>${continent.name}</h2>
        <p><strong>Countries:</strong> ${continent.countries}</p>
        <p><strong>Population:</strong> ${continent.population}</p>
        <p><strong>Area:</strong> ${continent.areaSqKm} sq km</p>
        <p><strong>lines:</strong> ${continent.lines} lines</p>
        <p><strong>developedCountries by ved:</strong> ${continent.developedCountries[0]} are developed</p>
        <p><strong>oceans:</strong> ${continent.oceans.length} andare oceans</p>
    `;
    detailsDiv.style.backgroundColor='yellow'
}
