const api = {
    key: 'ee80ff0d2fb484ad2235cb69b405ff7a',
    base: 'https://api.openweathermap.org/data/2.5/weather?',
};

const input = document.getElementById('input')

input.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        getWeather(input.value);

        const date = moment();
        document.getElementById('date').innerHTML = date.format('Mo MMM YYYY dddd, h:mm:ss');

        document.querySelector('.main-weather').style.display = 'block'
    }
});

function getWeather(city) {
    fetch(`${api.base}q=${city}&appid=${api.key}&units=metric`).then((details) => {
        return details.json();
    }).then(showWeather);
}

function showWeather(details) {
    console.log(details);
    let city = document.getElementById('city');
    city.innerHTML = `${details.name}, ${details.sys.country}`;

    let temp = document.getElementById('temp');
    temp.innerHTML = `${Math.round(details.main.temp)}°C`;

    let minmax = document.getElementById('min-max');
    minmax.innerHTML = `${Math.round(details.main.temp_min)}°C (Min) and ${Math.round(details.main.temp_max)}°C (Max)`;

    let weathertype = document.getElementById('weather-type')
    weathertype.innerHTML = `${details.weather[0].main}`;
}