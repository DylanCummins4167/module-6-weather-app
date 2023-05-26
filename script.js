$(document).ready(function() {
  $('#search-button').on('click', function() {
    var city = $('#city-input').val();
    if (city !== '') {
      var apiKey = '523db02a5fd9feaf907bb544946b23ef';
      var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + apiKey;
      
      $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function(response) {
          displayWeatherInfo(response);
        },
        error: function() {
          $('#weather-info').html('Failed to fetch weather data.');
        }
      });
    } else {
      $('#weather-info').html('Please enter a city name.');
    }
  });

  function displayWeatherInfo(data) {
    var cityName = data.city.name;
    var forecastList = data.list;

    var info = '<h2>Weather Forecast for ' + cityName + '</h2>';
    for (var i = 0; i < forecastList.length; i += 8) {
      var forecastData = forecastList[i];
      var forecastDate = new Date(forecastData.dt_txt);
      var temperature = Math.round(forecastData.main.temp - 273.15); // Convert to Celsius
      var humidity = forecastData.main.humidity;
      var windSpeed = forecastData.wind.speed;

      info += '<div class="forecast-item">';
      info += '<h3>' + forecastDate.toDateString() + '</h3>';
      info += '<p><strong>Temperature:</strong> ' + temperature + '°C</p>';
      info += '<p><strong>Humidity:</strong> ' + humidity + '%</p>';
      info += '<p><strong>Wind Speed:</strong> ' + windSpeed + ' km/h</p>';
      info += '</div>';
    }

    $('#weather-info').html(info);
  }
});
