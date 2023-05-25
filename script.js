$(document).ready(function() {
  $("#search-button").on("click", function() {
    var city = $("#search-input").val();
    if (city !== "") {
      getWeather(city);
    }
  });

  function getWeather(city) {
    var apiKey = "YOUR_API_KEY";
    var apiUrl = "https://api.weatherapi.com/v1/forecast.json";
    var days = 5;

    $.ajax({
      url: apiUrl,
      data: {
        key: apiKey,
        q: city,
        days: days
      },
      success: function(response) {
        displayWeather(response);
      },
      error: function() {
        $("#weather-info").html("Error occurred while fetching weather data.");
      }
    });
  }

  function displayWeather(data) {
    var currentWeather = data.current;
    var forecast = data.forecast.forecastday;

    var html = "<h2>Current Weather</h2>";
    html += "<p>Temperature: " + currentWeather.temp_c + "°C</p>";
    html += "<p>Humidity: " + currentWeather.humidity + "%</p>";
    html += "<p>Wind Speed: " + currentWeather.wind_kph + " km/h</p>";

    html
