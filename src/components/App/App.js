import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.scss';
import Weather from '../Weather/Weather';
import CitySelection from '../CitySelection/CitySelection';

function App() {
  const [city, setCity] = useState("");

  return (
    <>
    <p>
      Weather app
    </p>
    <CitySelection setCity={setCity}/>
    {(city !== "" )&&<Weather city={city}/>}
    </>
  );
}

export default App;
