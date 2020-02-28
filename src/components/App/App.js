import React, {useState} from 'react';
import './App.scss';
import Weather from '../Weather/Weather';
import CitySelection from '../CitySelection/CitySelection';
import {FaLinkedin, FaGithubSquare} from 'react-icons/fa';
import WeatherGeolocation from "../WeatherGeolocation/WeatherGeolocation";

const App = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [lng, setLng] = useState("");
  const [lat, setLat] = useState("");

  function displayLocationInfo(position) {
    let longitude = position.coords.longitude.toFixed(3);
    let latitude = position.coords.latitude.toFixed(3);
  
    setLng(longitude);
    setLat(latitude);
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocationInfo);
  }

  let weatherGeolocation;

  if (lng && lat) {
    weatherGeolocation = <WeatherGeolocation lng={lng} lat={lat}/>
  } 
  
  let footer;

  if (city === "" && country === "" && lat === "" && lng === "") {
    footer = (
      <footer>
        <div>made by Kacper Dufrat</div> 
        <a href="https://www.linkedin.com/in/kacper-dufrat/"  target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="li-icon"/>
        </a> 
        <a href="https://github.com/kacperdufrat" target="_blank" rel="noopener noreferrer">
          <FaGithubSquare className="git-icon"/>
        </a>
      </footer>
    )
  }

  return (
    <div className="container">
      <header>
        <h1>Weather app</h1>
      </header>
      <main>
        <CitySelection setCity={setCity} setCountry={setCountry} />
        <div className="api-container">
          {(city !== "") && (country !== "") && <Weather city={city} country={country}/>}
          {(city === "") && (country === "") && weatherGeolocation}
        </div>
      </main>
      {footer}
    </div>
  );
}

export default App;
