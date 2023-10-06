var requestURL = "https://api.openweathermap.org/data/2.5/forecast?lat=43&lon=81&appid=aa7869e17c88eb4e086651e820469d61";

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
