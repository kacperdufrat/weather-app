import React, {useState, useEffect} from "react";
import "./Weather.scss";
import { FaLongArrowAltDown, FaLongArrowAltUp, FaThermometerThreeQuarters } from 'react-icons/fa';

const Weather = ({city, country}) => {
    const [data, setData] = useState(false);


    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=198cd1c8a70a5ce116f0faa861a83524`)
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
            console.error("Pojawiły się błędy - " + err.message);
        })
    }, [city, country])

    if (data === false) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="weather-container">
            <h2 className="weather-city">{data.name}, {data.sys.country}</h2>
            <div className="weather-date">{new Date().toLocaleDateString()}</div>
            <div className="weather-icon">IKONA POGODY</div>
            <div className="weather-temp"><FaThermometerThreeQuarters className="temperature"/>{data.main.temp}°C</div>
            <div className="weather-temp__minmax">
                <div className="weather-temp__min"><FaLongArrowAltDown className="arrow-down"/>{data.main.temp_min}°C</div>
                <div className="weather-temp__max">{data.main.temp_max}°C<FaLongArrowAltUp className="arrow-up"/></div>
            </div>
        </div>
    )

}

export default Weather;