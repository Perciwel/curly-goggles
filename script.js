document.addEventListener('DOMContentLoaded', () => {
    const locationInput = document.getElementById('location-input');
    const searchButton = document.getElementById('search-button');
    const Weathercontainer = document.getElementById('weather-container');

    searchButton.addEventListener('click', () => {
        const location = locationInput.value;

        const apiurls= 'https://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json';

        fetch(apiurls)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            const weatherdata = data.dataseries[0];
            const temperature = weatherdata.temp2m;
        });
    });
});

    const weatherdata = data.dataseries[0];
    const temperature = weatherdata.temp2m;
    const desctrption = weatherdata.weather;
    const humidity = weatherdata.rh2m;
    const wind = weatherdata.wind10m;
    const cloud = weatherdata.cloudcover;
    const rain = weatherdata.prec_type;

    Weathercontainer.innerHTML = `
    h2>Weather in ${location}</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Description: ${desctrption}</p>
    <p>Humidity: ${humidity}%</p>
    <p>Wind: ${wind} km/h</p>
    <p>Cloud: ${cloud}%</p>
    <p>Rain: ${rain}</p>
    `;
    
searchButton.addEventListener('click', () => {
    const location = locationInput.value;

    const apiurls= 'https://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json';

    fetch(apiurls)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const weatherdata = data.dataseries[0];
        const temperature = weatherdata.temp2m;
        const desctrption = weatherdata.weather;
        const humidity = weatherdata.rh2m;
        const wind = weatherdata.wind10m;
        const cloud = weatherdata.cloudcover;
        const rain = weatherdata.prec_type;

        Weathercontainer.innerHTML = `
        <h2>Weather in ${location}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${desctrption}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind: ${wind} km/h</p>
        <p>Cloud: ${cloud}%</p>
        <p>Rain: ${rain}</p>
        `;
    })
    .catch((error) => {
        console.error("Error fetching weather data:", error);
    });
});
console.error("Error fetching weather data:", error);
    