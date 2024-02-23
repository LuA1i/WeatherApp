const weatherKey = {
  apikey: 'd234ab71d94f5f02c487dc72b72bb141',
  fetchWeather: function (city) {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&units=metric&appid=' +
        this.apikey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data))
  },
  displayWeather: function (data) {
    const { name } = data
    const { icon, description } = data.weather[0]
    const { temp, humidity } = data.main
    const { speed } = data.wind
    document.querySelector('.temp').innerText = Math.trunc(temp) + '°C'
    document.querySelector('.city').innerText = 'Weather in ' + name
    document.querySelector('.weather-img').src =
      'https://openweathermap.org/img/wn/' + icon + '.png'
    document.querySelector('.description').innerText = description
    document.querySelector('.humidity').innerText = humidity + '% Humidity'
    document.querySelector('.winds').innerText =
      'Winds Speed ' + speed + ' Km/h'
  },

  searchWeather: function () {
    this.fetchWeather(document.querySelector('.search-bar').value)
  },
}

document.querySelector('.search button').addEventListener('click', function () {
  weatherKey.searchWeather()
})

document.querySelector('.search-bar').addEventListener('keyup', function (e) {
  if (e.key == 'Enter') {
    weatherKey.searchWeather()
  }
})

weatherKey.fetchWeather('London')
