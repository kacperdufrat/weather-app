import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.scss';
import Weather from '../Weather/Weather';
import CitySelection from '../CitySelection/CitySelection';

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className="container">
      <header>
        <h1>Weather app</h1>
      </header>
      <main>
        <CitySelection setCity={setCity} setCountry={setCountry}/>
        {(city !== "") && (country !== "") && <Weather city={city} country={country}/>}
      </main>
      <footer>
          <div>made by Kacper Dufrat</div>
      </footer>
    </div>
  );
}

export default App;
