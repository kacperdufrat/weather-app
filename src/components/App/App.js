import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.scss';
import Weather from '../Weather/Weather';
import CitySelection from '../CitySelection/CitySelection';

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  return (
    <>
      <header>
        <p>Weather app</p>
      </header>
      <main>
        <CitySelection setCity={setCity} setCountry={setCountry}/>
        {(city !== "") && (country !== "") && <Weather city={city} country={country}/>}
  
      </main>
      <footer>
        <span>Simple weather App made in ReactJS by Kacper Dufrat</span>
      </footer>
    </>
  );
}

export default App;
