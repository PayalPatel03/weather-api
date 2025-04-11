const apiKey = 'bf938dffdd0719fd29c28fa941a90c6a';
const cities = ['London', 'New York', 'Tokyo', 'Delhi', 'Turkey','Rome','Barcelona','Bali','Singapore','Navsari','Port Louis']; 

let citiesDropdown = document.getElementById('cities');
let description = document.getElementById('description');
let temp = document.getElementById('temp');

cities.forEach((city) => {
    let option = document.createElement('option');
    option.value = city;
    option.innerText = city;
    citiesDropdown.append(option);
});

const displayWeather = () => {
    let selectedCity = citiesDropdown.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        description.innerText = `Weather: ${data.weather[0].description}`;
        temp.innerText = `Temperature: ${data.main.temp}°C`;
    })
    .catch(error => {
        console.log('Error fetching weather:', error);
    });
}
