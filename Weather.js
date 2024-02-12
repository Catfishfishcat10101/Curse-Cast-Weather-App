import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const API_KEY = 'your_openweathermap_api_key';
    const URL =
`https://api.openweathermap.org/data/2.5/weather?q=Rolla&appid=${API_KEY}&units=imperial`;

      axios.get(URL)
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching the weather data', error);
        });
  }, [])};

  if (!weatherData) return <p>Loading...</p>;

  return (
    <div>
      <h1>Weather in Rolla</h1>
      <p>Temperature: {weatherData.main.temp}*F</p>
      <p>Condition: {weatherData.weather[0].description}</p>
    </div>
  );

export default Weather;
