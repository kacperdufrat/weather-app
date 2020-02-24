import React, {useState, useEffect} from "react";

const Weather = ({city}) => {
    const [data, setData] = useState(false);


    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=198cd1c8a70a5ce116f0faa861a83524`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Błąd sieci!");
            }
        })
        .then(data => {
            setData(data.main.temp);
            console.log(data);
        })
        .catch(err => {
            // console.error("Pojawiły się błędy - " + err.message);
        })
    }, [city])


    return (
        <h1>{data}</h1>
    )
}

export default Weather;