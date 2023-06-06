import './weather.css'
import React, { useState, useEffect } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c82064eb7e58f2184dc24d4908b28cf9&units=imperial`)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [city]);

  const showWeather = () => {
    if (weatherData === null) {
      return;
    }

    const cityName = weatherData.city.name;
    const temperature = weatherData.list[0].main.temp;
    const wind = weatherData.list[0].wind.speed;
    const humidity = weatherData.list[0].main.humidity;

    return (
      <div>
        <h1>Weather for {cityName}</h1>
        <p>Temperature: {temperature} degrees</p>
        <p>Wind: {wind} mph</p>
        <p>Humidity: {humidity}%</p>
      </div>
    );
  };

  const showThreeDay = () => {
    if (weatherData === null) {
      return;
    }

    const html = weatherData.list.map((day, index) => {
      const date = day.dt_txt;
      const wind = day.wind.speed;
      const humidity = day.main.humidity;
      const temperature = day.main.temp;
      const icon = day.weather[0].icon;

      return (
        <div class="card col-2">
          <div class="card-title">
            <p>{date}</p>
          </div>
          <div class="card-body">
            <p>wind {wind}</p>
            <p>humidity {humidity}</p>
            <p>temperature {temperature}</p>
            <img src={`https://openweathermap.org/img/wn/${icon}.png`} />
          </div>
        </div>
      );
    });

    return (
      <div class="three-day">
        {html}
      </div>
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="City"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>
      {showWeather()}
      {showThreeDay()}
    </div>
  );
}

export default Weather