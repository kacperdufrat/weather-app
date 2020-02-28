import React, {useState, useEffect} from "react";
import "./WeatherGeolocation.scss";
import {FaLongArrowAltDown, FaLongArrowAltUp, FaThermometerThreeQuarters} from 'react-icons/fa';
import 'weather-icons/css/weather-icons.css';

const Weather = ({lng, lat}) => {
    const [data, setData] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
      setData(false);
      setError(false);
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&APPID=198cd1c8a70a5ce116f0faa861a83524`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Błąd sieci!");
            }
        })
        .then(data => {
            setData(data);
        })
        .catch(err => {
            setError(true);
            console.error("Pojawiły się błędy - " + err.message);   
        })
    }, [lat, lng])

    if (error === true) {
        return <h1 className="loading">City not found</h1>
    }

    if (data === false) {
        return <h1 className="loading">Loading...</h1>
    }

    
    return (
        <div className="weather-container">
            <h2 className="weather-city">{data.name}, {data.sys.country}</h2>
            <div className="weather-date">{new Date().toLocaleDateString()}</div>
            <div className="weather-icon">
                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather-icon"/>
            </div>
            <div className="weather-temp">
                <FaThermometerThreeQuarters className="temperature"/>{data.main.temp}°C
            </div>
            <div className="weather-temp__minmax">
                <div className="weather-temp__min">
                    <FaLongArrowAltDown className="arrow-down"/>{data.main.temp_min}°C
                </div>
                <div className="weather-temp__max">{data.main.temp_max}°C
                    <FaLongArrowAltUp className="arrow-up"/>
                </div>
            </div>
        </div>
    )
}

export default Weather;