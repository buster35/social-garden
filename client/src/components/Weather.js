import "./weather.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';

function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forcastData, setForecastData] = useState(null)
 

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c82064eb7e58f2184dc24d4908b28cf9&units=imperial`
      )
      .then((response) => {
        let finalData = [response.data.list[0], response.data.list[7], response.data.list[14]];

        setForecastData(finalData)
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleKeyUp = (e) => {
    if (e.keycode === 13) {
      handleSubmit()
    }
  }


  return (
    <div className="weather-search">
      <form onSubmit={handleSubmit} onKeyUp={handleKeyUp} >
        <input
          type="text"
          placeholder="City"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button type="submit" variant="light">Get Weather</Button>
      </form>

      {weatherData === null ? '' : (
        <div className="weather-container">
          <h1>Weather for {weatherData.city.name}</h1>
          <p>Temperature: {weatherData.list[0].main.temp} degrees</p>
          <p>Wind: {weatherData.list[0].wind.speed} mph</p>
          <p>Humidity: {weatherData.list[0].main.humidity}%</p>
        </div>
      )}

      {forcastData === null ? '' : forcastData.map((day, i) =>  (
        <div className="card col-2" key={i}>
          <div className="card-title">
            <p>{day.dt_txt}</p>
          </div>
          <div className="card-body">
            <p>wind {day.wind.speed}</p>
            <p>humidity {day.main.humidity}</p>
            <p>temperature {day.main.temp}</p>
            <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} />
          </div>
        </div>
      ))}

    </div>
  );
}

export default Weather;
