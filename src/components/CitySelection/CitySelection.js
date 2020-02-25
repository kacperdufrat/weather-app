import React, {useState} from "react";
import "./CitySelection.scss";

const CitySelection = ({setCity, setCountry}) => {
    const [cityValue, setCityValue] = useState("");
    const [countryValue, setCountryValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        setCity(cityValue);
        setCountry(countryValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={e => setCityValue(e.target.value)}
                placeholder='City'/>
            <input
                type="text"
                onChange={e => setCountryValue(e.target.value)}
                placeholder='Country'/>
            <button>Check it</button>
        </form>
    )
}

export default CitySelection;