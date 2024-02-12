import React, {useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const API_KEY = '6c9c537a6d972dcf18875179f747da7a';
    const URL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=Rolla&units=f`;

    axios.get(URL)
    .then((response) => {
      console.log('Weather data:', response.data);
    })
    .catch((error) => {
      console.error('Error fetching the weather data', error);
    });
  }) };

  if (!weatherData) return <p>Loading...</p>;

  return (
    <div>
      <h1>Weather in Rolla</h1>
      <p>Tempertature</p>
    </div>
  )
