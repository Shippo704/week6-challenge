// Element declarations
var searchInputEl = document.getElementById('search');
var searchButtonEl = document.getElementById('sumbit');
var city = document.getElementById('city');
var cityHistory = document.getElementById('cityHistory');
var indexList = [0, 7, 15, 23, 31, 39];

// 1-Day elements
var date0 = document.getElementById('date');
var weather0 = document.getElementById('weatherIcon');
var temp0 = document.getElementById('temperature');
var humidity0 = document.getElementById('humidity');
var wind0 = document.getElementById('wind');

// 5-Day elements
var date1 = document.getElementById('date1');
var weather1 = document.getElementById('weatherIcon1');
var temp1 = document.getElementById('temperature1');
var humidity1 = document.getElementById('humidity1');
var wind1 = document.getElementById('wind1');

var date2 = document.getElementById('date2');
var weather2 = document.getElementById('weatherIcon2');
var temp2 = document.getElementById('temperature2');
var humidity2 = document.getElementById('humidity2');
var wind2 = document.getElementById('wind2');

var date3 = document.getElementById('date3');
var weather3 = document.getElementById('weatherIcon3');
var temp3 = document.getElementById('temperature3');
var humidity3 = document.getElementById('humidity3');
var wind3 = document.getElementById('wind3');

var date4 = document.getElementById('date4');
var weather4 = document.getElementById('weatherIcon4');
var temp4 = document.getElementById('temperature4');
var humidity4 = document.getElementById('humidity4');
var wind4 = document.getElementById('wind4');

var date5 = document.getElementById('date5');
var weather5 = document.getElementById('weatherIcon5');
var temp5 = document.getElementById('temperature5');
var humidity5 = document.getElementById('humidity5');
var wind5 = document.getElementById('wind5');

// Variable declarations to store fetch data
var city_history = [];
var dates = [6];
var weathers = [6];
var temps = [6];
var humidities = [6];
var winds = [6];

// Get Location data
function getLocation(city) {
    var locationURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=aa7869e17c88eb4e086651e820469d61";
    // Fetch Location data from OpenWeatherMap
    fetch(locationURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var lat = data[0].lat;
            var lon = data[0].lon;
            getWeather(lat, lon);
        }) 
};

// Get Weather data
function getWeather(lat, lon) {
    var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=aa7869e17c88eb4e086651e820469d61";
    // Fetch OpenWeatherMap weather data
    fetch(weatherURL)
        .then(function(response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
    
}

// Display weather data
function displayWeatherData(data){
    console.log(data);
    var city_name = data.city.name;
    city_history.push(city_name);

    // Organise the necessary data
    for (i=0; i<6;i++) {
        dates[i] = new Date(data.list[indexList[i]].dt*1000);
        temps[i] = data.list[indexList[i]].main.temp;
        humidities[i] = data.list[indexList[i]].main.humidity;
        winds[i] = data.list[indexList[i]].wind.speed;
    }

    // Print data on the screen
    // Current
    date0.textContent = dates[0];
    temp0.textContent = "Temperature: " + temps[0] + "Celcius";
    humidity0.textContent = "Humidity: " + humidities[0] + "%";
    wind0.textContent = "Wind: " = winds[0] + "km/h";
    weather0.setAttribute("src", `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`);
    
    // Day 1
    date1.textContent = dates[1];
    temp1.textContent = "Temperature: " + temps[1] + "Celcius";
    humidity1.textContent = "Humidity: " + humidities[1] + "%";
    wind1.textContent = "Wind: " = winds[1] + "km/h";
    weather1.setAttribute("src", `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`);

    // Day 2
    date2.textContent = dates[2];
    temp2.textContent = "Temperature: " + temps[2] + "Celcius";
    humidity2.textContent = "Humidity: " + humidities[2] + "%";
    wind2.textContent = "Wind: " = winds[2] + "km/h";
    weather2.setAttribute("src", `https://openweathermap.org/img/w/${data.list[2].weather[0].icon}.png`);

    // Day 1
    date3.textContent = dates[3];
    temp3.textContent = "Temperature: " + temps[3] + "Celcius";
    humidity3.textContent = "Humidity: " + humidities[3] + "%";
    wind3.textContent = "Wind: " = winds[3] + "km/h";
    weather3.setAttribute("src", `https://openweathermap.org/img/w/${data.list[3].weather[0].icon}.png`);

    // Day 4
    date4.textContent = dates[4];
    temp4.textContent = "Temperature: " + temps[4] + "Celcius";
    humidity4.textContent = "Humidity: " + humidities[4] + "%";
    wind4.textContent = "Wind: " = winds[4] + "km/h";
    weather4.setAttribute("src", `https://openweathermap.org/img/w/${data.list[4].weather[0].icon}.png`);

    // Day 5
    date5.textContent = dates[5];
    temp5.textContent = "Temperature: " + temps[5] + "Celcius";
    humidity5.textContent = "Humidity: " + humidities[5] + "%";
    wind5.textContent = "Wind: " = winds[5] + "km/h";
    weather5.setAttribute("src", `https://openweathermap.org/img/w/${data.list[5].weather[0].icon}.png`);
}

// Set city function
function setCity(event) {
    event.preventDefault();
    var cityName = searchInputEl.value;
    getLocation(cityName);
}

// Search button event listener
searchButton.addEventListener('click', setCity);
