import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.scss';
import Weather from '../Weather/Weather';
import CitySelection from '../CitySelection/CitySelection';
import {FaLinkedin, FaGithubSquare} from 'react-icons/fa';

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  if (city !== "" && country !== "") {
    return (
      <div className="container">
      <header>
        <h1>Weather app</h1>
      </header>
      <main>
        <CitySelection setCity={setCity} setCountry={setCountry} />
        {(city !== "") && (country !== "") && <Weather city={city} country={country}/>}
      </main>
      <footer style={{display:"none"}}>
        <div>made by Kacper Dufrat</div>
      </footer>
    </div>
    )
  }

  return (
    <div className="container">
      <header>
        <h1>Weather app</h1>
      </header>
      <main>
        <CitySelection setCity={setCity} setCountry={setCountry} />
        {(city !== "") && (country !== "") && <Weather city={city} country={country}/>}
      </main>
      <footer>
        <div>made by Kacper Dufrat</div> 
        <a href="https://www.linkedin.com/in/kacper-dufrat/"  target="_blank" rel="noopener noreferrer"><FaLinkedin className="li-icon"/></a> 
        <a href="https://github.com/kacperdufrat" target="_blank" rel="noopener noreferrer"><FaGithubSquare className="git-icon"/></a>
      </footer>
    </div>
  );
}

export default App;
