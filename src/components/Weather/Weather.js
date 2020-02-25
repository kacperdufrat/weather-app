import React, {useState, useEffect} from "react";


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
        <>
        <h2>{data.name}, {data.sys.country}</h2>
        <div>{new Date().toLocaleDateString()}</div>
        <div>IKONA POGODY</div>
        <div>{data.main.temp}°C</div>
        <div>{data.main.temp_min}°C {data.main.temp_max}°C</div>
        <div>HUMIDITY: {data.main.humidity}% WIND: {data.wind.speed}m/s PRESSURE: {data.main.pressure}Pa</div>
        </>
    )

}

export default Weather;