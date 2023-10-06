// Element declarations
var searchInput = document.getElementById('search');
var searchButton = document.getElementById('sumbit');
var city = document.getElementById('city');
var cityHistory = document.getElementById('cityHistory');
var indexList = [0, 7, 15, 23, 31, 39];

// 1-Day elements
var dayEls = [
    document.getElementById('date'),
    document.getElementById('weatherIcon'),
    document.getElementById('temperature'),
    document.getElementById('humidity'),
    document.getElementById('wind')
]

// 5-Day elements
var day1Els = [
    document.getElementById('date1'),
    document.getElementById('weatherIcon1'),
    document.getElementById('temperature1'),
    document.getElementById('humidity1'),
    document.getElementById('wind1')
]

var day2Els = [
    document.getElementById('date2'),
    document.getElementById('weatherIcon2'),
    document.getElementById('temperature2'),
    document.getElementById('humidity2'),
    document.getElementById('wind2')
]

var day3Els = [
    document.getElementById('date3'),
    document.getElementById('weatherIcon3'),
    document.getElementById('temperature3'),
    document.getElementById('humidity3'),
    document.getElementById('wind3')
]

var day4Els = [
    document.getElementById('date4'),
    document.getElementById('weatherIcon4'),
    document.getElementById('temperature4'),
    document.getElementById('humidity4'),
    document.getElementById('wind4')
]

var day5Els = [
    document.getElementById('date5'),
    document.getElementById('weatherIcon5'),
    document.getElementById('temperature5'),
    document.getElementById('humidity5'),
    document.getElementById('wind5')
]

// OpenWeatherMap URLs
var locationURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=aa7869e17c88eb4e086651e820469d61";
var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=aa7869e17c88eb4e086651e820469d61";

// Variable declarations to store fetch data
var cityHistory = [];
var dates = [6];
var weathers = [6];
var temps = [6];
var humidities = [6];
var winds = [6];


// Fetch OpenWeatherMap data
fetch(weatherURL)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
