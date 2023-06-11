import "./weather.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Weather() {
  const [city, setCity] = useState("");
  // const [weatherData, setWeatherData] = useState(null);
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
        // setWeatherData(response.data);
        
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
      <h5>Three Day Forecast</h5>
      <br></br>
      <form onSubmit={handleSubmit} onKeyUp={handleKeyUp} >
        <input
          type="text"
          placeholder="City"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        /><br></br><br></br>
        <Button type="submit" variant="light">Get Weather</Button> 
      </form>
      <br></br>

      {/* {weatherData === null ? '' : (
        <div className="weather-container">
          <h1>Weather for {weatherData.city.name}</h1>
          <p>Temperature: {weatherData.list[0].main.temp} degrees</p>
          <p>Wind: {weatherData.list[0].wind.speed} mph</p>
          <p>Humidity: {weatherData.list[0].main.humidity}%</p>
        </div>
      )} */}

      {forcastData === null ? '' : forcastData.map((day, i) =>  (
        <div className="weather-container" key={i}>
          <div className="card-title">
            <p>{day.dt_txt}</p>
          </div>
          <div className="card-body">
          <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} />
            <p>Wind: {day.wind.speed}mph</p>
            <p>Humidity: {day.main.humidity}%</p>
            <p>Temperature: {day.main.temp} &deg;F</p>
            
          </div>
          <br></br> <br></br>
        </div>
        
      ))}

    </div>
  );
}

export default Weather;
