$(document).ready(function() {
  $('#search-button').on('click', function() {
    var city = $('#city-input').val();
    if (city !== '') {
      var apiKey = '523db02a5fd9feaf907bb544946b23ef';
      var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;
      
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
    var cityName = data.name;
    var temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
    var humidity = data.main.humidity;
    var windSpeed = data.wind.speed;

    var info = '';
    info += '<p><strong>City:</strong> ' + cityName + '</p>';
    info += '<p><strong>Temperature:</strong> ' + temperature + '°C</p>';
    info += '<p><strong>Humidity:</strong> ' + humidity + '%</p>';
    info += '<p><strong>Wind Speed:</strong> ' + windSpeed + ' km/h</p>';
    $('#weather-info').html(info);
  }
});
